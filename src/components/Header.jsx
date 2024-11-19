"use client";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PhoneIcon, MailIcon, GlobeIcon, UserIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <PhoneIcon className="w-4 h-4 text-green-500 mr-2" />
            <span>+44 45678908</span>
          </div>
          <div className="flex items-center">
            <MailIcon className="w-4 h-4 text-green-500 mr-2" />
            <span>example@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Select defaultValue="english">
            <SelectTrigger className="w-[120px]">
              <GlobeIcon className="w-4 h-4 text-green-500 mr-2" />
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="spanish">Spanish</SelectItem>
              <SelectItem value="french">French</SelectItem>
            </SelectContent>
          </Select>
          <Link href="/signin" className="flex items-center hover:text-green-500">
            <UserIcon className="w-4 h-4 mr-1" />
            Sign In
          </Link>
          <span>/</span>
          <Link href="/signup" className="hover:text-green-500">Sign Up</Link>
        </div>
      </div>
      <hr/>
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
           
            <div className="flex flex-col">
              
              <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={150}
                height={40}
              />
            </Link>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/faqs" className="text-gray-600 hover:text-gray-900">FAQs</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </nav>
          {/* <Button className="bg-green-500 hover:bg-green-600 text-white">
            BUY TICKETS
          </Button> */}
          <Link href="/tickets">
        <Button className="bg-green-500 hover:bg-green-600 text-white">
          BUY TICKETS
        </Button>
      </Link>
        </div>
      </div>
    </header>
  )
}