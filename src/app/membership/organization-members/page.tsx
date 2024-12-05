'use client'

import React, { useState, useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { Search, Building2, Phone, Mail, User } from 'lucide-react'
import type { OrganizationMemberInstitute } from '@prisma/client'

export default function OrganizationMembersPage() {
  const [members, setMembers] = useState<OrganizationMemberInstitute[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchMembers()
  }, [])

  const fetchMembers = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/organization-member-institutes')
      if (!response.ok) {
        throw new Error('Failed to fetch organization members')
      }
      const data = await response.json()
      
      const formattedData: OrganizationMemberInstitute[] = data.map((item: any) => ({
        id: item.id,
        name: item.name,
        orgId: item.orgId,
        address: item.address,
        contactPerson: item.contactPerson,
        contact: item.contact,
        email: item.email,
      }));

      setMembers(formattedData)
    } catch (error) {
      console.error('Error fetching organization members:', error)
      setError('Failed to load organization members')
    } finally {
      setIsLoading(false)
    }
  }

  const filteredMembers = members.filter(member => {
    const searchTermLower = searchTerm.toLowerCase()
    return (
      member.name.toLowerCase().includes(searchTermLower) ||
      member.orgId.toLowerCase().includes(searchTermLower) ||
      (member.address && member.address.toLowerCase().includes(searchTermLower)) ||
      (member.contactPerson && member.contactPerson.toLowerCase().includes(searchTermLower)) ||
      (member.email && member.email.toLowerCase().includes(searchTermLower))
    )
  })

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F2F5]">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold mb-6 text-[#0A2E5C]">Organization Members</h1>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search organization members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A2E5C]"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        
        {isLoading ? (
          <p className="text-center text-gray-600">Loading organization members...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-[#E3F2FD] p-3 rounded-lg">
                    <Building2 className="text-[#00B4D8]" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h2 className="text-xl font-semibold text-[#0A2E5C] mb-2">{member.name}</h2>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {member.orgId}
                      </span>
                    </div>
                    
                    <div className="space-y-3 text-gray-600">
                      <p className="flex items-start">
                        <Building2 size={18} className="mr-2 mt-1 flex-shrink-0 text-gray-400" />
                        {member.address}
                      </p>
                      
                      {member.contactPerson && (
                        <p className="flex items-center">
                          <User size={18} className="mr-2 text-gray-400" />
                          {member.contactPerson}
                        </p>
                      )}
                      
                      {member.contact && (
                        <p className="flex items-center">
                          <Phone size={18} className="mr-2 text-gray-400" />
                          {member.contact}
                        </p>
                      )}
                      
                      {member.email && (
                        <p className="flex items-center">
                          <Mail size={18} className="mr-2 text-gray-400" />
                          <a 
                            href={`mailto:${member.email}`} 
                            className="text-[#00B4D8] hover:underline"
                          >
                            {member.email}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredMembers.length === 0 && !isLoading && (
          <p className="text-center text-gray-500 mt-8">No organization members found.</p>
        )}
      </main>
    </div>
  )
} 