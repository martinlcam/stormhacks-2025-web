import Header from "./components/Header"

export default function Home() {
  return (
    <main className="min-h-screen w-screen flex flex-col overflow-auto">
      <Header />

      <div className="flex text-[150px] justify-center items-center flex-grow">
        <a href="/stream-preview" className="text-[50px]">
          Stream Preview
        </a>
      </div>



    </main>
  )
}