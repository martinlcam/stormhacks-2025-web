"use client";

//unused for now
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-xl font-bold text-[#0052ff]">
                    Signable
                </div>
            </div>
        </header>
    )
}