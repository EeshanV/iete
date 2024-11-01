'use client'

import React, { useState, useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'

interface RDActivities {
  infrastructure: {
    title: string;
    items: Array<{
      name: string;
      description?: string;
      specs?: string;
    }>;
  }[];
  projects: {
    category: string;
    items: string[];
  }[];
}

export default function RDActivitiesPage() {
  const [rdActivities, setRDActivities] = useState<RDActivities | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    fetchRDActivities()
  }, [])

  const fetchRDActivities = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/rd-activities')
      if (!response.ok) {
        throw new Error('Failed to fetch R&D activities')
      }
      const data = await response.json()
      setRDActivities(data)
    } catch (error) {
      console.error('Error fetching R&D activities:', error)
      setError('Failed to load R&D activities')
    } finally {
      setIsLoading(false)
    }
  }

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const filterActivities = (activities: RDActivities) => {
    const lowercasedSearchTerm = searchTerm.toLowerCase()
    return {
      infrastructure: activities.infrastructure.filter(section =>
        section.title.toLowerCase().includes(lowercasedSearchTerm) ||
        section.items.some(item => 
          item.name.toLowerCase().includes(lowercasedSearchTerm) ||
          (item.description && item.description.toLowerCase().includes(lowercasedSearchTerm)) ||
          (item.specs && item.specs.toLowerCase().includes(lowercasedSearchTerm))
        )
      ),
      projects: activities.projects.filter(project =>
        project.category.toLowerCase().includes(lowercasedSearchTerm) ||
        project.items.some(item => item.toLowerCase().includes(lowercasedSearchTerm))
      )
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F2F5]">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold mb-6 text-[#0A2E5C]">R&D Activities</h1>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search R&D activities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2E5C]"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        
        {isLoading ? (
          <p className="text-center text-gray-600">Loading R&D activities...</p>
        ) : rdActivities ? (
          <div className="space-y-8">
            {filterActivities(rdActivities).infrastructure.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#0A2E5C]">Infrastructure</h2>
                {filterActivities(rdActivities).infrastructure.map((section, index) => (
                  <div key={index} className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                      onClick={() => toggleSection(`infrastructure-${index}`)}
                      className="w-full p-4 text-left font-semibold flex justify-between items-center bg-[#0A2E5C] text-white hover:bg-[#00B4D8] transition-colors duration-200"
                    >
                      <span>{section.title}</span>
                      {expandedSections[`infrastructure-${index}`] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {expandedSections[`infrastructure-${index}`] && (
                      <ul className="list-disc pl-8 p-4 space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="mb-2 text-gray-700">
                            <div>
                              <strong className="text-[#00B4D8]">{item.name}</strong>
                              {item.description && <p className="text-gray-600 mt-1">{item.description}</p>}
                              {item.specs && (
                                <pre className="mt-2 p-2 bg-gray-50 rounded text-sm whitespace-pre-wrap">
                                  {item.specs}
                                </pre>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </section>
            )}

            {filterActivities(rdActivities).projects.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#0A2E5C]">Projects</h2>
                {filterActivities(rdActivities).projects.map((project, index) => (
                  <div key={index} className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                      onClick={() => toggleSection(`project-${index}`)}
                      className="w-full p-4 text-left font-semibold flex justify-between items-center bg-[#0A2E5C] text-white hover:bg-[#00B4D8] transition-colors duration-200"
                    >
                      <span>{project.category}</span>
                      {expandedSections[`project-${index}`] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {expandedSections[`project-${index}`] && (
                      <ul className="list-disc pl-8 p-4 space-y-2">
                        {project.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="mb-2 text-gray-700">{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </section>
            )}
          </div>
        ) : (
          <p className="text-center text-gray-600">No R&D activities data available.</p>
        )}
      </main>
    </div>
  )
} 