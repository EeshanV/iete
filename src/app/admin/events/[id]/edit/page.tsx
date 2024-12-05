import React from 'react'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import EventForm from '../../EventForm'
import { Metadata } from 'next'
import { FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Edit Event | Admin',
  description: 'Edit event details in the admin panel',
}

export default async function EditEventPage({
  params
}: {
  params: { id: string }
}) {
  const event = await prisma.event.findUnique({
    where: {
      id: parseInt(params.id)
    },
    include: {
      images: true
    }
  })

  if (!event) {
    notFound()
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/admin/events"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FiArrowLeft className="w-5 h-5" />
            <span>Back to Events</span>
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Edit Event</h1>
            <p className="mt-2 text-gray-600">
              Update event details, images, and other information
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="space-y-6">
            {/* Event Preview Card */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Currently Editing:
              </h2>
              <div className="flex items-start gap-4">
                {event.imageUrl && (
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                )}
                <div>
                  <h3 className="font-medium text-gray-900">{event.title}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <p className="text-sm text-gray-500">{event.location}</p>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <EventForm initialData={event} />
          </div>
        </div>
      </div>
    </div>
  )
} 