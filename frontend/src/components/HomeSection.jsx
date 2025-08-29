import { ArrowDown } from "lucide-react";

const HomeSection = () => {
 
  return (
          <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4">

            <div className="container max-w-4xl mx-auto text-center z-10"></div>
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hello, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "}Vitthal</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">{" "}Bhalot</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 ">I am a Full-Stack Developer with a strong focus on building scalable, high-performance and user-oriented web applications. Skilled in both front-end and back-end technologies, I deliver end-to-end solutions that seamlessly integrate functionality, performance, and design.

                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>

            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-forground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
             
            </div>
          </section>
         )
}
export default HomeSection;