"use client";

//unused for now
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-[35px] font-bold text-[#0052ff]">
                    Signable
                </div>

                <button className="text-[20px] px-8 py-2.5 bg-[#0052ff] text-white rounded-4xl shadow-xl hover:bg-[#47618a] transition" type="button">
                    Pricing
                </button>

            </div>
        </header>
    )
}