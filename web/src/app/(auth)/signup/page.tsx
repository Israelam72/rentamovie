import { SignInBackgroundDecorators, SignInDecorators, CardDetails, TextDetails } from "@/components/decorators/signInDecorators"
import SignUpForm from "./form"


const SignUp = () => {
  return (
    <div className="flex flex-col bg-background items-center justify-center min-h-screen">
      <SignInBackgroundDecorators />
      <main className="flex flex-1 items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-md">
          <div className="relative">
            <SignInDecorators />
            <div className="bg-backgroundSecondary border-2 border-teal-light p-8 relative w-[450px]">
              <CardDetails type="teal" />
              <div className="mb-6 text-center">
                <h1 className="text-2xl font-bold tracking-wider mb-2">Create an Account</h1>
                <TextDetails type="teal" />
              </div>

              <SignUpForm />

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignUp