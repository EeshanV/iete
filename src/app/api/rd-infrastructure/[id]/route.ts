import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const item = await prisma.rDInfrastructure.findUnique({
      where: { id: parseInt(params.id) },
    })
    if (!item) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 })
    }
    return NextResponse.json(item)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching item' },
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
    const item = await prisma.rDInfrastructure.update({
      where: { id: parseInt(params.id) },
      data: {
        category: data.category,
        name: data.name,
        description: data.description,
        specs: data.specs,
      },
    })
    return NextResponse.json(item)
  } catch (error) {
    console.error('Error updating R&D infrastructure:', error)
    return NextResponse.json(
      { error: 'Error updating R&D infrastructure' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.rDInfrastructure.delete({
      where: { id: parseInt(params.id) },
    })
    return NextResponse.json({ message: 'Item deleted successfully' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error deleting item' },
      { status: 500 }
    )
  }
} 