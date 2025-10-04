"use client";
import { useRef, useState } from "react";

export default function StreamPreview() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [streaming, setStreaming] = useState(false);

  const startPreview = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      mediaRecorderRef.current = new MediaRecorder(stream);
      setStreaming(true);
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
    <div>
      <video ref={videoRef} width={480} height={320} autoPlay muted />
      <div className="flex gap-2 mt-2">
        {!streaming ? (
          <button onClick={startPreview}>Start Streaming</button>
        ) : (
          <button onClick={stopPreview}>Stop Streaming</button>
        )}
      </div>
    </div>
  );
}
