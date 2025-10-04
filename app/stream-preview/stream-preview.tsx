"use client";
import { useRef, useState } from "react";

export default function StreamPreview() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [streaming, setStreaming] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  const startPreview = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      socketRef.current = new WebSocket("ws://localhost:CHANGE/ws/stream/");
      socketRef.current.onopen = () => {
        mediaRecorderRef.current = new MediaRecorder(stream);

        mediaRecorderRef.current.ondataavailable = (event) => {
          if (event.data.size > 0 && socketRef.current?.readyState === WebSocket.OPEN) {
            socketRef.current.send(event.data);
          }
        };

        mediaRecorderRef.current.start(300);
        setStreaming(true);
      };

      socketRef.current.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

    } catch (err) {
      console.error("Error accessing media devices.", err);
    }
  };

  const stopPreview = () => {
    const stream = videoRef.current?.srcObject as MediaStream | null;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      if (videoRef.current) videoRef.current.srcObject = null;
    }
    setStreaming(false);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <video className="flex justify-center scale-x-[-1]" ref={videoRef} width={480} height={320} autoPlay muted />
      <div className="flex justify-center gap-2 mt-2">
        {!streaming ? (
          <button onClick={startPreview}>Start Streaming</button>
        ) : (
          <button onClick={stopPreview}>Stop Streaming</button>
        )}
      </div>
    </div>
  );
}
