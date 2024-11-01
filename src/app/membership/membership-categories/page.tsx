'use client'

import React from 'react'
import { Navbar } from '@/components/Navbar'
import Link from 'next/link'
import { Shield, Users, Building } from 'lucide-react'

const membershipCategories = [
  {
    title: "Students",
    icon: Users,
    categories: [
      { name: "Student (D)", description: "Preparing for DIP IETE" },
      { name: "Student (G)", description: "Preparing for GRADE IETE" },
      { name: "Student (FG)", description: "Belonging to IETE Students' Forum at Engineering College." }
    ]
  },
  {
    title: "Higher Levels",
    icon: Shield,
    categories: [
      { name: "Associate Member (AM)", description: "Based on pass in GRADE IETE or Equivalent Engineering Degree." },
      { name: "Member (M)", description: "Based on professional competence and recognition demonstrated by Academic qualifications and work Experience." },
      { name: "Fellow (F)", description: "Based on professional competence and recognition demonstrated by Academic qualifications and work Experience." },
      { name: "Distinguished Fellow (FD)", description: "Highest and most respected only. IETE Fellows eligible for nomination/election; Limited to two / year." },
      { name: "Honorary Fellow (HF)", description: "Conferred on eminent persons whose association can advance progress and prestige of IETE; generally limited to one / year." }
    ]
  },
  {
    title: "Others",
    icon: Building,
    categories: [
      { name: "Diploma Members (DM)", description: "Based on pass in DIP IETE or Equivalent Engineering Diploma." },
      { name: "Associate (A)", description: "Based on competence in technical/Non-technical areas of interest to IETE." },
      { name: "Sustaining Donar (SDM)", description: "Open to Institutions/Organizations Companies engaged Members in the broad Areas of interest to IETE." }
    ]
  }
]

export default function MembershipCategoriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F2F5]">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-[#0A2E5C]">Membership Categories</h1>
          <div className="bg-white shadow-md rounded-lg p-8 mb-8">
            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed text-lg">
                The IETE membership is available at different levels based on the applicants academic achievements and practical experience in Electronics Telecommunications, Computers, and related areas. Applicants are invited to seek the highest membership grade they are qualified for.
              </p>
            </div>
            
            <div className="space-y-12">
              {membershipCategories.map((section, index) => {
                const Icon = section.icon
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                    <div className="flex items-center mb-6">
                      <div className="bg-[#0A2E5C] p-3 rounded-lg">
                        <Icon className="text-white" size={24} />
                      </div>
                      <h2 className="text-2xl font-semibold ml-4 text-[#0A2E5C]">{section.title}</h2>
                    </div>
                    <div className="grid gap-4">
                      {section.categories.map((category, catIndex) => (
                        <div 
                          key={catIndex} 
                          className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start">
                            <h3 className="font-semibold text-[#00B4D8] sm:w-48 mb-2 sm:mb-0 flex-shrink-0">
                              {category.name}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="mt-12 bg-[#E3F2FD] rounded-lg p-8">
              <p className="text-[#0A2E5C] font-medium text-lg mb-6">
                Members of different categories pay varying levels of annual fees; but they receive the same membership services and benefits.
              </p>

              <Link 
                href="/membership/join-iete" 
                className="inline-flex items-center bg-[#0A2E5C] text-white px-8 py-4 rounded-lg hover:bg-[#00B4D8] transition-colors group"
              >
                <span className="text-lg">Join / Renew IETE Membership</span>
                <svg 
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 