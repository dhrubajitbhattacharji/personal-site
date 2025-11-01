import { Button } from "@/components/ui/button";
import { Twitter, Mail, Link } from "lucide-react";

export function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <div className="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
          Say <span className="text-orange-400">Hi!</span>
        </h2>

        <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-md mx-auto px-4 sm:px-0">
          Got an idea worth building? Open to opportunities as an AI/ML Engineer or Full-Stack Engineer. Drop a DM.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <a href="https://x.com/dhruxv1">
            <Button
              variant="outline"
              className="cursor-pointer w-full sm:w-auto flex items-center justify-center space-x-2 bg-transparent border-white/20 text-white hover:bg-white/10 text-sm sm:text-base"
            >
              <Twitter className="h-4 w-4 text-blue-400" />
              <span>tweet</span>
            </Button>
          </a>

          <a href="mailto:hello@dhrubajit.tech">
            <Button
              variant="outline"
              className="cursor-pointer w-full sm:w-auto flex items-center justify-center space-x-2 bg-transparent border-white/20 text-white hover:bg-white/10 text-sm sm:text-base"
            >
              <Mail className="h-4 w-4 text-orange-400" />
              <span className="truncate">hello@dhrubajit.tech</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
