'use client'

import { useState, useEffect } from 'react'
import { X, ChevronUp } from 'lucide-react'
import { Navbar } from './Navbar'
import Link from 'next/link'
import { Achievement } from '@prisma/client'

interface HomePageProps {
  achievements: Achievement[]
}

export default function HomePage({ achievements = [] }: HomePageProps) {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">IETE Hyderabad Centre</h1>
          <p className="text-xl md:text-2xl mb-8">The Institution of Electronics and Telecommunication Engineers</p>
          <Link 
            href="/membership/join-iete"
            className="inline-block bg-[#0A2E5C] text-white px-6 py-3 rounded hover:bg-[#00B4D8] transition-colors"
          >
            Join IETE
          </Link>
        </div>
      </section>

      {/* Announcements Marquee */}
      <div className="bg-[#0A2E5C] text-white py-3 px-4">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-block">
            📢 <Link href="/events/conferences" className="hover:text-[#00B4D8] transition-colors">
              Organise conferences, symposia, Workshops and brain-storming sessions involving all concerned professionals, students and industry associations for the advancement of the discipline.
            </Link>
          </div>
          <div className="animate-marquee inline-block">
            📢 <Link href="/policy-forum" className="hover:text-[#00B4D8] transition-colors">
              Provide a forum for discussion on national policies and to provide suitable inputs to policy makers.
            </Link>
          </div>
        </div>
      </div>

      {/* Key Statistics Section */}
      <section className="py-16 px-4 md:px-8 bg-[#F0F2F5]">
        <h2 className="text-3xl font-bold text-center mb-12">Key Statistics</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: 2628, label: "Corporate Members" },
            { number: 3000, label: "Student Members" },
            { number: 93, label: "Student Forums" },
            { number: 43, label: "Industrial Members" },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-[#0A2E5C] mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-6 text-[#0A2E5C]">About IETE Hyderabad</h2>
            <div className="space-y-6 text-gray-700">
              <p className="leading-relaxed">
              Established in 1973, IETE Hyderabad Centre is the largest in the country, committed to advancing science and technology in Electronics, Telecommunications, Computers, and Information Technology.
              </p>
            </div>
            <button 
              onClick={() => setIsAboutModalOpen(true)}
              className="mt-8 inline-flex items-center bg-[#0A2E5C] text-white px-6 py-3 rounded hover:bg-[#00B4D8] transition-colors group"
            >
              <span>Learn More</span>
              <svg 
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="md:w-1/2">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.848792565785!2d78.52079487516569!3d17.419042683473553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99782d3e25b1%3A0x46025d2235079c3e!2sThe%20Institution%20of%20Electronics%20and%20Telecommunication%20Engineers(IETE)!5e0!3m2!1sen!2sin!4v1730370252357!5m2!1sen!2sin" 
              width="600" 
              height="450" 
              style={{border:0}} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </section>

      {/* About Modal */}
      {isAboutModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setIsAboutModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-[#0A2E5C]">About IETE Hyderabad</h2>
              <div className="prose max-w-none space-y-6">
                <p className="text-gray-700">
                Established in 1973, IETE Hyderabad Centre is the largest in the country, committed to advancing science and technology in Electronics, Telecommunications, Computers, and Information Technology.
                </p>
                <p className="text-gray-700">
                  IETE Hyderabad Centre Running Short-Term Courses, Workshops in Electronics and Computers Science, IT, Electrical & Electronics and latest trending topics(IoT, Machine Learning, Artificial Intelligence etc..). The Centre provides guidance to approximately 500 student projects annually for Diploma/B.Sc/BE/B.Tech./M.Tech/M.Sc with qualified and experienced guides.
                </p>
                <p className="text-gray-700">
                  IETE Hyderabad centre has been adjudged as the Best local Centre in India during the years 1992-93, 1994-95, 1995-96, 1996-97, 1999-2000 and Best Performance Centre Award for the year 2003-2004. IETE has conducted ATC during Sept.2007 Laboratory and Library facilities are improved from time to time.
                </p>
                <p className="text-gray-700">
                  Development of infrastructural facilities for the continuing Education Program of IETE has been a continuous activity at this Centre. This Centre has adequately furnished Class Rooms, Electronic and Computer Laboratories fully equipped and Computer Centre comprising adequate number of Computers. The Centre has established a Multimedia lab with high speed Internet facility at a cost of Rs.30 lakhs, which is being used by Members and Students. The Auditorium with a seating capacity of 300 is being renovated with no-break supply(Generator equipped), latest audio/visual systems and full air conditioning at a cost of Rs.50.0 lacks.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Achievements Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Achievements</h2>
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex space-x-6 py-4 px-20">
              {Array.isArray(achievements) && achievements.map((item, index) => (
                <a 
                  key={index}
                  href={item.url || '#'}
                  target={item.url ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="p-6">
                    <div className="text-lg font-semibold text-gray-900 mb-2">
                      {item.year}
                    </div>
                    <p className="text-gray-600">{item.title}</p>
                    {item.description && (
                      <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A2E5C] text-white py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About IETE Hyderabad</h3>
            <p className="mb-4">Advancing science and technology in Electronics, Telecommunications, Computers, and Information Technology since 1973.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#00B4D8] transition-colors">Facebook</a>
              <a href="#" className="hover:text-[#00B4D8] transition-colors">Twitter</a>
              <a href="#" className="hover:text-[#00B4D8] transition-colors">LinkedIn</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#00B4D8] transition-colors">Home</Link></li>
              <li><Link href="/about/organization" className="hover:text-[#00B4D8] transition-colors">About</Link></li>
              <li><Link href="/academics/r-and-d-activities" className="hover:text-[#00B4D8] transition-colors">Academics</Link></li>
              <li><Link href="/membership/join-iete" className="hover:text-[#00B4D8] transition-colors">Membership</Link></li>
              <li><Link href="/contact/contact-us" className="hover:text-[#00B4D8] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p>Adjacent: Directorate of PG Admissions, OU Campus</p>
            <p>Hyderabad – 500 007, Telangana, India</p>
            <p>Phone: +91 40 2709 5128</p>
            <p>Email: hyderabad.iete@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter Signup</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 rounded text-gray-800"
              />
              <button type="submit" className="bg-[#00B4D8] text-white px-4 py-2 rounded hover:bg-[#0090a8] transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-700 text-center">
          <p>&copy; 2024 IETE Hyderabad. All rights reserved.</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 bg-[#00B4D8] text-white p-2 rounded-full shadow-md hover:bg-[#0090a8] transition-colors"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  )
}