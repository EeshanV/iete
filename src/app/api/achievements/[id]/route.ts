import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.achievement.delete({
      where: {
        id: parseInt(params.id)
      }
    })
    
    return NextResponse.json({ message: 'Achievement deleted successfully' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete achievement' },
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
    const achievement = await prisma.achievement.update({
      where: {
        id: parseInt(params.id)
      },
      data: {
        title: data.title,
        year: data.year,
        description: data.description,
        url: data.url
      }
    })
    
    return NextResponse.json(achievement)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update achievement' },
      { status: 500 }
    )
  }
} 