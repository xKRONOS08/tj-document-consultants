import { FileText, Shield, Users, Briefcase, Globe, Award } from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: 'Land Agreement Drafting',
    description: 'Professional drafting of land sale agreements, lease agreements, and property transfer documents.',
    features: ['Sale agreements', 'Lease agreements', 'Property transfers', 'Land partition deeds']
  },
  {
    icon: Shield,
    title: 'Wills & Trusts',
    description: 'Expert preparation of wills, trusts, and estate planning documents for property succession.',
    features: ['Will preparation', 'Trust documents', 'Estate planning', 'Succession planning']
  },
  {
    icon: Users,
    title: 'Power of Attorney',
    description: 'Comprehensive power of attorney services for property management and legal representation.',
    features: ['General POA', 'Special POA', 'Property management', 'Legal representation']
  },
  {
    icon: Briefcase,
    title: 'Rectification Deeds',
    description: 'Professional rectification and correction of property documents and legal instruments.',
    features: ['Document corrections', 'Error rectification', 'Legal validation', 'Court compliance']
  },
  {
    icon: Globe,
    title: 'Property Documentation',
    description: 'Complete property documentation services including title verification and legal compliance.',
    features: ['Title verification', 'Document preparation', 'Legal compliance', 'Registration support']
  },
  {
    icon: Award,
    title: 'Legal Consultation',
    description: 'Expert legal consultation for property matters with deep understanding of Kerala laws.',
    features: ['Legal advice', 'Document review', 'Compliance guidance', 'Court procedures']
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized property document services in Kerala, providing expert legal documentation for all your property needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors">
            View All Services
          </button>
        </div>
      </div>
    </section>
  )
} 