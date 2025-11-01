import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 min-h-full"></div>
      <div className="relative z-10 min-h-screen">
        <Header />
        <main>
          <AboutSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
