"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Twitter, Instagram, Menu, Linkedin } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full px-4 sm:px-6 py-4">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 sm:space-x-8">
          <Link href="/" className="text-lg font-semibold text-white">
            ⚡
          </Link>
          <div className="hidden lg:flex items-center space-x-6">
            <Link 
              href="/about" 
              className={`transition-colors text-sm relative ${
                pathname === '/about' 
                  ? 'text-purple-400 font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              about
              {pathname === '/about' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" />
              )}
            </Link>
            <Link 
              href="/career" 
              className={`transition-colors text-sm relative ${
                pathname === '/career' 
                  ? 'text-cyan-400 font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              career
              {pathname === '/career' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
              )}
            </Link>
            {/* <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              projects
            </Link> */}
            <Link href="#" className="text-orange-400 hover:text-orange-300 transition-colors text-sm">
              blogs (coming soon)
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="hidden sm:flex items-center space-x-2">
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

          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-gray-300 hover:text-white hover:bg-white/10 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden mt-4 px-4 sm:px-6">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 space-y-3">
            <Link 
              href="/" 
              className={`block transition-colors py-2 ${
                pathname === '/' 
                  ? 'text-white font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              home
            </Link>
            <Link 
              href="/about" 
              className={`block transition-colors py-2 ${
                pathname === '/about' 
                  ? 'text-purple-400 font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              about
            </Link>
            <Link 
              href="/career" 
              className={`block transition-colors py-2 ${
                pathname === '/career' 
                  ? 'text-cyan-400 font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              career
            </Link>
            {/* <Link href="#" className="block text-gray-300 hover:text-white transition-colors py-2">
              projects
            </Link> */}
            {/* <Link href="#" className="block text-orange-400 hover:text-white transition-colors py-2">
              literature
            </Link>
            <Link href="#" className="block text-orange-400 hover:text-orange-300 transition-colors py-2">
              links
            </Link> */}
            <div className="flex items-center space-x-2 pt-2 border-t border-white/10">
             <Link href={"https://www.github.com/dhrubajitbhattacharji"}>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 p-2">
                <Github className="h-4 w-4" />
              </Button>
              </Link>
              <Link href={"https://x.com/dhruxv1"}>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              </Link>
              <Link href={"https://www.linkedin.com/in/dhrubajitbhattacharjee/"}>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10 p-2">
                <Linkedin className="h-4 w-4" />
              </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
