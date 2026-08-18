'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Shield, Users, Briefcase, Globe, Award } from 'lucide-react'
import { useScrollAnimation } from './useScrollAnimation'

const services = [
  {
    icon: FileText,
    title: 'Land Agreement Drafting',
    description: 'Professional drafting of land sale agreements, lease agreements, and property transfer documents.',
    features: ['Sale deeds', 'Lease agreements', 'Gift and Settlement', 'partition deeds']
  },
  {
    icon: Shield,
    title: 'Wills & Trusts',
    description: 'Expert preparation of wills, trusts, and legal documents for smooth property succession.',
    features: ['Will preparation', 'Trust documents', 'Revocation or modification of wills', 'Succession planning']
  },
  {
    icon: Users,
    title: 'Power of Attorney',
    description: 'Comprehensive power of attorney services for property management and legal representation.',
    features: ['General Power Of Attorney', 'Special Power Of Attorney', 'Property management', 'Notarization support']
  },
  {
    icon: Briefcase,
    title: 'Rectification Deeds',
    description: 'Professional rectification and correction of property documents and legal instruments.',
    features: ['Document corrections', 'Error rectification', 'Legal validation', 'Re-registration support']
  },
  {
    icon: Globe,
    title: 'Property Documentation',
    description: 'Complete property documentation services including title verification and legal compliance.',
    features: ['Title verification', 'Document Drafting Support', 'Legal compliance guidance', 'Registration support']
  },
  {
    icon: Award,
    title: 'Legal Consultation',
    description: 'Expert legal consultation for property matters with deep understanding of Kerala laws.',
    features: ['Legal advice', 'Document review', 'Compliance guidance', 'Registration procedures']
  }
]

function ServiceCard({ service }: { service: typeof services[number] }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-100 h-full">
      <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
        <service.icon className="w-8 h-8 text-gray-700" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
      <ul className="space-y-3">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center text-sm text-gray-600">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-3" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 })
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const previewIndex = activeIndex ?? 0

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 scroll-reveal ${headerVisible ? 'visible' : ''}`}
        >
          <div className="stamp-badge inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
            Our Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Property
            <span className="text-gray-600"> Document Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized property document services in Kerala, providing expert legal documentation for all your property needs.
          </p>
        </div>

        <div ref={gridRef} className={`scroll-reveal ${gridVisible ? 'visible' : ''}`}>
          {/* Mobile: tap accordion with preview card above the list */}
          <div className="lg:hidden">
            <div className="border-t border-gray-200">
              {services.map((service, index) => {
                const isActive = activeIndex === index
                const isDimmed = activeIndex !== null && !isActive
                return (
                  <div key={index} className="border-b border-gray-200">
                    <button
                      onClick={() => setActiveIndex(isActive ? null : index)}
                      className={`w-full flex items-center gap-4 py-5 text-left transition-opacity duration-300 ${isDimmed ? 'opacity-40' : 'opacity-100'
                        }`}
                    >
                      <span className={`text-lg font-bold tabular-nums ${isActive ? 'text-gray-900' : 'text-gray-300'}`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={`text-lg font-semibold ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                        {service.title}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6">
                            <ServiceCard service={service} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Desktop: hover index list + live preview card */}
          <div
            className="hidden lg:grid lg:grid-cols-2 gap-16 items-start"
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="border-t border-gray-200">
              {services.map((service, index) => {
                const isActive = previewIndex === index
                const isDimmed = activeIndex !== null && !isActive
                return (
                  <button
                    key={index}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`w-full flex items-center gap-6 py-6 border-b border-gray-200 text-left transition-opacity duration-300 ${isDimmed ? 'opacity-40' : 'opacity-100'
                      }`}
                  >
                    <span
                      className={`text-2xl font-bold tabular-nums transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-300'
                        }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-500'
                        }`}
                    >
                      {service.title}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="sticky top-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={previewIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <ServiceCard service={services[previewIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  )
}
