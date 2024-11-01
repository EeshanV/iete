'use client'

import React, { useState, useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { Search } from 'lucide-react'
import type { StudentForum, Coordinator } from '@prisma/client'

interface StudentForumWithCoordinator extends StudentForum {
  coordinator: Coordinator | null
}

export default function StudentForumsPage() {
  const [studentForums, setStudentForums] = useState<StudentForumWithCoordinator[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchStudentForums()
  }, [])

  const fetchStudentForums = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/student-forums')
      if (!response.ok) {
        throw new Error('Failed to fetch student forums')
      }
      const data = await response.json()
      setStudentForums(data)
    } catch (error) {
      console.error('Error fetching student forums:', error)
      setError('Failed to load student forums')
    } finally {
      setIsLoading(false)
    }
  }

  const filteredForums = studentForums.filter(forum => {
    const searchTermLower = searchTerm.toLowerCase()
    return (
      forum.name.toLowerCase().includes(searchTermLower) ||
      (forum.address && forum.address.toLowerCase().includes(searchTermLower)) ||
      (forum.coordinator?.name && forum.coordinator.name.toLowerCase().includes(searchTermLower)) ||
      (forum.website && forum.website.toLowerCase().includes(searchTermLower))
    )
  })

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F2F5]">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold mb-6 text-[#0A2E5C]">IETE Student Forums</h1>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search student forums..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2E5C]"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        
        {isLoading ? (
          <p className="text-center text-gray-600">Loading student forums...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredForums.map((forum) => (
              <div key={forum.id} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2 text-[#0A2E5C]">{forum.name}</h2>
                {forum.address && <p className="text-gray-600 mb-2">{forum.address}</p>}
                {forum.website && (
                  <p className="text-gray-600 mb-2">
                    Website: <a href={`https://${forum.website.replace(/^https?:\/\//, '')}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{forum.website}</a>
                  </p>
                )}
                {forum.dateOfInauguration && (
                  <p className="text-gray-600 mb-4">Date of Inauguration: {forum.dateOfInauguration}</p>
                )}
                {forum.coordinator && (
                  <div className="border-t pt-4">
                    <h3 className="text-lg font-semibold mb-2 text-[#0A2E5C]">Coordinator</h3>
                    <p className="text-gray-600">{forum.coordinator.name}</p>
                    <p className="text-gray-600">{forum.coordinator.designation}</p>
                    {forum.coordinator.contact && <p className="text-gray-600">Contact: {forum.coordinator.contact}</p>}
                    {forum.coordinator.email && <p className="text-gray-600">Email: {forum.coordinator.email}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {filteredForums.length === 0 && !isLoading && (
          <p className="text-center text-gray-500 mt-8">No student forums found.</p>
        )}
      </main>
    </div>
  )
} 