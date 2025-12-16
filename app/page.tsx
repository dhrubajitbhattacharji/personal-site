import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedProjects } from "@/components/featured-projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#292929] relative">
      <div className="absolute inset-0 bg-[#292929] min-h-full"></div>
      <div className="relative z-10 min-h-screen">
        {/* <Header /> */}
        <main>
          <Hero />
          <FeaturedProjects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
