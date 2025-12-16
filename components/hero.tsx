"use client";
import { FaPython } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
// import { SiLangchain } from "react-icons/si";
// import { SiHuggingface } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Twitter, Instagram, Menu, Linkedin } from "lucide-react"


export function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
        <div className="relative">
          <div className="w-40 h-40 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-purple-800 to-pink-700 flex items-center justify-center shadow-lg shadow-purple-500/25">
            <img
              src="/profile2.png"
              alt="Profile picture"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-2">
          {/* <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            Dhruv
          </h1> */}

          <h2 className="font-anon font-bold text-gray-300 text-2xl sm:text-2xl">
            Dhrubajit Bhattacharjee
          </h2>
        </div>

        <div className="max-w-2xl space-y-4">
          <p className="text-gray-200 text-base  sm:text-lg leading-relaxed px-4 sm:px-0">
            Hi 👋 I'm a software engineer working with machine learning and AI. I work at <span className="text-[#c76ed7] underline"><a target="_blank" href="https://www.kriyam.ai">kriyam.ai</a></span> where I mostly do backend development for ML applications and setup pipelines to deploy and train the models. Currently exploring agentic AI. <br/>Check out my <span className="text-purple-400 underline"><a target="_blank"  href="https://www.linkedin.com/in/dhrubajitbhattacharjee">linkedin</a></span> and <span className="text-purple-400 underline"><a target="_blank" href="https://www.github.com/dhrubajitbhattacharji">github</a></span> for more info 
          </p>
<div className="sm:flex justify-center items-center">
            <Link href="https://github.com/dhrubajitbhattacharji" target="blank">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 p-2">
              <Github className="h-4 w-4" />
            </Button>
            
            </Link>
            <Link href="https://x.com/dhruxv1" target="blank">

            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 p-2">
              <Twitter className="h-4 w-4" />
            </Button>
            </Link>

            <Link href="https://www.linkedin.com/in/dhrubajitbhattacharjee/" target="blank">

            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 p-2">
              <Linkedin className="h-4 w-4" />
            </Button>
            </Link>

          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 opacity-60 pt-4 sm:pt-8 px-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10">
            <FaPython className="text-white w-10 h-10" />
          </div>

          <div className="w-8 h-8 sm:w-10 sm:h-10">
            <SiPytorch className="text-white w-10 h-10" />
          </div>

          <div className="w-8 h-8 sm:w-10 sm:h-10">
            <SiFastapi className="text-white w-10 h-10" />
          </div>

          <div className="w-8 h-8 sm:w-10 sm:h-10">
            <SiTensorflow className="text-white w-10 h-10" />
          </div>

          <div className="w-8 h-8 sm:w-10 sm:h-10">
            <SiTypescript className="text-white w-10 h-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
