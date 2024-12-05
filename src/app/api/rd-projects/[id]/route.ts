import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const project = await prisma.rDProject.findUnique({
      where: { id: parseInt(params.id) },
    })
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }
    return NextResponse.json(project)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching project' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json()
    const project = await prisma.rDProject.update({
      where: { id: parseInt(params.id) },
      data: {
        category: data.category,
        title: data.title,
        description: data.description,
        order: data.order,
      },
    })
    return NextResponse.json(project)
  } catch (error) {
    console.error('Error updating R&D project:', error)
    return NextResponse.json(
      { error: 'Error updating R&D project' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.rDProject.delete({
      where: { id: parseInt(params.id) },
    })
    return NextResponse.json({ message: 'Project deleted successfully' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error deleting project' },
      { status: 500 }
    )
  }
} 