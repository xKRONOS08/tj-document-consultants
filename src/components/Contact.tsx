'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useScrollAnimation } from './useScrollAnimation'

export default function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('https://formspree.io/f/xrblawlz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          service: formData.get('service'),
          message: formData.get('message'),
          _subject: `New Contact Form Submission from ${formData.get('name')}`,
        }),
      })



      // Formspree returns 200 for successful submissions
      if (response.status === 200 || response.status === 201) {
        setSubmitStatus('success')
        // Use a more reliable way to reset the form
        const form = e.currentTarget
        if (form) {
          form.reset()
        }
      } else {
        console.error('Form submission failed:', response.status, response.statusText)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }



  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 scroll-reveal ${headerVisible ? 'visible' : ''}`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
            Contact Us
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
            <span className="text-gray-600"> Today</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get started? Contact us to schedule a consultation and receive a quote for your property document needs.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 scroll-reveal ${contentVisible ? 'visible' : ''}`}
        >
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <a
                href="mailto:tjconsultantsmtdy@gmail.com"
                className="flex items-start hover:translate-x-2 transition-transform duration-300 cursor-pointer"
              >
                <div className="bg-primary-100 w-10 h-10 rounded-lg flex items-center justify-center mr-4 hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600 hover:text-gray-900 transition-colors">tjconsultantsmtdy@gmail.com</p>
                </div>
              </a>
              <a
                href="https://wa.me/918075478736?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20document%20consultancy%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:translate-x-2 transition-transform duration-300 cursor-pointer"
              >
                <div className="bg-primary-100 w-10 h-10 rounded-lg flex items-center justify-center mr-4 hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600 hover:text-gray-900 transition-colors">Chat with us on WhatsApp</p>
                </div>
              </a>
              <div className="flex items-start hover:translate-x-2 transition-transform duration-300">
                <a
                  href="tel:+918075478736"
                  className="bg-primary-100 w-10 h-10 rounded-lg flex items-center justify-center mr-4 hover:scale-110 transition-transform duration-300 cursor-pointer"
                  title="Call Primary Number"
                >
                  <Phone className="w-5 h-5 text-primary-600" />
                </a>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600 hover:text-primary-600 transition-colors">
                    <a href="tel:+918075478736">+91 8075478736</a>
                  </p>
                  <p className="text-gray-600 hover:text-primary-600 transition-colors">
                    <a href="tel:+919400515292">+91 9400515292</a>
                  </p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/UBvgArcyowDNYFH48"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:translate-x-2 transition-transform duration-300 cursor-pointer"
              >
                <div className="bg-primary-100 w-10 h-10 rounded-lg flex items-center justify-center mr-4 hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Office</h4>
                  <p className="text-gray-600 hover:text-gray-900 transition-colors">Near Mananthavady Municipal Bus Stand</p>
                  <p className="text-gray-600 hover:text-gray-900 transition-colors">Mananthavady, Kerala 670645</p>
                </div>
              </a>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:30 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 hover:border-gray-400 transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                  >
                    <option value="">Select a service</option>
                    <option value="land-agreement">Land Agreement Drafting</option>
                    <option value="wills-trusts">Wills & Trusts</option>
                    <option value="power-of-attorney">Power of Attorney</option>
                    <option value="rectification-deeds">Rectification Deeds</option>
                    <option value="property-documentation">Property Documentation</option>
                    <option value="legal-consultation">Legal Consultation</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                  placeholder="Tell us about your property document needs..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-primary-600 hover:bg-primary-700 hover:shadow-lg hover:scale-105 text-white'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-green-800">Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-red-800">Failed to send message. Please try again or contact us directly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 