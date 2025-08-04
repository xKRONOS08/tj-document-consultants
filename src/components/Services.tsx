'use client'

import { FileText, Shield, Users, Briefcase, Globe, Award } from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: 'Land Agreement Drafting',
    description: 'Professional drafting of land sale agreements, lease agreements, and property transfer documents.',
    features: ['Sale deeds', 'Lease agreements','Gift and Settlement', 'partition deeds']
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

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-200"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  )
} 