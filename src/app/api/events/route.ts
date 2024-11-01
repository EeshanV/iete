import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const eventId = searchParams.get('id')

    // If eventId is provided, return detailed event info with images
    if (eventId) {
      const event = await prisma.event.findUnique({
        where: { id: parseInt(eventId) },
        include: { images: true }
      })
      return NextResponse.json(event)
    }

    // Otherwise return filtered events list
    const where = category && category !== 'all' 
      ? { category } 
      : undefined

    const events = await prisma.event.findMany({
      where,
      orderBy: {
        date: 'desc'
      }
    })

    return NextResponse.json(events)
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 })
  }
} 