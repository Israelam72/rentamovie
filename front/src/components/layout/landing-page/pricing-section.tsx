import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

interface Plan {
  id: number
  name: string
  price: number
  description: string
  duration: number
  features: string[]
}

const PricingSection = async () => {
  const res = await fetch("http://localhost:8000/plans/")
  const data: Plan[] = await res.json()

  return (
    <section id="pricing" className="relative bg-background py-20 md:py-32 overflow-hidden w-full">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-20 w-40 h-40 border-4 border-pink-500/10 rounded-full"></div>
            <div className="absolute bottom-40 left-40 w-60 h-20 bg-teal-500/5 transform -rotate-12"></div>
            <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-pink-500/10 transform rotate-45"></div>
          </div>
        </div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Simple, Transparent Pricing
          </h2>
          <div className="w-24 h-1 bg-pink-md my-4"></div>
          <p className="text-text-gray max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include access to our <span className="font-bold text-pink-md">entire catalog</span> and <span className="font-bold text-teal-md">free shipping</span>.
          </p> 
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {data.map((plan: Plan, key: number) => (
            <Card key={key} className={`flex flex-col h-full border-[1px] bg-backgroundSecondary rounded-none ${plan.id === 2 ? "border-pink-md" : "border-teal-md"} relative overflow-hidden`}>
              {plan.id === 2 && (
                <div className="absolute top-0 right-0 translate-x-[-100%] mx-auto px-3 w-fit bg-pink-md text-white px-2 py-1 text-sm font-medium transform -skew-x-6">
                  Most Popular
                </div>
              )}
                <div className={`absolute top-0 right-0 h-full w-2 ${plan.id === 2 ? "bg-pink-md" : "bg-teal-md"}`}></div>
              <CardHeader>
                <CardTitle className="text-xl font-bold tracking-wide mt-4">{plan.name}</CardTitle>
                <p className="text-4xl font-bold">${plan.price} <span className="text-sm text-text-gray">/month</span></p>
                <CardDescription className="text-text-gray">{plan.description}</CardDescription> 
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature: string, key: number) => (
                    <li key={key} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-teal-md" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className={`w-full text-background rounded-none transform -skew-x-6 transition-colors duration-300 hover:translate-x-[-1px] hover:translate-y-[1px] active:translate-x-[-4px] active:translate-y-[4px] transition-transform duration-100 ${plan.id === 2 ? "bg-pink-md hover:bg-pink-dark" : "text-teal-md border-2 border-teal-md bg-transparent hover:text-white hover:bg-teal-darkest"}`}>Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection