import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section id="hero" className="relative py-20 md:py-32 overflow-hidden w-full">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-background">
            <div className="absolute top-10 left-1/4 w-32 h-32 border-4 border-pink-500/20 transform rotate-45"></div>
            <div className="absolute bottom-20 right-1/4 w-40 h-40 border-4 border-teal-500/20 rounded-full"></div>
            <div className="absolute top-1/3 right-10 w-24 h-24 bg-pink-500/10 transform rotate-12"></div>
            <div className="absolute bottom-1/4 left-10 w-20 h-60 bg-teal-500/10 rounded-full"></div>
          </div>
        </div>
        <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Old Classics on Old Media. 
            <span className="text-pink-md"> Anytime</span>
            , Anywhere.
          </h1>
          <div className="w-24 h-2 bg-pink-md my-4"></div>
          <p className="text-lg md:text-xl text-home-text">
            We have the latest blockbusters, classics and exclusive content available on VHS, CDs, DVDs, Blu-rays, Streaming. You name it, we have it.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 p-10">
          <Button 
            size="lg" 
            className="bg-pink-md text-background rounded-none hover:bg-pink-dark transform -skew-x-6 transition-colors duration-300 hover:translate-x-[-1px] hover:translate-y-[1px] active:translate-x-[-4px] active:translate-y-[4px] transition-transform duration-100">Start Free Trial</Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-transparent border-2 border-teal-md text-teal-md rounded-none hover:bg-teal-darkest hover:text-foreground transform -skew-x-6 transition-colors duration-300 hover:translate-x-[-1px] hover:translate-y-[1px] active:translate-x-[-4px] active:translate-y-[4px] transition-transform duration-100">Learn More</Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection