'use client'

import React, { useState, useEffect } from 'react'
import { RDInfrastructure } from '@prisma/client'
import RDInfrastructureForm from './RDInfrastructureForm'
import { FiEdit2, FiTrash2, FiPlus, FiBox, FiList } from 'react-icons/fi'

export default function RDInfrastructureList() {
  const [items, setItems] = useState<RDInfrastructure[]>([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<RDInfrastructure | null>(null)

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      const response = await fetch('/api/rd-infrastructure')
      if (response.ok) {
        const data = await response.json()
        setItems(data)
      }
    } catch (error) {
      console.error('Error fetching R&D infrastructure:', error)
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this item?')) {
      try {
        const response = await fetch(`/api/rd-infrastructure/${id}`, {
          method: 'DELETE',
        })
        if (response.ok) {
          setItems(items.filter((item) => item.id !== id))
        }
      } catch (error) {
        console.error('Error deleting item:', error)
      }
    }
  }

  // Group items by category
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, RDInfrastructure[]>)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <button
          onClick={() => {
            setEditingItem(null)
            setIsFormOpen(true)
          }}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <FiPlus className="w-5 h-5" />
          Add New Infrastructure
        </button>
      </div>

      {Object.entries(groupedItems).map(([category, categoryItems]) => (
        <div key={category} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <FiList className="w-5 h-5" />
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start gap-3">
                      <FiBox className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingItem(item)
                          setIsFormOpen(true)
                        }}
                        className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors duration-200"
                      >
                        <FiEdit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {item.description && (
                    <p className="text-gray-600 mt-2 line-clamp-3">{item.description}</p>
                  )}
                  {item.specs && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-sm text-gray-500">{item.specs}</p>
                    </div>
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
              <RDInfrastructureForm
                item={editingItem}
                onClose={() => setIsFormOpen(false)}
                onSave={(newItem) => {
                  if (editingItem) {
                    setItems(
                      items.map((i) =>
                        i.id === editingItem.id ? newItem : i
                      )
                    )
                  } else {
                    setItems([...items, newItem])
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