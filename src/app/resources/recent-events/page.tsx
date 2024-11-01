'use client'

import React, { useState, useEffect } from 'react'
import { Navbar } from '@/components/Navbar'
import { Calendar, MapPin, Filter, X } from 'lucide-react'

interface EventImage {
  id: number
  url: string
  caption: string
}

interface Event {
  id: number
  title: string
  date: string
  description: string
  imageUrl?: string
  category: string
  location: string
  isHighlighted: boolean
  images?: EventImage[]
}

export default function RecentEventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [loading, setLoading] = useState(true)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const categories = ['all', 'conference', 'workshop', 'seminar', 'competition', 'other']

  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoading(true)
        const response = await fetch(`/api/events?category=${selectedCategory}`)
        const data = await response.json()
        setEvents(data)
      } catch (error) {
        console.error('Error fetching events:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [selectedCategory])

  const handleReadMore = async (eventId: number) => {
    try {
      const response = await fetch(`/api/events?id=${eventId}`)
      const eventData = await response.json()
      setSelectedEvent(eventData)
      setCurrentImageIndex(0)
    } catch (error) {
      console.error('Error fetching event details:', error)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const nextImage = () => {
    if (selectedEvent?.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedEvent.images!.length - 1 ? 0 : prev + 1
      )
    }
  }

  const previousImage = () => {
    if (selectedEvent?.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedEvent.images!.length - 1 : prev - 1
      )
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F2F5]">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#0A2E5C] mb-4">Recent Events</h1>
            <p className="text-gray-600">
              Stay updated with the latest events and activities at IETE Hyderabad Centre
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex items-center space-x-2 overflow-x-auto pb-2">
            <Filter size={20} className="text-gray-500" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === category
                    ? 'bg-[#0A2E5C] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A2E5C] mx-auto"></div>
            </div>
          ) : (
            /* Events Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  {event.imageUrl && (
                    <div className="relative h-56">
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#0A2E5C] text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                          {event.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1 line-clamp-2">
                          {event.title}
                        </h3>
                        <div className="flex items-center text-white/90 text-sm">
                          <Calendar size={14} className="mr-1.5" />
                          {formatDate(event.date)}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-start space-x-2 mb-4">
                      <MapPin size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">{event.location}</p>
                    </div>
                    <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                      {event.description}
                    </p>
                    <button 
                      onClick={() => handleReadMore(event.id)}
                      className="inline-flex items-center text-[#00B4D8] font-medium hover:text-[#0090a8] transition-colors group"
                    >
                      Read more 
                      <svg 
                        className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute right-4 top-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              >
                <X size={24} />
              </button>

              {/* Image Gallery */}
              {selectedEvent.images && selectedEvent.images.length > 0 && (
                <div className="relative h-96">
                  <img
                    src={selectedEvent.images[currentImageIndex].url}
                    alt={selectedEvent.images[currentImageIndex].caption}
                    className="w-full h-full object-cover"
                  />
                  {selectedEvent.images.length > 1 && (
                    <>
                      <button
                        onClick={previousImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                      >
                        ←
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                      >
                        →
                      </button>
                      <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                        {selectedEvent.images[currentImageIndex].caption}
                      </p>
                    </>
                  )}
                </div>
              )}

              {/* Event Details */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#0A2E5C] mb-4">
                  {selectedEvent.title}
                </h2>
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar size={16} className="mr-2" />
                  {formatDate(selectedEvent.date)}
                </div>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin size={16} className="mr-2" />
                  {selectedEvent.location}
                </div>
                <p className="text-gray-600 whitespace-pre-line">
                  {selectedEvent.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 