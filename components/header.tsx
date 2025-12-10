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
      <nav className="max-w-6xl mx-auto flex items-center justify-center">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="sm:flex items-center space-x-2">
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
      </nav>

      
    </header>
  )
}
