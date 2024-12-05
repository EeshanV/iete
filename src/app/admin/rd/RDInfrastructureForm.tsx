'use client'

import React, { useState, useEffect } from 'react'
import { RDInfrastructure } from '@prisma/client'
import { FiX } from 'react-icons/fi'

interface RDInfrastructureFormProps {
  item?: RDInfrastructure | null
  onClose: () => void
  onSave: (item: RDInfrastructure) => void
}

export default function RDInfrastructureForm({
  item,
  onClose,
  onSave,
}: RDInfrastructureFormProps) {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    description: '',
    specs: '',
  })

  useEffect(() => {
    if (item) {
      setFormData({
        category: item.category,
        name: item.name,
        description: item.description || '',
        specs: item.specs || '',
      })
    }
  }, [item])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(
        item ? `/api/rd-infrastructure/${item.id}` : '/api/rd-infrastructure',
        {
          method: item ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )
      if (response.ok) {
        const savedItem = await response.json()
        onSave(savedItem)
      }
    } catch (error) {
      console.error('Error saving infrastructure item:', error)
    }
  }

  const categories = [
    'Computer Lab',
    'Electronics Lab',
    'Mechanical Workshop',
    'Testing Equipment',
    'Software Tools',
    'Research Facilities',
    'Other'
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {item ? 'Edit Infrastructure' : 'Add New Infrastructure'}
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <FiX className="w-5 h-5" />
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

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
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={4}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Specifications</label>
        <textarea
          value={formData.specs}
          onChange={(e) => setFormData({ ...formData, specs: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={3}
          placeholder="Enter technical specifications, model numbers, or other details"
        />
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
          {item ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  )
} 