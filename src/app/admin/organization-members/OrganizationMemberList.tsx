'use client'

import React, { useState, useEffect } from 'react'
import { OrganizationMember } from '@prisma/client'
import OrganizationMemberForm from './OrganizationMemberForm'
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi'

export default function OrganizationMemberList() {
  const [members, setMembers] = useState<OrganizationMember[]>([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingMember, setEditingMember] = useState<OrganizationMember | null>(null)

  useEffect(() => {
    fetchMembers()
  }, [])

  const fetchMembers = async () => {
    try {
      const response = await fetch('/api/organization-members')
      if (response.ok) {
        const data = await response.json()
        setMembers(data)
      }
    } catch (error) {
      console.error('Error fetching members:', error)
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this member?')) {
      try {
        const response = await fetch(`/api/organization-members/${id}`, {
          method: 'DELETE',
        })
        if (response.ok) {
          setMembers(members.filter((member) => member.id !== id))
        }
      } catch (error) {
        console.error('Error deleting member:', error)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <button
          onClick={() => {
            setEditingMember(null)
            setIsFormOpen(true)
          }}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <FiPlus className="w-5 h-5" />
          Add New Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <div className="relative h-48">
              {member.imageUrl ? (
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">No image</span>
                </div>
              )}
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => {
                    setEditingMember(member)
                    setIsFormOpen(true)
                  }}
                  className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors duration-200"
                >
                  <FiEdit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(member.id)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
                >
                  <FiTrash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-md">
                  Order: {member.order}
                </span>
              </div>
              {member.bio && (
                <p className="text-gray-600 mt-2 line-clamp-3">{member.bio}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
            <div className="p-6">
              <OrganizationMemberForm
                member={editingMember}
                onClose={() => setIsFormOpen(false)}
                onSave={(newMember) => {
                  if (editingMember) {
                    setMembers(
                      members.map((m) =>
                        m.id === editingMember.id ? newMember : m
                      )
                    )
                  } else {
                    setMembers([...members, newMember])
                  }
                  setIsFormOpen(false)
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 