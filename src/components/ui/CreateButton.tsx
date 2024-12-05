'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

interface CreateButtonProps {
  href: string
  label?: string
}

export default function CreateButton({ href, label = 'Create' }: CreateButtonProps) {
  const router = useRouter()
  
  return (
    <button
      onClick={() => router.push(href)}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {label}
    </button>
  )
} 