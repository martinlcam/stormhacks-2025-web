import Header from "./components/Header"
import Link from "next/link";

export default function Home() {
  return (
      <main className="min-h-screen w-screen flex flex-col overflow-auto">
        <Header />

        <div className="flex flex-col items-center flex-grow justify-start px-4 md:px-8">

          <div className="w-full max-w-200 mt-[10vh] md:mt-[20vh]">
            <div className="text-5xl font-semibold text-center mb-8">
              The solution for the vision impaired
            </div>
          </div>

          <div className="w-full max-w-200 flex justify-center">
            <Link href="/stream-preview">
              <button className="text-[20px] px-8 py-4 bg-[#0052ff] text-white rounded-4xl shadow-xl hover:bg-[#47618a] transition" type="button">
                Try for free!
              </button>
            </Link>

          </div>
        </div>
      </main>
  )
}