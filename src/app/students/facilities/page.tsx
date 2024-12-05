
import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Users, Monitor, BookOpen, Wifi, Video, Building2 } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Facilities',
}

const facilities = [
  {
    name: "Mekaster Auditorium",
    description: "A state-of-the-art auditorium for hosting conferences, seminars, and major events.",
    icon: Video,
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Conference Hall",
    description: "Modern conference facilities equipped with presentation tools and comfortable seating.",
    icon: Users,
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Class Rooms",
    description: "Well-ventilated and spacious classrooms with modern teaching aids.",
    icon: Building2,
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Computer Lab",
    description: "Fully equipped computer laboratory with latest hardware and software resources.",
    icon: Monitor,
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Library",
    description: "Extensive collection of books, journals, and digital resources.",
    icon: BookOpen,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    name: "Internet",
    description: "High-speed internet connectivity throughout the campus.",
    icon: Wifi,
    color: "bg-indigo-100 text-indigo-600",
  },
]

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F2F5]">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-[#0A2E5C]">Our Facilities</h1>
            <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon
              return (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg ${facility.color}`}>
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-xl font-semibold ml-4 text-[#0A2E5C]">
                        {facility.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
} 