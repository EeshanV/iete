'use client'

import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Users, BookOpen, Briefcase, GraduationCap, Wrench, Award, Calculator, Building, BookOpenCheck, Users2, Library } from 'lucide-react'

const subCommittees = [
  {
    name: "Finance & Policy Planning",
    icon: Calculator,
    color: "bg-blue-100 text-blue-600",
    chairman: "Prof. Nuli Namassivaya",
    members: [
      "Sri Ashwani Kumar Sangamker ",
      "Dr. Nukala Srinivasa Rao ",
      "Er. Nuli Namassivaya "
    ],
  },
  {
    name: "Continuing Education Program",
    icon: BookOpenCheck,
    color: "bg-green-100 text-green-600",
    chairman: " Ms.Tuti Sandhya",
    members: [
      "Dr.PA Harsha Vardhini",
      "B.Vidya Bhargavi",
      "K.Santosh Kumar",
      "Dr.N.Suresh"
    ],
  },
  {
    name: "Technical Programmes & Publications Sub-Committee",
    icon: BookOpen,
    color: "bg-purple-100 text-purple-600",
    chairman: "Dr.A.V.Krishna Prasad",
    members: [
      "Abhishek Singh Shakya",
      "Dr.V.Rama Rao",
      "Dr.G.Prasad",     
      "Dr.P.Raj Reddy"
    ],
  },
  {
    name: "R & D and Industrial Coordination ",
    icon: Briefcase,
    color: "bg-amber-100 text-amber-600",
    chairman: "Dr.D.Rangarathan",
    members: [
      "Dr.I.Sharath Chandra",
      "Mr. P.Venkatesham Gupta",     
      "Dhiraj Kumar K. Deshpande"
    ],
  },
  {
    name: "Membership Drive, ISF & Sub-Centers ",
    icon: Users2,
    color: "bg-red-100 text-red-600",
    chairman: "Dr. I.Sharath Chandra",
    members: [
      "Dr.G.Srinivasa Reddy",
      "T.Sridhar",
      "Prof.A.Sarveshwar Rao",
      "Dr. A.V.Krishna Prasad"
    ],
  },
  {
    name: "Short Term Courses and Seminars",
    icon: GraduationCap,
    color: "bg-indigo-100 text-indigo-600",
    chairman: "Dr.V.Rama Rao",
    members: [
      "M.Srilakshmi Ravali",
      "Prof.A.Gopala Sharma",
      "Dr.M.Parvathi",
      "C.V.Keerthi Latha"
    ],
  },
  {
    name: "Purchase, Works and Building Maintenance ",
    icon: Building,
    color: "bg-indigo-100 text-indigo-600",
    chairman: "Dr. P.Raj Reddy",
    members: [
      "Er. K.Gnaneswar Rao"
    ],
  },
  {
    name: "Women Empowerment & Library, student affairs",
    icon: Library,
    color: "bg-indigo-100 text-indigo-600",
    chairman: "Ms.C.V.Keerthi Latha",
    members: [
      "Ms. J Shailaja",
      "Mrs.Y.Latha",
      "Mr.Koteshwar Rao",
      "Tuti Sandhya"
    ],
  }
]

export default function SubCommitteesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F2F5]">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-24">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-[#0A2E5C] mb-4">Sub-Committees</h1>
          </div>

          {/* Committees Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subCommittees.map((committee, index) => {
              const IconComponent = committee.icon
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg ${committee.color}`}>
                        <IconComponent size={24} />
                      </div>
                      <h2 className="text-xl font-semibold ml-4 text-[#0A2E5C]">
                        {committee.name}
                      </h2>
                    </div>

                    <p className="text-gray-600 mb-4">
                      {committee.description}
                    </p>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="mb-4">
                        <h3 className="font-semibold text-[#00B4D8]">Chairman</h3>
                        <p className="text-gray-700">{committee.chairman}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#00B4D8] mb-2">Members</h3>
                        <ul className="space-y-2">
                          {committee.members.map((member, memberIndex) => (
                            <li 
                              key={memberIndex}
                              className="flex items-center text-gray-700"
                            >
                              <div className="w-2 h-2 bg-[#00B4D8] rounded-full mr-2"></div>
                              {member}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
