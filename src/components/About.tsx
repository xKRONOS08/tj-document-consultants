import { CheckCircle, Users, Award, Clock } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
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
              <p className="text-xl text-gray-600 leading-relaxed">
                With years of experience in Kerala's property documentation, 
                we specialize in helping individuals and families navigate the complex 
                legal requirements for property documents, ensuring compliance and peace of mind.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our team combines deep knowledge of Kerala's property laws with 
                practical experience to deliver accurate, legally sound documents 
                that protect your interests and meet all regulatory requirements.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 text-lg">Deep knowledge of Kerala's property laws and regulations</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 text-lg">Experience with all types of property documentation</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 text-lg">Confidential and secure document handling</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 text-lg">Personal consultation and guidance throughout the process</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600 font-medium">Documents Delivered</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">24h</h3>
              <p className="text-gray-600 font-medium">Average Turnaround</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
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