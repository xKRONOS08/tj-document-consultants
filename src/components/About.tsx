import { CheckCircle, Users, Award, Clock } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About T&J Document Consultants
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With years of experience in Kerala's property documentation, 
              we specialize in helping individuals and families navigate the complex 
              legal requirements for property documents, ensuring compliance and peace of mind.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team combines deep knowledge of Kerala's property laws with 
              practical experience to deliver accurate, legally sound documents 
              that protect your interests and meet all regulatory requirements.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                <span className="text-gray-700">Deep knowledge of Kerala's property laws and regulations</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                <span className="text-gray-700">Experience with all types of property documentation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                <span className="text-gray-700">Confidential and secure document handling</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                <span className="text-gray-700">Personal consultation and guidance throughout the process</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">Documents Delivered</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">24h</h3>
              <p className="text-gray-600">Average Turnaround</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">99%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 