'use client'
import React, { useState } from 'react'

interface DeleteButtonProps {
  onDelete: () => Promise<void>
}

export default function DeleteButton({ onDelete }: DeleteButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this item?')) return
    setIsDeleting(true)
    try {
      await onDelete()
    } catch (error) {
      console.error('Failed to delete:', error)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
    >
      {isDeleting ? 'Deleting...' : 'Delete'}
    </button>
  )
} 