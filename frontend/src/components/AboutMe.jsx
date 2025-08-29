
import { Code , User , Briefcase} from "lucide-react";

const AboutSection = () => {
 
  return (
         <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-10">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>


                        <p className="text-muted-foreground">I’m a Full-Stack Developer who enjoys building things that make life easier and more enjoyable. I like the balance of front-end creativity and back-end logic—bringing ideas to life with React, Next.js, Node.js, and databases.</p>


                        <p className="text-muted-foreground">I’m curious by nature, always exploring new technologies, and I see every project as a chance to learn something new. For me, coding isn’t just work—it’s a way to solve problems, be creative, and leave something meaningful behind.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                                <a href="#contact" className="cosmic-button">
                                    {" "}
                                        Get In Touch
                                </a>

                                <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                    {" "}
                                    Resume

                                </a>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Devlopment</h4>
                                    <p className="text-muted-foreground">Creating responsive website and web applications with modern frameWorks</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Devlopment</h4>
                                    <p className="text-muted-foreground">Creating responsive website and web applications with modern frameWorks</p>
                                </div>
                            </div>

                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Devlopment</h4>
                                    <p className="text-muted-foreground">Creating responsive website and web applications with modern frameWorks</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

         </section>
         )
}
export default AboutSection;