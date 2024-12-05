import React from 'react'
import { Navbar } from '@/components/Navbar'
import { MapPin, Phone, Mail, Clock, Globe, User, Building2 } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
}

export default function ContactUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F2F5]">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-[#0A2E5C]">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-[#0A2E5C] mb-6">
                IETE Hyderabad Centre
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-[#E3F2FD] p-2 rounded-lg mr-4">
                    <MapPin className="text-[#00B4D8]" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Adjacent: Directorate of PG Admissions, OU Campus,<br />
                      Hyderabad – 500 007, Telangana, India
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start">
                  <div className="bg-[#E3F2FD] p-2 rounded-lg mr-4">
                    <Phone className="text-[#00B4D8]" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-700">Ph: +91 40 2709 5128, 2709 8025</p>
                    <p className="text-gray-700">Mobile & WhatsApp: 9866692214</p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start">
                  <div className="bg-[#E3F2FD] p-2 rounded-lg mr-4">
                    <Clock className="text-[#00B4D8]" size={20} />
                  </div>
                  <p className="text-gray-700">9:00 AM - 9:00 PM</p>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-[#E3F2FD] p-2 rounded-lg mr-4">
                    <Mail className="text-[#00B4D8]" size={20} />
                  </div>
                  <div>
                    <a href="mailto:hyderabad.iete@gmail.com" className="text-[#00B4D8] hover:underline block">
                      hyderabad.iete@gmail.com
                    </a>
                    <a href="mailto:info@ietehyd.org" className="text-[#00B4D8] hover:underline block">
                      info@ietehyd.org
                    </a>
                  </div>
                </div>

                {/* Websites */}
                <div className="flex items-start">
                  <div className="bg-[#E3F2FD] p-2 rounded-lg mr-4">
                    <Globe className="text-[#00B4D8]" size={20} />
                  </div>
                  <div>
                    <a href="http://www.ietehyd.org" target="_blank" rel="noopener noreferrer" className="text-[#00B4D8] hover:underline block">
                      www.ietehyd.org
                    </a>
                    <a href="http://www.iete.org" target="_blank" rel="noopener noreferrer" className="text-[#00B4D8] hover:underline block">
                      www.iete.org
                    </a>
                  </div>
                </div>

                {/* Key Contacts */}
                <div className="border-t pt-6 mt-6">
                  <h3 className="text-lg font-semibold text-[#0A2E5C] mb-4">Key Contacts</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#E3F2FD] p-2 rounded-lg mr-4">
                        <User className="text-[#00B4D8]" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Chairman</p>
                        <p className="text-gray-600">Shri. Ashwani Kumar Sangamker</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-[#E3F2FD] p-2 rounded-lg mr-4">
                        <Building2 className="text-[#00B4D8]" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Honorary Secretary</p>
                        <p className="text-gray-600">Sri P. Padmanabha Rao</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-[#0A2E5C] mb-6">Location</h2>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.848792565785!2d78.52079487516569!3d17.419042683473553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99782d3e25b1%3A0x46025d2235079c3e!2sThe%20Institution%20of%20Electronics%20and%20Telecommunication%20Engineers(IETE)!5e0!3m2!1sen!2sin!4v1730370252357!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 