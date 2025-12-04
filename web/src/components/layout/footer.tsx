import { BriefcaseBusiness, Github, Instagram, Linkedin, Mail  } from "lucide-react"
import Link from "next/link"
import { FooterDecorators } from "../decorators/signInDecorators"
import Logo from "../logo/logo"

const Footer = () => {
  return (
    <footer id="contact" className="bg-background py-12 relative border-t-2 border-pink-light/30">
      <FooterDecorators />  
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Logo />
              </Link>
              <p className="text-gray-400 text-sm mb-4">My name is <span className="font-bold text-pink-light">Israel A M</span>, I'm a software developer and this is my portfolio website. <br /> <span className="font-bold">Links to my social media are below.</span></p>
              <div className="flex space-x-4">
                <Link href="https://www.linkedin.com/in/israel-am/" className="text-gray-400 hover:text-pink-light transition-colors">
                  <Linkedin className="size-7" />
                  <span className="sr-only">Linkedin</span>
                </Link>
                <Link href="https://github.com/Israelam72" className="text-gray-400 hover:text-pink-light transition-colors">
                  <Github className="size-7" />
                  <span className="sr-only">Github</span>
                </Link>
                <Link href="mailto:israelarantes.m@gmail.com" className="text-gray-400 hover:text-pink-light transition-colors">
                  <Mail className="size-7" />
                  <span className="sr-only">Gmail</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-pink-light transition-colors">
                  <BriefcaseBusiness className="size-7" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="https://www.instagram.com/israel_a_m/" className="text-gray-400 hover:text-pink-light transition-colors">
                  <Instagram className="size-7" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} RENTAMOVIE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer