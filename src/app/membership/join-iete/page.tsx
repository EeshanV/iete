'use client'

import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Download, FileText, CreditCard, MapPin, Building2, Phone, Mail, GraduationCap } from 'lucide-react'
import Link from 'next/link'

export default function JoinIETEPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F2F5]">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-24">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#0A2E5C] mb-4">Join IETE</h1>
          </div>
          
          {/* Membership Types */}
          <div className="space-y-6">
            {/* Corporate Membership */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#E3F2FD] p-3 rounded-lg">
                    <FileText className="text-[#00B4D8]" size={24} />
                  </div>
                  <h2 className="text-xl font-semibold text-[#0A2E5C] ml-4">Corporate Membership</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Fill up the membership form and send it to us with required enclosures and Fee (Cheque / DD) IETE, New Delhi.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/forms/corporate-membership-form.pdf"
                    className="inline-flex items-center px-4 py-2 bg-[#00B4D8] text-white rounded-lg hover:bg-[#0095b3] transition-colors"
                  >
                    <Download size={18} className="mr-2" />
                    Download Form
                  </Link>
                  <a 
                    href="http://iete-elan.ac.in/elan/membership/newcorpregn/mem.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-[#0A2E5C] text-white rounded-lg hover:bg-[#083047] transition-colors"
                  >
                    Join from HQ →
                  </a>
                </div>
              </div>
            </div>

            {/* Student Membership */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#E3F2FD] p-3 rounded-lg">
                    <GraduationCap className="text-[#00B4D8]" size={24} />
                  </div>
                  <h2 className="text-xl font-semibold text-[#0A2E5C] ml-4">Student Membership (AMIETE / DIPIETE)</h2>
                </div>
                <div className="bg-blue-50 border-l-4 border-[#00B4D8] p-4 mb-6">
                  <p className="text-gray-700">
                    Please send us a demand draft (in favour of Secretary, IETE, Hyderabad) for Rs.250/-, so that a detailed syllabi 
                    and membership form for the required category will be sent back to you.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-[#0A2E5C] font-medium mb-3">Available Categories:</h3>
                  <ul className="space-y-2">
                    {['Electronics & Telecommunication', 'Computer Science', 'Information Technology'].map((category) => (
                      <li key={category} className="flex items-center text-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#00B4D8] rounded-full mr-3"></div>
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-[#E3F2FD] p-3 rounded-lg">
                    <MapPin className="text-[#00B4D8]" size={24} />
                  </div>
                  <h2 className="text-xl font-semibold text-[#0A2E5C] ml-4">Submit Application To</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <Building2 className="text-[#00B4D8] mt-1 mr-3" size={20} />
                    <div>
                      <p className="font-medium text-[#0A2E5C]">The Secretary</p>
                      <div className="text-gray-600 mt-1">
                        <p>IETE Hyderabad Centre</p>
                        <p>11-4-254/A, First Floor</p>
                        <p>Hyderabad - 500 004</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="text-[#00B4D8] mr-3" size={20} />
                      <p className="text-gray-600">+91 40 2331 2349</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="text-[#00B4D8] mr-3" size={20} />
                      <a 
                        href="mailto:iete_hyd@yahoo.co.in" 
                        className="text-[#00B4D8] hover:underline"
                      >
                        iete_hyd@yahoo.co.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 