import React from 'react'
import { prisma } from '@/lib/prisma'
import { Metadata } from 'next'
import EventList from './EventList'
import CreateEventButton from './CreateEventButton'

export const metadata: Metadata = {
  title: 'Event Management | Admin',
  description: 'Manage events in the admin panel',
}

export default async function EventsAdminPage() {
  const events = await prisma.event.findMany({
    include: {
      images: true
    },
    orderBy: {
      date: 'desc'
    }
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Event Management</h1>
        <CreateEventButton />
      </div>
      <EventList initialEvents={events} />
    </div>
  )
} 