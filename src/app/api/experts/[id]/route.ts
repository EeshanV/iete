import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const expert = await prisma.expert.findUnique({
      where: { id: parseInt(params.id) },
    })
    if (!expert) {
      return NextResponse.json({ error: 'Expert not found' }, { status: 404 })
    }
    return NextResponse.json(expert)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching expert' },
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
    const expert = await prisma.expert.update({
      where: { id: parseInt(params.id) },
      data,
    })
    return NextResponse.json(expert)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error updating expert' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.expert.delete({
      where: { id: parseInt(params.id) },
    })
    return NextResponse.json({ message: 'Expert deleted successfully' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error deleting expert' },
      { status: 500 }
    )
  }
} 