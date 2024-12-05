import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const forum = await prisma.studentForum.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        coordinator: true,
      },
    })
    if (!forum) {
      return NextResponse.json({ error: 'Forum not found' }, { status: 404 })
    }
    return NextResponse.json(forum)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching forum' },
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
    const { coordinator, ...forumData } = data

    const forum = await prisma.studentForum.update({
      where: { id: parseInt(params.id) },
      data: {
        ...forumData,
        coordinator: {
          upsert: {
            create: coordinator,
            update: coordinator,
          },
        },
      },
      include: {
        coordinator: true,
      },
    })
    return NextResponse.json(forum)
  } catch (error) {
    console.error('Error updating student forum:', error)
    return NextResponse.json(
      { error: 'Error updating student forum' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Delete coordinator first due to the one-to-one relationship
    await prisma.coordinator.delete({
      where: { forumId: parseInt(params.id) },
    })
    
    await prisma.studentForum.delete({
      where: { id: parseInt(params.id) },
    })
    return NextResponse.json({ message: 'Forum deleted successfully' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error deleting forum' },
      { status: 500 }
    )
  }
} 