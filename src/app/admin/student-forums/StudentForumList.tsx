'use client'

import React, { useState, useEffect } from 'react'
import { StudentForum, Coordinator } from '@prisma/client'
import StudentForumForm from './StudentForumForm'
import { FiEdit2, FiTrash2, FiPlus, FiCalendar, FiMapPin, FiGlobe, FiUser } from 'react-icons/fi'

interface StudentForumWithCoordinator extends StudentForum {
  coordinator: Coordinator | null
}

export default function StudentForumList() {
  const [forums, setForums] = useState<StudentForumWithCoordinator[]>([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingForum, setEditingForum] = useState<StudentForumWithCoordinator | null>(null)

  useEffect(() => {
    fetchForums()
  }, [])

  const fetchForums = async () => {
    try {
      const response = await fetch('/api/student-forums')
      if (response.ok) {
        const data = await response.json()
        setForums(data)
      }
    } catch (error) {
      console.error('Error fetching forums:', error)
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this forum?')) {
      try {
        const response = await fetch(`/api/student-forums/${id}`, {
          method: 'DELETE',
        })
        if (response.ok) {
          setForums(forums.filter((forum) => forum.id !== id))
        }
      } catch (error) {
        console.error('Error deleting forum:', error)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <button
          onClick={() => {
            setEditingForum(null)
            setIsFormOpen(true)
          }}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <FiPlus className="w-5 h-5" />
          Add New Forum
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {forums.map((forum) => (
          <div
            key={forum.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{forum.name}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingForum(forum)
                      setIsFormOpen(true)
                    }}
                    className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors duration-200"
                  >
                    <FiEdit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(forum.id)}
                    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <FiMapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="line-clamp-2">{forum.address}</span>
                </div>
                {forum.website && (
                  <div className="flex items-center gap-2 text-blue-600">
                    <FiGlobe className="w-4 h-4 flex-shrink-0" />
                    <a 
                      href={forum.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:underline truncate"
                    >
                      {forum.website}
                    </a>
                  </div>
                )}
                {forum.dateOfInauguration && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiCalendar className="w-4 h-4 flex-shrink-0" />
                    <span>Inaugurated: {forum.dateOfInauguration}</span>
                  </div>
                )}
              </div>

              {forum.coordinator && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-900 mb-2">
                    <FiUser className="w-4 h-4" />
                    <h4 className="font-medium">Coordinator</h4>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-gray-900 font-medium">{forum.coordinator.name}</p>
                      <p className="text-gray-600">{forum.coordinator.designation}</p>
                    </div>
                    <div className="text-sm space-y-1">
                      {forum.coordinator.email && (
                        <p className="text-blue-600">
                          <a href={`mailto:${forum.coordinator.email}`} className="hover:underline">
                            {forum.coordinator.email}
                          </a>
                        </p>
                      )}
                      {forum.coordinator.phone && (
                        <p className="text-gray-600">{forum.coordinator.phone}</p>
                      )}
                      {forum.coordinator.fax && (
                        <p className="text-gray-600">Fax: {forum.coordinator.fax}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto m-4">
            <div className="p-6">
              <StudentForumForm
                forum={editingForum}
                onClose={() => setIsFormOpen(false)}
                onSave={(newForum) => {
                  if (editingForum) {
                    setForums(
                      forums.map((f) =>
                        f.id === editingForum.id ? newForum : f
                      )
                    )
                  } else {
                    setForums([...forums, newForum])
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