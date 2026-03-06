"use client"

import Link from "next/link"
import { useState } from "react"
import { playfair } from "../lib/fonts.js";
import Image from "next/image";

export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full  border-b bg-white ">
      
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 ">

        <div className="flex items-center gap-1">
          <Image
            src="/grill.svg"
            width={32}
            height={32}
            alt="logo icon"
          />
        <Link href="/"><h1 className={`${playfair.className} text-3xl text-black`}>
          Dubai Grill
        </h1></Link>
        </div>
        

        <div className="hidden md:flex gap-8 text-lg font-medium pt-4 ">
          <Link  href="/" className="hover:text-[#B87333] transition text-black">Home</Link>
          <Link href="/menu" className="hover:text-[#B87333] transition text-black">Menu</Link>
          <Link href="/catering" className="hover:text-[#B87333] transition text-black">Catering</Link>
          <Link href="/about" className="hover:text-[#B87333] transition text-black">About Us</Link>
          <Link href="/contact" className="hover:text-[#B87333] transition text-black">Contact Us</Link>
        </div>

     
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

   
      {open && (
        <div className="text-black md:hidden flex flex-col gap-4 p-4 border-t">
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/catering">Catering</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      )}

    </nav>
  )
}