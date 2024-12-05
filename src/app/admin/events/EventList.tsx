'use client'

import React from 'react'
import { Event, EventImage } from '@prisma/client'
import { useState } from 'react'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'
import Card from '@/components/ui/Card'

type EventWithImages = Event & {
  images: EventImage[]
}

function CategoryBadge({ category }: { category: string }) {
  const colorMap: Record<string, string> = {
    Workshop: 'bg-blue-100 text-blue-800',
    Conference: 'bg-purple-100 text-purple-800',
    Seminar: 'bg-green-100 text-green-800',
    Training: 'bg-yellow-100 text-yellow-800',
    Competition: 'bg-red-100 text-red-800',
    Webinar: 'bg-indigo-100 text-indigo-800',
    'Technical Talk': 'bg-pink-100 text-pink-800',
    'Cultural Event': 'bg-orange-100 text-orange-800',
    Other: 'bg-gray-100 text-gray-800',
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorMap[category] || colorMap.Other}`}>
      {category}
    </span>
  )
}

export default function EventList({
  initialEvents
}: {
  initialEvents: EventWithImages[]
}) {
  const router = useRouter()
  const [events, setEvents] = useState(initialEvents)

  const deleteEvent = async (id: number) => {
    if (!confirm('Are you sure you want to delete this event?')) return
    
    try {
      const res = await fetch(`/api/events/${id}`, {
        method: 'DELETE'
      })
      
      if (res.ok) {
        setEvents(events.filter(event => event.id !== id))
      }
    } catch (error) {
      console.error('Failed to delete event:', error)
    }
  }

  return (
    <Card>
      <ul className="divide-y divide-gray-200">
        {events.map((event) => (
          <li 
            key={event.id} 
            className={`py-6 first:pt-0 last:pb-0 transition-colors duration-200 hover:bg-gray-50/50`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 px-4">
              <div className="space-y-3 flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    {event.title}
                  </h3>
                  <CategoryBadge category={event.category} />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="mr-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {format(new Date(event.date), 'PPP')}
                  </span>
                  <span className="flex items-center">
                    <svg className="mr-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </span>
                </div>
                {event.description && (
                  <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                    {event.description}
                  </p>
                )}
                {/* Show indicators for attachments if they exist */}
                <div className="flex gap-2 text-sm text-gray-500">
                  {event.url && (
                    <span className="flex items-center">
                      <svg 
                        className="mr-1.5 h-4 w-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" 
                        />
                      </svg>
                      Document attached
                    </span>
                  )}
                  {event.images?.length > 0 && (
                    <span className="flex items-center">
                      <svg 
                        className="mr-1.5 h-4 w-4" 
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
                      {event.images.length} {event.images.length === 1 ? 'image' : 'images'}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => router.push(`/admin/events/${event.id}/edit`)}
                  className="px-3.5 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center gap-1.5"
                >
                  <svg 
                    className="h-4 w-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" 
                    />
                  </svg>
                  Edit
                </button>
                <button
                  onClick={() => deleteEvent(event.id)}
                  className="px-3.5 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex items-center gap-1.5"
                >
                  <svg 
                    className="h-4 w-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                    />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
        {events.length === 0 && (
          <li className="py-12">
            <div className="text-center text-gray-500">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">No events</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by creating a new event.</p>
            </div>
          </li>
        )}
      </ul>
    </Card>
  )
} 