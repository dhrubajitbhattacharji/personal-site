import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "01",
    title: "Latest Works on Document AI",
    description: "Finetuned models, Document Data Prep and Training, AI document pipelines etc",
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    textColor: "text-gray-900",
    url: "https://github.com/dhrubajitbhattacharji/document-AI"
  },
  {
    id: "02",
    title: "Layout-qa",
    description: "Vision Guided chunking and qa from documents",
    color: "bg-gradient-to-br from-blue-600 to-purple-700",
    textColor: "text-white",
    url: "https://github.com/dhrubajitbhattacharji/Layout-qa"
  },
  {
    id: "03",
    title: "Document Verification Agent",
    description: "document verification, analysis and fills up forms",
    color: "bg-gradient-to-br from-amber-600 to-orange-700",
    textColor: "text-white",
    url: "https://github.com/dhrubajitbhattacharji/BGV-Agent"
  },
]

export function FeaturedProjects() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 space-y-4 sm:space-y-0">
        {/* <h2 className="text-xs sm:text-sm font-medium text-gray-400 uppercase tracking-wider">Works</h2> */}
        <Link target="blank" href={"https://github.com/dhrubajitbhattacharji"}> 
        <Button variant="link" className="text-blue-400 hover:text-blue-300 text-sm sm:text-base p-0 h-auto cursor-pointer">
          see all
          <ArrowUpRight className={`h-4 w-4 sm:h-5 sm:w-5 group-hover:opacity-100 transition-opacity`}/>
        </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project) => (
          <Link target="blank" href={project.url}>
          <Card
            key={project.id}
            className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm hover:bg-white/10"
          >
            <CardContent className="p-0">
              <div
                className={`${project.color} h-40 sm:h-48 rounded-t-lg flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className={`text-xs font-medium ${project.textColor} opacity-70`}>{project.id}</span>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <ArrowUpRight
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${project.textColor} opacity-70 group-hover:opacity-100 transition-opacity`}
                  />
                </div>

                {/* Project Icon/Logo Placeholder */}
                <div className={`text-4xl sm:text-6xl font-bold ${project.textColor} opacity-20`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-gray-800/50 backdrop-blur-sm rounded-b-lg border-t border-white/10">
                <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">{project.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{project.description}</p>
              </div>
            </CardContent>
          </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
