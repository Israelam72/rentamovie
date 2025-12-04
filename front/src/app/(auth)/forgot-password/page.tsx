import { SignInBackgroundDecorators, SignInDecorators, CardDetails, TextDetails } from "@/components/decorators/signInDecorators"
import ForgotPasswordForm from "./form"


const ForgotPassword = () => {
  return (
    <div className="flex flex-col bg-background items-center justify-center min-h-screen">
      <SignInBackgroundDecorators />
      <main className="flex flex-1 items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-md">
          <div className="relative">
            <SignInDecorators />
            <div className="bg-backgroundSecondary border-2 border-pink-light p-8 relative w-[450px]">
              <CardDetails type="pink" />
              <div className="mb-6 text-center">
                <h1 className="text-2xl font-bold tracking-wider mb-2">Forgot Password</h1>
                <TextDetails type="pink" />
              </div>

              <ForgotPasswordForm />

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ForgotPassword