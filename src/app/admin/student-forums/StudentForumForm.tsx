'use client'

import React, { useState, useEffect } from 'react'
import { StudentForum, Coordinator } from '@prisma/client'
import { FiX } from 'react-icons/fi'

interface StudentForumFormProps {
  forum?: StudentForumWithCoordinator | null
  onClose: () => void
  onSave: (forum: StudentForumWithCoordinator) => void
}

interface StudentForumWithCoordinator extends StudentForum {
  coordinator: Coordinator | null
}

export default function StudentForumForm({
  forum,
  onClose,
  onSave,
}: StudentForumFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    website: '',
    dateOfInauguration: '',
    coordinator: {
      name: '',
      designation: '',
      contact: '',
      phone: '',
      fax: '',
      email: '',
    },
  })

  useEffect(() => {
    if (forum) {
      setFormData({
        name: forum.name,
        address: forum.address,
        website: forum.website || '',
        dateOfInauguration: forum.dateOfInauguration || '',
        coordinator: forum.coordinator ? {
          name: forum.coordinator.name,
          designation: forum.coordinator.designation,
          contact: forum.coordinator.contact || '',
          phone: forum.coordinator.phone || '',
          fax: forum.coordinator.fax || '',
          email: forum.coordinator.email || '',
        } : {
          name: '',
          designation: '',
          contact: '',
          phone: '',
          fax: '',
          email: '',
        },
      })
    }
  }, [forum])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(
        forum ? `/api/student-forums/${forum.id}` : '/api/student-forums',
        {
          method: forum ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )
      if (response.ok) {
        const savedForum = await response.json()
        onSave(savedForum)
      }
    } catch (error) {
      console.error('Error saving forum:', error)
    }
  }

  const handleCoordinatorChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      coordinator: {
        ...formData.coordinator,
        [field]: value,
      },
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {forum ? 'Edit Student Forum' : 'Add New Student Forum'}
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <FiX className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Forum Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Website</label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="https://"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Inauguration</label>
          <input
            type="date"
            value={formData.dateOfInauguration}
            onChange={(e) => setFormData({ ...formData, dateOfInauguration: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="border-t pt-4 mt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Coordinator Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={formData.coordinator.name}
                onChange={(e) => handleCoordinatorChange('name', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Designation</label>
              <input
                type="text"
                value={formData.coordinator.designation}
                onChange={(e) => handleCoordinatorChange('designation', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Contact</label>
              <input
                type="text"
                value={formData.coordinator.contact}
                onChange={(e) => handleCoordinatorChange('contact', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                value={formData.coordinator.phone}
                onChange={(e) => handleCoordinatorChange('phone', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Fax</label>
              <input
                type="text"
                value={formData.coordinator.fax}
                onChange={(e) => handleCoordinatorChange('fax', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={formData.coordinator.email}
                onChange={(e) => handleCoordinatorChange('email', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {forum ? 'Update Forum' : 'Create Forum'}
        </button>
      </div>
    </form>
  )
} 