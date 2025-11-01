"use client";
import { FaPython } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
// import { SiLangchain } from "react-icons/si";
// import { SiHuggingface } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

export function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
        <div className="relative">
          <div className="w-40 h-40 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/25">
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

          <h2 className="text-gray-300 text-2xl sm:text-2xl">
            Dhrubajit Bhattacharjee
          </h2>
        </div>

        <div className="max-w-2xl space-y-4">
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed px-4 sm:px-0">
            Engineering intelligence into reality, I bridge research and
            production—building solutions powered by llms, vision-language
            models and agentic pipelines that turn cutting-edge AI into everyday
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 text-gray-300 text-sm sm:text-base">
            <span>Building the</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent font-medium">
              next-gen documentAI
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 opacity-60 pt-6 sm:pt-8 px-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10">
            <FaPython className="w-10 h-10" />
          </div>

          <div className="w-8 h-8 sm:w-10 sm:h-10">
            <SiPytorch className="w-10 h-10" />
          </div>

          <div className="w-8 h-8 sm:w-10 sm:h-10">
            <SiFastapi className="w-10 h-10" />
          </div>

          <div className="w-8 h-8 sm:w-10 sm:h-10">
            <SiTensorflow className="w-10 h-10" />
          </div>

          <div className="w-8 h-8 sm:w-10 sm:h-10">
            <SiTypescript className="w-10 h-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
