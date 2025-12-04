const FooterDecorators = () => {
  return (
  <div className="absolute inset-0 z-0">
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-light/50 via-teal-500/50 to-pink-light/50"></div>
    <div className="absolute top-10 right-10 w-20 h-20 border-4 border-pink-light/10 transform rotate-45"></div>
  </div>
  )
}

const SignInBackgroundDecorators = () => {
  return (
  <div className="fixed inset-0 z-0 opacity-10">
    <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-light/20"></div>
    <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-teal-light/10"></div>
    <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-pink-light/10"></div>
    <div className="absolute top-1/3 right-1/3 w-40 h-40 rotate-45 bg-teal-light/20"></div>
    <div className="absolute bottom-40 right-20 w-60 h-60 rotate-12 bg-pink-light/10"></div>
  </div>
  )
}

const SignInDecorators = () => {
  return (
    <>
      <div className="absolute -top-6 -left-6 w-12 h-12 border-2 border-pink-light/40 transform rotate-12"></div>
      <div className="absolute -bottom-6 -right-6 w-12 h-12 border-2 border-teal-light/40 rounded-full"></div>
    </>
  )
}

const CardDetails = ({ type }: { type: string }) => {
  return (
    <>
      <div className={`absolute top-0 left-0 w-2 h-full ${type === "teal" ? "bg-teal-light" : "bg-pink-light"}`}></div>
    </>
  )
}

const TextDetails = ({ type }: { type: string }) => {
  return (
    <>
      <div className={`w-16 h-1 ${type === "teal" ? "bg-teal-500" : "bg-pink-500"} mx-auto mb-4`} />
    </>
  )
}

export { SignInBackgroundDecorators, SignInDecorators, CardDetails, TextDetails, FooterDecorators };