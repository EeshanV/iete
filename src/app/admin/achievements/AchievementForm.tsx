'use client'

import React, { useState } from 'react'
import { Achievement } from '@prisma/client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface AchievementFormProps {
  initialData?: Achievement
}

export default function AchievementForm({ initialData }: AchievementFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(initialData?.url || null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      // Create a preview URL for the selected file
      const fileUrl = URL.createObjectURL(file)
      setPreviewUrl(fileUrl)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    
    // Handle file upload first if there's a file
    let url = initialData?.url
    if (selectedFile) {
      try {
        const uploadData = new FormData()
        uploadData.append('file', selectedFile)
        
        const uploadRes = await fetch('/api/upload', {
          method: 'POST',
          body: uploadData,
        })
        
        if (!uploadRes.ok) throw new Error('Failed to upload file')
        
        const uploadResult = await uploadRes.json()
        url = uploadResult.url
      } catch (error) {
        setError('Failed to upload file')
        setIsLoading(false)
        return
      }
    }

    // Prepare achievement data
    const data = {
      title: formData.get('title'),
      year: formData.get('year'),
      description: formData.get('description'),
      url: url
    }

    try {
      const apiUrl = initialData 
        ? `/api/achievements/${initialData.id}`
        : '/api/achievements'
      
      const response = await fetch(apiUrl, {
        method: initialData ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to save achievement')
      }

      router.push('/admin/achievements')
      router.refresh()
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-md">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          required
          defaultValue={initialData?.title}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="year" className="block text-sm font-medium text-gray-700">
          Year
        </label>
        <input
          type="text"
          name="year"
          id="year"
          required
          defaultValue={initialData?.year}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          rows={4}
          defaultValue={initialData?.description || ''}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          File Upload
        </label>
        <div className="mt-2 space-y-4">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">PDF, DOC, DOCX, or any other file</p>
              </div>
              <input
                id="file-upload"
                name="file"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
          
          {previewUrl && (
            <div className="relative mt-4 p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-8 h-8 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {selectedFile?.name || 'Current file'}
                    </p>
                    <p className="text-xs text-gray-500">
                      {selectedFile?.size
                        ? `${Math.round(selectedFile.size / 1024)} KB`
                        : 'File uploaded'}
                    </p>
                  </div>
                </div>
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  View file
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isLoading ? 'Saving...' : 'Save Achievement'}
        </button>
      </div>
    </form>
  )
} 