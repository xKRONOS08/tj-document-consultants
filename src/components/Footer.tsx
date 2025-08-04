'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }



  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4">
                <img 
                  src="/logo.png" 
                  alt="T&J Document Consultants Logo" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">T&J Document</h3>
                <p className="text-gray-400">Consultants</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Kerala's trusted property document consultants helping individuals and families 
              navigate property documentation with expertise and legal compliance.
            </p>
            <div className="flex space-x-4 items-center">
              <a 
                href="https://maps.app.goo.gl/UBvgArcyowDNYFH48"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <MapPin size={18} />
              </a>
              <span className="text-gray-300 text-sm ml-2">Already used our service? <br></br><span className="font-semibold">← Leave us a review</span></span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Land Agreement Drafting
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Wills & Trusts
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Power of Attorney
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Rectification Deeds
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Property Documentation
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
                             <div className="flex items-center">
                 <Mail size={16} className="text-gray-400 mr-2" />
                 <span className="text-gray-300 text-sm">tjconsultantsmtdy@gmail.com</span>
               </div>
              <div className="flex items-center">
                <Phone size={16} className="text-gray-400 mr-2" />
                <span className="text-gray-300 text-sm">+91 9446891522 | +91 9400515292
                </span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="text-gray-400 mr-2 mt-1" />
                <span className="text-gray-300 text-sm">
                Near Mananthavady Municipal Bus Stand,
                Mananthavady, Kerala 670645
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 T&J Document Consultants. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => console.log('Privacy Policy clicked')}
                className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => console.log('Terms of Service clicked')}
                className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => console.log('Cookie Policy clicked')}
                className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 