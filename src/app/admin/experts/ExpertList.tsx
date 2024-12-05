'use client'

import React, { useState, useEffect } from 'react'
import { Expert } from '@prisma/client'
import ExpertForm from './ExpertForm'
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi'

export default function ExpertList() {
  const [experts, setExperts] = useState<Expert[]>([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingExpert, setEditingExpert] = useState<Expert | null>(null)

  useEffect(() => {
    fetchExperts()
  }, [])

  const fetchExperts = async () => {
    try {
      const response = await fetch('/api/experts')
      if (response.ok) {
        const data = await response.json()
        setExperts(data)
      }
    } catch (error) {
      console.error('Error fetching experts:', error)
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this expert?')) {
      try {
        const response = await fetch(`/api/experts/${id}`, {
          method: 'DELETE',
        })
        if (response.ok) {
          setExperts(experts.filter((expert) => expert.id !== id))
        }
      } catch (error) {
        console.error('Error deleting expert:', error)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <button
          onClick={() => {
            setEditingExpert(null)
            setIsFormOpen(true)
          }}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <FiPlus className="w-5 h-5" />
          Add New Expert
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <div className="relative h-48">
              {expert.imageUrl ? (
                <img
                  src={expert.imageUrl}
                  alt={expert.name}
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
                    setEditingExpert(expert)
                    setIsFormOpen(true)
                  }}
                  className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors duration-200"
                >
                  <FiEdit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(expert.id)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
                >
                  <FiTrash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{expert.name}</h3>
                  <p className="text-blue-600 font-medium">{expert.specialization}</p>
                </div>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-md">
                  {expert.experience} years
                </span>
              </div>
              <p className="text-gray-700">{expert.qualification}</p>
              {expert.bio && (
                <p className="text-gray-600 mt-2 line-clamp-3">{expert.bio}</p>
              )}
              {(expert.email || expert.phone) && (
                <div className="mt-3 pt-3 border-t border-gray-100 text-sm">
                  {expert.email && (
                    <p className="text-blue-600">
                      <a href={`mailto:${expert.email}`}>{expert.email}</a>
                    </p>
                  )}
                  {expert.phone && (
                    <p className="text-gray-600">{expert.phone}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
            <div className="p-6">
              <ExpertForm
                expert={editingExpert}
                onClose={() => setIsFormOpen(false)}
                onSave={(newExpert) => {
                  if (editingExpert) {
                    setExperts(
                      experts.map((e) =>
                        e.id === editingExpert.id ? newExpert : e
                      )
                    )
                  } else {
                    setExperts([...experts, newExpert])
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