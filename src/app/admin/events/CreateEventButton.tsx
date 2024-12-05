'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function CreateEventButton() {
  const router = useRouter()
  
  return (
    <button
      onClick={() => router.push('/admin/events/create')}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Create Event
    </button>
  )
} 