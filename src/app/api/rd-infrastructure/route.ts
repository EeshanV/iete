import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const items = await prisma.rDInfrastructure.findMany({
      orderBy: [
        { category: 'asc' },
        { name: 'asc' }
      ],
    })
    return NextResponse.json(items)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching R&D infrastructure' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const item = await prisma.rDInfrastructure.create({
      data: {
        category: data.category,
        name: data.name,
        description: data.description,
        specs: data.specs,
      },
    })
    return NextResponse.json(item)
  } catch (error) {
    console.error('Error creating R&D infrastructure:', error)
    return NextResponse.json(
      { error: 'Error creating R&D infrastructure' },
      { status: 500 }
    )
  }
} 