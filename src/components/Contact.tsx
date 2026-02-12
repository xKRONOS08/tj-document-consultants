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
              <div className="flex items-start">
                <div className="bg-primary-100 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 8075478736</p>
                  <p className="text-gray-600">+91 9400515292</p>
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