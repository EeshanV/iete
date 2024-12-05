'use client'

import React, { useState, useEffect } from 'react'
import { RDProject } from '@prisma/client'
import RDProjectForm from './RDProjectForm'
import { FiEdit2, FiTrash2, FiPlus, FiFolder } from 'react-icons/fi'

export default function RDProjectList() {
  const [projects, setProjects] = useState<RDProject[]>([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<RDProject | null>(null)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/rd-projects')
      if (response.ok) {
        const data = await response.json()
        setProjects(data)
      }
    } catch (error) {
      console.error('Error fetching R&D projects:', error)
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        const response = await fetch(`/api/rd-projects/${id}`, {
          method: 'DELETE',
        })
        if (response.ok) {
          setProjects(projects.filter((project) => project.id !== id))
        }
      } catch (error) {
        console.error('Error deleting project:', error)
      }
    }
  }

  // Group projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = []
    }
    acc[project.category].push(project)
    return acc
  }, {} as Record<string, RDProject[]>)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <button
          onClick={() => {
            setEditingProject(null)
            setIsFormOpen(true)
          }}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <FiPlus className="w-5 h-5" />
          Add New Project
        </button>
      </div>

      {Object.entries(groupedProjects).map(([category, categoryProjects]) => (
        <div key={category} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <FiFolder className="w-5 h-5" />
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                      <span className="text-sm text-gray-500">Order: {project.order}</span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingProject(project)
                          setIsFormOpen(true)
                        }}
                        className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors duration-200"
                      >
                        <FiEdit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {project.description && (
                    <p className="text-gray-600 mt-2 line-clamp-3">{project.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4">
            <div className="p-6">
              <RDProjectForm
                project={editingProject}
                onClose={() => setIsFormOpen(false)}
                onSave={(newProject) => {
                  if (editingProject) {
                    setProjects(
                      projects.map((p) =>
                        p.id === editingProject.id ? newProject : p
                      )
                    )
                  } else {
                    setProjects([...projects, newProject])
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