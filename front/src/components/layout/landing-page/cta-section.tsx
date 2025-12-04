import { Button } from "@/components/ui/button"

const CTA = () => {
  return (
    <section id="cta" className="relative bg-backgroundSecondary py-20 md:py-32 overflow-hidden w-full">
      <div id="cta-background" className="absolute inset-0 z-0">
        <div className="absolute size-fill inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-1/3 w-40 h-40 border-4 border-pink-500/10 transform rotate-45"></div>
          <div className="absolute bottom-20 right-1/4 w-60 h-60 border-4 border-teal-500/10 rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-20 h-60 bg-pink-500/5"></div>
          <div className="absolute bottom-0 right-0 w-full h-20 bg-teal-500/5"></div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col container relative items-center text-center mb-16 z-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Hi, I'm Israel!
          </h2>
          <div className="w-24 h-1 bg-pink-md my-4"></div>
          <p className="text-text-gray max-w-2xl mx-auto">
            I’m a software developer with a passion for technology, cinema, and crafting exceptional digital experiences.
            This project is part of my portfolio.
          </p>
          <div className="flex items-center justify-center gap-4 p-10">
            <Button 
              className="bg-pink-md text-background rounded-none hover:bg-pink-dark transform -skew-x-6 transition-colors duration-300 hover:translate-x-[-1px] hover:translate-y-[1px] active:translate-x-[-4px] active:translate-y-[4px] transition-transform duration-100"
              asChild
            >
              <a href="https://www.linkedin.com/in/israel-am/" target="_blank" rel="noopener noreferrer">
                My LinkedIn
              </a>
            </Button>
            <Button 
              className="bg-transparent border-2 border-teal-md text-teal-md rounded-none hover:bg-teal-darkest hover:text-foreground transform -skew-x-6 transition-colors duration-300 hover:translate-x-[-1px] hover:translate-y-[1px] active:translate-x-[-4px] active:translate-y-[4px] transition-transform duration-100"
              asChild
            >
              <a href="mailto:israelarantes.m@gmail.com">
                Contact me
              </a>
            </Button>
          </div>
          <p className="text-text-gray max-w-2xl">
            Feel free to explore my projects!
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA