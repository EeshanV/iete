'use client'

import React, { useState } from 'react'
import { Event, EventImage } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { EVENT_CATEGORIES } from '@/lib/constants'
import FormField from '@/components/ui/FormField'
import Card from '@/components/ui/Card'

type EventWithImages = Event & {
  images: EventImage[]
}

interface EventFormProps {
  initialData?: EventWithImages
}

interface ImageUpload {
  file: File
  description: string
  previewUrl: string
}

interface ExistingImage extends EventImage {
  toDelete?: boolean
  newDescription?: string
}

interface UploadResponse {
  url: string
  error?: string
}

export default function EventForm({ initialData }: EventFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(initialData?.url || null)
  const [newImages, setNewImages] = useState<ImageUpload[]>([])
  const [existingImages, setExistingImages] = useState<ExistingImage[]>(
    initialData?.images || []
  )

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newUploads = Array.from(files).map(file => ({
        file,
        description: '',
        previewUrl: URL.createObjectURL(file)
      }))
      setNewImages(prev => [...prev, ...newUploads])
    }
  }

  const handleNewImageDescriptionChange = (index: number, description: string) => {
    setNewImages(prev => prev.map((img, i) => 
      i === index ? { ...img, description } : img
    ))
  }

  const handleExistingImageDescriptionChange = (id: number, description: string) => {
    setExistingImages(prev => prev.map(img => 
      img.id === id ? { ...img, newDescription: description } : img
    ))
  }

  const removeNewImage = (index: number) => {
    setNewImages(prev => prev.filter((_, i) => i !== index))
  }

  const toggleDeleteExistingImage = (id: number) => {
    setExistingImages(prev => prev.map(img => 
      img.id === id ? { ...img, toDelete: !img.toDelete } : img
    ))
  }

  const uploadFile = async (file: File): Promise<UploadResponse> => {
    const formData = new FormData()
    formData.append('file', file)
    
    try {
      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
      
      if (!uploadRes.ok) {
        const error = await uploadRes.text()
        throw new Error(error || 'Failed to upload file')
      }
      
      const data = await uploadRes.json()
      return data
    } catch (error) {
      console.error('Upload error:', error)
      throw error
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    
    try {
      // Handle file upload first if there's a file
      let url = initialData?.url
      if (selectedFile) {
        const uploadResult = await uploadFile(selectedFile)
        url = uploadResult.url
      }

      // Upload all new images
      const uploadedImages = []
      for (const image of newImages) {
        try {
          const uploadResult = await uploadFile(image.file)
          uploadedImages.push({
            url: uploadResult.url,
            caption: image.description
          })
        } catch (error) {
          console.error('Failed to upload image:', error)
          setError('Failed to upload one or more images')
          setIsLoading(false)
          return
        }
      }

      // Prepare image updates
      const imageUpdates = existingImages
        .filter(img => !img.toDelete)
        .map(img => ({
          id: img.id,
          url: img.url,
          caption: img.newDescription || img.caption
        }))

      const data = {
        title: formData.get('title'),
        date: new Date(formData.get('date') as string).toISOString(),
        description: formData.get('description'),
        category: formData.get('category'),
        location: formData.get('location'),
        url: url,
        imageUpdates,
        newImages: uploadedImages,
        deleteImageIds: existingImages
          .filter(img => img.toDelete)
          .map(img => img.id)
      }

      const apiUrl = initialData 
        ? `/api/events/${initialData.id}`
        : '/api/events'
      
      const response = await fetch(apiUrl, {
        method: initialData ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to save event')
      }

      router.push('/admin/events')
      router.refresh()
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="space-y-8 max-w-4xl mx-auto"
      noValidate
    >
      {error && (
        <div 
          className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md"
          role="alert"
          aria-live="polite"
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      <Card>
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Event Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Title"
            name="title"
            required
            defaultValue={initialData?.title}
            description="Enter a descriptive title for the event"
          />
          
          <FormField
            label="Date"
            name="date"
            type="datetime-local"
            required
            defaultValue={initialData?.date ? new Date(initialData.date).toISOString().slice(0, 16) : ''}
            description="Select the date and time of the event"
          />

          <FormField
            label="Category"
            name="category"
            as="select"
            required
            defaultValue={initialData?.category || ''}
            description="Choose the event category"
          >
            <option value="" disabled>Select a category</option>
            {EVENT_CATEGORIES.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </FormField>

          <FormField
            label="Location"
            name="location"
            required
            defaultValue={initialData?.location}
            description="Enter the event location"
          />

          <div className="col-span-2">
            <FormField
              label="Description"
              name="description"
              as="textarea"
              required
              defaultValue={initialData?.description}
              rows={4}
              description="Provide a detailed description of the event"
            />
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Event Images
        </h2>
        <div className="space-y-6">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="image-upload"
              className={`
                flex flex-col items-center justify-center 
                w-full h-48 
                border-2 border-dashed rounded-lg 
                cursor-pointer 
                transition-colors duration-200
                ${isLoading 
                  ? 'bg-gray-50 border-gray-300 cursor-not-allowed' 
                  : 'bg-gray-50 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
                }
              `}
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
              <input
                id="image-upload"
                name="images"
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>

          {/* Existing Images */}
          {existingImages.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-md font-medium text-gray-900">
                Existing Images
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {existingImages.map((image) => (
                  <div 
                    key={image.id} 
                    className={`
                      relative rounded-lg overflow-hidden
                      transition-all duration-200
                      ${image.toDelete 
                        ? 'opacity-50 scale-95' 
                        : 'hover:transform hover:scale-[1.02]'
                      }
                    `}
                  >
                    <img
                      src={image.url}
                      alt={image.caption || `Image ${image.id}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                      <textarea
                        value={image.newDescription || image.caption || ''}
                        onChange={(e) => handleExistingImageDescriptionChange(image.id, e.target.value)}
                        placeholder="Add a caption..."
                        className="w-full text-sm bg-transparent text-white placeholder-gray-300 border-0 focus:ring-0"
                        rows={2}
                        disabled={image.toDelete}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleDeleteExistingImage(image.id)}
                      className={`absolute top-2 right-2 p-1.5 rounded-full ${
                        image.toDelete 
                          ? 'bg-gray-500 hover:bg-gray-600' 
                          : 'bg-red-500 hover:bg-red-600'
                      } text-white transition-colors`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {image.toDelete ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4l16 16m0-16L4 20" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        )}
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* New Images */}
          {newImages.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-md font-medium text-gray-900">New Images</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {newImages.map((image, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden">
                    <img
                      src={image.previewUrl}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                      <textarea
                        value={image.description}
                        onChange={(e) => handleNewImageDescriptionChange(index, e.target.value)}
                        placeholder="Add a caption..."
                        className="w-full text-sm bg-transparent text-white placeholder-gray-300 border-0 focus:ring-0"
                        rows={2}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeNewImage(index)}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => router.back()}
          className={`
            px-6 py-2.5 
            text-sm font-medium 
            border rounded-md
            transition-colors duration-200
            disabled:opacity-50
            text-gray-700 bg-white border-gray-300 
            hover:bg-gray-50 hover:text-gray-900
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
          `}
          disabled={isLoading}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className={`
            px-6 py-2.5 
            text-sm font-medium 
            border rounded-md
            transition-all duration-200
            disabled:opacity-50
            text-white bg-blue-600 border-transparent 
            hover:bg-blue-700
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            transform hover:scale-[1.02]
          `}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Saving...
            </span>
          ) : (
            'Save Event'
          )}
        </button>
      </div>
    </form>
  )
} 