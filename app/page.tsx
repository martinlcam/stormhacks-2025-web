import Header from "./components/Header"
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-screen flex flex-col overflow-auto">
      <Header />

      <div className="flex flex-col items-center justify-start px-4 md:px-8">

        <div className="w-full max-w-200 mt-[15vh] md:mt-[20vh]">
          <div className="text-5xl font-semibold text-center mb-8">
            An all in one solution for the auditorily impaired
          </div>
        </div>

        <div className="w-full max-w-200 flex justify-center">
          <Link href="/stream-preview">
            <button className="text-[20px] px-8 py-4 bg-[#0052ff] text-white rounded-4xl shadow-xl hover:bg-[#47618a] transition" type="button">
              Try for Free!
            </button>
          </Link>
        </div>
      </div>

      {/*jesse im blue*/}
      <div className="w-full mt-10 bg-blue-600 h-150">
        <div className="w-full max-w-lg px-4 sm:px-6 md:max-w-xl md:px-10 pt-8 md:pt-12">
          <div className="text-[30px] text-white font-semibold text-left">
            Our mission: 
            Bridge the Divide
          </div>
          <div>
            sample-text
          </div>
        </div>
      </div>

    </main>
  )
}