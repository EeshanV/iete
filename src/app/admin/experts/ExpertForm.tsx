'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { Expert } from '@prisma/client'

interface ExpertFormProps {
  expert?: Expert | null
  onClose: () => void
  onSave: (expert: Expert) => void
}

export default function ExpertForm({ expert, onClose, onSave }: ExpertFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    qualification: '',
    experience: 0,
    email: '',
    phone: '',
    bio: '',
    imageUrl: '',
  })

  useEffect(() => {
    if (expert) {
      setFormData({
        name: expert.name,
        specialization: expert.specialization,
        qualification: expert.qualification,
        experience: expert.experience,
        email: expert.email || '',
        phone: expert.phone || '',
        bio: expert.bio || '',
        imageUrl: expert.imageUrl || '',
      })
    }
  }, [expert])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(
        expert ? `/api/experts/${expert.id}` : '/api/experts',
        {
          method: expert ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )
      if (response.ok) {
        const savedExpert = await response.json()
        onSave(savedExpert)
      }
    } catch (error) {
      console.error('Error saving expert:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">
        {expert ? 'Edit Expert' : 'Add New Expert'}
      </h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Specialization</label>
        <input
          type="text"
          value={formData.specialization}
          onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Qualification</label>
        <input
          type="text"
          value={formData.qualification}
          onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Experience (Years)</label>
        <input
          type="number"
          value={formData.experience}
          onChange={(e) => setFormData({ ...formData, experience: parseInt(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          min="0"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Bio</label>
        <textarea
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={4}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="url"
          value={formData.imageUrl}
          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {expert ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  )
} 