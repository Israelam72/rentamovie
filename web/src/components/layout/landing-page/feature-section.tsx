import { Star, Film } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Movie {
  id: number
  title: string
  genre: string
  director: string
  releaseYear: number
  synopsis: string
  rating: number
  image_url: string
}

const FeatureSection = async () => {
  const res = await fetch("http://localhost:8000/home/")
  const data: Movie[] = await res.json()

  return (
    <section id="feature" className="relative bg-backgroundSecondary py-20 md:py-32 overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-32 h-full bg-pink-500/5"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-teal-500/5"></div>
          <div className="absolute top-20 left-20 w-20 h-20 rounded-full border-4 border-pink-500/10"></div>
          <div className="absolute bottom-40 right-40 w-16 h-16 transform rotate-45 border-4 border-teal-500/10"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
                Featured Movies
            </h2>
            <div className="w-24 h-1 bg-pink-md my-4"></div>
            <p className="text-text-gray max-w-2xl mx-auto">
            Check out our latest additions and most popular titles available for rent or streaming.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.map((movie: Movie) => (
              <Card key={movie.id} className="flex flex-col h-full bg-backgroundSecondary border-2 border-pink-md/30 overflow-hidden rounded-none group">
                <div className="relative aspect-[2/3] w-full overflow-hidden">
                  <div className="absolute inset-0 border-b-2 border-pink-500/30 z-10"></div>
                  <Image
                    src={movie.image_url}
                    alt={movie.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 filter saturate-50"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="font-bold tracking-wide">{movie.title}</CardTitle>
                  <div className="flex items-center gap-1 text-pink-md">
                    <Star className="w-4 h-4 fill-pink-md" />
                    <span className="text-sm">{movie.rating}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <CardDescription className="text-text-gray">
                    {movie.synopsis}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-4 pt-0 mt-auto">
                  <Button className="w-full bg-pink-md text-background rounded-none hover:bg-pink-dark transform -skew-x-6 transition-colors duration-300 hover:translate-x-[-1px] hover:translate-y-[1px] active:translate-x-[-4px] active:translate-y-[4px] transition-transform duration-100">
                    <Film className="mr-2 h-4 w-4" />
                    Watch Trailer
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default FeatureSection