'use client'

import React, { useState, useEffect } from 'react'
import { OrganizationMember } from '@prisma/client'

interface OrganizationMemberFormProps {
  member?: OrganizationMember | null
  onClose: () => void
  onSave: (member: OrganizationMember) => void
}

export default function OrganizationMemberForm({
  member,
  onClose,
  onSave,
}: OrganizationMemberFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    imageUrl: '',
    bio: '',
    order: 0,
  })
  const [selectedImage, setSelectedImage] = useState<File | null>(null)

  useEffect(() => {
    if (member) {
      setFormData({
        name: member.name,
        role: member.role,
        imageUrl: member.imageUrl || '',
        bio: member.bio || '',
        order: member.order,
      })
    }
  }, [member])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0])
      // You can also add image preview here if needed
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      let imageUrl = formData.imageUrl

      // If a new image is selected, upload it first
      if (selectedImage) {
        const formData = new FormData()
        formData.append('file', selectedImage)
        
        // Upload image to your image hosting service
        // Replace with your image upload endpoint
        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })
        
        if (uploadResponse.ok) {
          const { url } = await uploadResponse.json()
          imageUrl = url
        }
      }

      const response = await fetch(
        member ? `/api/organization-members/${member.id}` : '/api/organization-members',
        {
          method: member ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            imageUrl,
          }),
        }
      )
      if (response.ok) {
        const savedMember = await response.json()
        onSave(savedMember)
      }
    } catch (error) {
      console.error('Error saving member:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">
        {member ? 'Edit Member' : 'Add New Member'}
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
        <label className="block text-sm font-medium text-gray-700">Role</label>
        <input
          type="text"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
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
        <label className="block text-sm font-medium text-gray-700">Image</label>
        <div className="mt-1 flex items-center gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <span className="text-sm text-gray-500">or</span>
          <input
            type="url"
            value={formData.imageUrl}
            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
            placeholder="Enter image URL"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        {formData.imageUrl && (
          <img
            src={formData.imageUrl}
            alt="Preview"
            className="mt-2 h-32 w-auto object-cover rounded-md"
          />
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Display Order</label>
        <input
          type="number"
          value={formData.order}
          onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          min="0"
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
          {member ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  )
} 