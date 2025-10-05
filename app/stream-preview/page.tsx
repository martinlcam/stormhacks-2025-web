import StreamPreview from "./stream-preview";
import Header from "../components/Header";

export default function Page() {
  return (
    <main className="p-4">
      <div className="flex text-[70px] mt-20 justify-center">Live Stream Preview</div>
      <Header/>
      <StreamPreview/>
    </main>
  );
}
