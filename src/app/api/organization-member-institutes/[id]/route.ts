import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const member = await prisma.organizationMember.findUnique({
      where: { id: parseInt(params.id) },
    })
    if (!member) {
      return NextResponse.json({ error: 'Member not found' }, { status: 404 })
    }
    return NextResponse.json(member)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching member' },
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
    const member = await prisma.organizationMember.update({
      where: { id: parseInt(params.id) },
      data: {
        name: data.name,
        role: data.role,
        imageUrl: data.imageUrl,
        bio: data.bio,
        order: data.order,
      },
    })
    return NextResponse.json(member)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error updating member' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.organizationMember.delete({
      where: { id: parseInt(params.id) },
    })
    return NextResponse.json({ message: 'Member deleted successfully' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error deleting member' },
      { status: 500 }
    )
  }
} 