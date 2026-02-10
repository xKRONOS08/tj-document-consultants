'use client'

import { CheckCircle, Users, Award, Clock } from 'lucide-react'
import { useScrollAnimation } from './useScrollAnimation'

export default function About() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            ref={leftRef}
            className={`space-y-8 scroll-reveal ${leftVisible ? 'visible' : ''}`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                About Us
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Trusted Property
                <span className="text-gray-600"> Document Experts</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                With decades of combined experience in Kerala's property documentation landscape, T&J Document Consultants is led by seasoned professionals-<br></br> <span className="font-semibold text-gray-900">Thomas John (Retd. District Registrar)</span> and <span className="font-semibold text-gray-900">Johnson V J (Retd. Sub Registrar)</span>. We specialize in guiding individuals and families through the legal intricacies of property documentation, ensuring compliance with registration laws and offering peace of mind.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team combines deep knowledge of Kerala's property laws with
                practical experience to deliver accurate, legally sound documents
                that protect your interests and meet all regulatory requirements.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-4 hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 text-lg">Deep knowledge of Kerala's property laws and regulations</span>
              </div>
              <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-4 hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 text-lg">Experience with all types of property documentation</span>
              </div>
              <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-4 hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 text-lg">Confidential and secure document handling</span>
              </div>
              <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-4 hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 text-lg">Personal consultation and guidance throughout the process</span>
              </div>
            </div>
          </div>

          <div
            ref={rightRef}
            className={`grid grid-cols-2 gap-6 scroll-reveal ${rightVisible ? 'visible' : ''}`}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 hover:bg-gray-200 transition-colors duration-300">
                <Users className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 hover:bg-gray-200 transition-colors duration-300">
                <Award className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600 font-medium">Documents Delivered</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 hover:bg-gray-200 transition-colors duration-300">
                <Clock className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">24h</h3>
              <p className="text-gray-600 font-medium">Average Turnaround</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 hover:bg-gray-200 transition-colors duration-300">
                <CheckCircle className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">99%</h3>
              <p className="text-gray-600 font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
