import { Button } from "@/components/ui/button";
import { Twitter, Mail, PhoneCall } from "lucide-react";

export function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      {/* <div className="bg-gray-800/30 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center"> */}

        <p className="text-gray-300 text-center text-base sm:text-lg">
          Open to new opportunities. My work and personal emails:
        </p>

        <div className="flex mt-2 flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
        

          <a href="mailto:hello@dhrubajit.tech">
            <Button
              variant="outline"
              className="cursor-pointer w-full sm:w-auto flex items-center justify-center space-x-2 bg-transparent border-white/20 text-white hover:bg-white/10 text-sm sm:text-base"
            >
              <Mail className="h-4 w-4 text-orange-400" />
              <span className="truncate">hello@dhrubajit.tech</span>
            </Button>
          </a>
          <a href="mailto:dhrubajitbhattacharjee01@gmail.com">
            <Button
              variant="outline"
              className="cursor-pointer w-full sm:w-auto flex items-center justify-center space-x-2 bg-transparent border-white/20 text-white hover:bg-white/10 text-sm sm:text-base"
            >
              <Mail className="h-4 w-4 text-orange-400" />
              <span className="truncate">dhrubajitbhattacharjee01@gmail.com</span>
            </Button>
          </a>
          
        </div>
      {/* </div> */}
    </section>
  );
}
