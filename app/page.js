"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function Home() {

  const [text, setText] = useState("")
  const router = useRouter()
  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }
  return (
    <main>
      <Navbar />
      <section className="bg-[#254f1a] min-h-screen overflow-x-hidden w-full flex justify-center items-center flex-col md:flex-row">
        <div className="flex justify-center flex-col p-5 md:p-0 md:ml-[10vw] gap-4 md:mt-30 pt-24 sm:pt-0 w-full max-w-xl">
          <h1 className="text-yellow-300 font-bold text-3xl md:text-5xl">A link in bio built for you.</h1>
          <p className="text-yellow-300 md:text-xl md:mb-8">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>

          <div className="input flex flex-col md:flex-row gap-2">
            <input value={text} onChange={(e)=> setText(e.target.value)} className="bg-white focus:outline-green-800 px-2 py-3 rounded-md" type="text" placeholder="linktr.ee/"/>
            <button onClick={()=> createTree()} className="bg-pink-200 rounded-full px-11 py-2 font-semibold">Get Started</button>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col md:ml-[10vw] w-full max-w-sm">
          <img className="md:mt-27" src="/home.png" alt="Homepage image" />
        </div>
      </section>
      <section className="bg-[#2665d6] min-h-screen overflow-x-hidden w-full flex md:flex-row justify-center items-center flex-col-reverse">
        <div className="flex justify-center items-center flex-col md:ml-[10vw] w-full max-w-sm">
          <img className="md:mt-21 mt-2" src="/home2.png" alt="Homepage image"  />
        </div>
        <div className="flex justify-center flex-col p-5 md:p-0 md:ml-[14vw] md:mr-[3vw] gap-4 mt-22 pt-24 sm:pt-0 w-full max-w-xl">
          <h1 className="text-[#d2e823] font-extrabold text-3xl md:text-5xl">Create and customize your Linktree in minutes</h1>
          <p className="text-white font-bold md:text-lg md:mb-5">Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Linktree automatically enhance it to match your brand and drive more clicks.</p>

          <div className="input flex gap-2">
            <button onClick={()=> createTree()} className="bg-[#d2e823] rounded-full px-11 py-4 font-semibold">Get Started for free</button>
          </div>
        </div>
      </section>
    </main>
  );
}
