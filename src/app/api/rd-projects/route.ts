import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const projects = await prisma.rDProject.findMany({
      orderBy: [
        { category: 'asc' },
        { order: 'asc' }
      ],
    })
    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching R&D projects' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const project = await prisma.rDProject.create({
      data: {
        category: data.category,
        title: data.title,
        description: data.description,
        order: data.order,
      },
    })
    return NextResponse.json(project)
  } catch (error) {
    console.error('Error creating R&D project:', error)
    return NextResponse.json(
      { error: 'Error creating R&D project' },
      { status: 500 }
    )
  }
} 