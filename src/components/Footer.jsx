"use client";
import Link from "next/link"
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, ArrowUp, ChevronRight } from "lucide-react"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1e2738] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="lg:w-1/3 space-y-4">
            <div className="flex items-center space-x-2">
              {/* <svg className="w-10 h-10 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg> */}
              <div className="flex flex-col">
                {/* <span className="text-xl font-bold">ViserBus</span>
                <span className="text-xs text-gray-400">BUS TICKET BOOKING SYSTEM</span> */}
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={150}
                    height={50}
                  />
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Delectus culpa laboriosam debitis saepe. Commodi earum minus ut obcaecati veniam deserunt est!
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.2,3H4.8C3.8,3,3,3.8,3,4.8v14.4C3,20.2,3.8,21,4.8,21h14.4c1,0,1.8-0.8,1.8-1.8V4.8C21,3.8,20.2,3,19.2,3z M8,17.7H5.3V9.3H8V17.7z M6.6,8.1C5.8,8.1,5.2,7.5,5.2,6.7c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C8,7.5,7.4,8.1,6.6,8.1z M18.7,17.7h-2.7v-4.1c0-1,0-2.3-1.4-2.3c-1.4,0-1.6,1.1-1.6,2.2v4.2H10V9.3h2.6v1.2h0c0.4-0.7,1.2-1.4,2.5-1.4c2.7,0,3.2,1.8,3.2,4.1V17.7z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
          <div className="lg:w-1/5">
            <h3 className="text-lg font-semibold mb-4 text-green-500 flex items-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              Useful Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  About
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/5">
            <h3 className="text-lg font-semibold mb-4 text-green-500 flex items-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Policies
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/ticket-policies" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  Ticket Policies
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-300 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-2 text-green-500" />
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/5">
            <h3 className="text-lg font-semibold mb-4 text-green-500 flex items-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Contact Info
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-green-500" />
                <span>Bengla Road Suite Dhaka 1209</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-green-500" />
                <span>+44 45678908</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-green-500" />
                <span>example@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  )
}