import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      include: {
        images: true,
      },
      orderBy: {
        date: 'desc',
      },
    })
    return NextResponse.json(events)
  } catch (error) {
    console.error('Error fetching events:', error)
    return new NextResponse(
      JSON.stringify({ error: 'Error fetching events' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const event = await prisma.event.create({
      data: {
        title: data.title,
        date: new Date(data.date),
        description: data.description,
        imageUrl: data.imageUrl,
        url: data.url,
        category: data.category,
        location: data.location,
        isHighlighted: data.isHighlighted || false,
        images: {
          create: data.images || [],
        },
      },
      include: {
        images: true,
      },
    })
    return NextResponse.json(event)
  } catch (error) {
    console.error('Error creating event:', error)
    return new NextResponse(
      JSON.stringify({ error: 'Error creating event' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
} 