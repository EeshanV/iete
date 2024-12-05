'use client'

import React, { useState, useEffect } from 'react'
import { RDProject } from '@prisma/client'
import { FiX } from 'react-icons/fi'

interface RDProjectFormProps {
  project?: RDProject | null
  onClose: () => void
  onSave: (project: RDProject) => void
}

export default function RDProjectForm({
  project,
  onClose,
  onSave,
}: RDProjectFormProps) {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    order: 0,
  })

  useEffect(() => {
    if (project) {
      setFormData({
        category: project.category,
        title: project.title,
        description: project.description || '',
        order: project.order,
      })
    }
  }, [project])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(
        project ? `/api/rd-projects/${project.id}` : '/api/rd-projects',
        {
          method: project ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )
      if (response.ok) {
        const savedProject = await response.json()
        onSave(savedProject)
      }
    } catch (error) {
      console.error('Error saving project:', error)
    }
  }

  const categories = [
    'EMBEDDED BASED PROJECTS',
    'ANDROID AND SMART PHONE BASED PROJECTS',
    'IOT BASED PROJECTS',
    'MACHINE LEARNING PROJECTS',
    'ARTIFICIAL INTELLIGENCE PROJECTS',
    'ROBOTICS PROJECTS',
    'Other'
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          {project ? 'Edit Project' : 'Add New Project'}
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
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {project ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  )
} 