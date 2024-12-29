'use client'

import Link from 'next/link'
import { CircuitBoard, Mail, Github, Linkedin, Twitter, LucideIcon } from 'lucide-react'

type SocialLink = {
  icon: LucideIcon
  href: string
  label: string
}

const Footer = () => {
  const socialLinks: SocialLink[] = [
    { icon: Mail, href: "#", label: "Email" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  return (
    <footer className="bg-gray-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-2 sm:col-span-1 space-y-4">
            <div className="flex items-center">
              <CircuitBoard className="w-6 h-6 text-blue-500" />
              <span className="ml-2 text-lg font-bold">Adeptek</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering businesses through innovative technology solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#services" className="hover:text-blue-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-blue-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm sm:text-base">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Cloud Solutions</li>
              <li>Custom Development</li>
              <li>Data Analytics</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
          
          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm sm:text-base">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Adeptek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer