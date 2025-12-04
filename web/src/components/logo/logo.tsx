import { Clapperboard } from "lucide-react";

const Logo = () => {
  return (
    <>  
      <div className="relative w-8 h-8 flex items-center justify-center">
        <Clapperboard className="text-pink-md border-pink-light" />
        <div className="absolute inset-0 border-2 border-pink-md rounded-md transform -rotate-12"></div>
      </div>
      <h1 className="text-xl font-bold">RENTAMOVIE</h1>
    </>
  )
}

export default Logo;