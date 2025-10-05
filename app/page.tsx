import Header from "./components/Header"
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-screen flex flex-col overflow-auto">
      <Header />

      <div className="flex flex-col items-center justify-start px-4 md:px-8">

        <div className="w-full max-w-200 mt-[15vh] md:mt-[20vh]">
          <div className="text-5xl font-semibold text-center mb-8 animate-slideInUp">
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

          <div className="text-white mt-5">
            At Signable, our mission is to bridge the divide between
            Deaf and hearing communities by leveraging technology to
            create accessible, real-time communication tools. We believe
            that everyone deserves to be understood and included, regardless
            of the language they use to communicate.
          </div>

          <div className="text-white mt-5">
            Our web app uses your camera to recognize American Sign Language
            (ASL) signs. These signs are translated instantly by our backend
            and displayed as readable text and natural-sounding speech (TTS)
            on the frontend. This empowers Deaf and hard-of-hearing individuals
            to express themselves freely, while making their messages accessible
            to everyone around them, both online and in-person.
          </div>

          <div className="text-white mt-5">
            By transforming ASL gestures into text and voice, Signable helps
            break down barriers, promote inclusivity, and foster true connection
            in schools, workplaces, and everyday life. Our project is more than
            a tool—it’s a step forward in building a world where communication is
            open to all.
          </div>

        </div>
      </div>

    </main>
  )
}