'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import SwipeText from './SwipeText'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center text-sm">
            <div className="text-center">
              <span className="text-white font-medium">Thomas & Johnson Document Consultants</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Floating Header — sized/laid out identically in both states;
          only a GPU-composited transform + cheap paint properties (color, background,
          box-shadow, border-radius) change, so it stays smooth at 60fps. */}
      <div
        className={`sticky top-0 z-50 transition-[padding] duration-500 ease-in-out ${isScrolled ? 'px-4 pt-3' : 'px-0 pt-0'
          }`}
      >
        {/* Scoped to the header's own height only — keeps the full-bleed backdrop below
            from stretching over the mobile nav dropdown when it's open. */}
        <div className="relative">
          {/* Full-bleed backdrop — only visible pre-scroll, independent of the header's
              own (deliberately max-w-7xl-constrained) box so the white bar always spans
              the full viewport instead of just the centered content width. */}
          <div
            className={`absolute inset-0 bg-white shadow-sm transition-opacity duration-500 ease-in-out ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
          />

        <header
          className={`relative mx-auto max-w-7xl w-full origin-top transform-gpu transition-[transform,background-color,box-shadow,border-radius] duration-500 ease-in-out ${isScrolled
              ? 'scale-[0.85] rounded-[28px] bg-gray-900 shadow-2xl'
              : 'scale-100 rounded-none bg-transparent shadow-none'
            }`}
        >
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <div className="w-12 h-12 mr-3">
                  <img
                    src="/logo.png"
                    alt="T&J Document Consultants Logo"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h1
                    className={`text-xl font-bold transition-colors duration-500 ${isScrolled ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    T&J Document
                  </h1>
                  <p className={`text-sm transition-colors duration-500 ${isScrolled ? 'text-gray-300' : 'text-gray-600'}`}>
                    Consultants
                  </p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-6">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-base font-medium transition-colors duration-500 hover:scale-105 ${isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center space-x-3">
                <a
                  href="https://wa.me/918075478736?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20document%20consultancy%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden bg-transparent px-6 py-3 rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300 inline-flex items-center whitespace-nowrap ${isScrolled
                      ? 'text-white border border-white hover:bg-white/10'
                      : 'text-gray-900 border border-gray-900 hover:bg-gray-900/5'
                    }`}
                >
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <SwipeText text="WhatsApp" />
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={toggleMenu}
                  className={`p-2 hover:scale-110 transition-colors duration-500 ${isScrolled ? 'text-white' : 'text-gray-700 hover:text-gray-900'
                    }`}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </header>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`lg:hidden bg-white border border-gray-200 shadow-xl mx-auto mt-2 ${isScrolled ? 'max-w-4xl rounded-2xl' : 'max-w-7xl rounded-none border-x-0'
              }`}
          >
            <div className="px-4 py-4 space-y-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-gray-900 block w-full text-left py-2 font-medium hover:pl-2 transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://wa.me/918075478736?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20document%20consultancy%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden w-full bg-transparent text-gray-900 border border-gray-900 hover:bg-gray-900/5 px-4 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center text-center mb-3"
              >
                <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <SwipeText text="WhatsApp" />
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
