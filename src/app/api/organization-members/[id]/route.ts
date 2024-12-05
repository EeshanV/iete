import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const member = await prisma.organizationMember.findUnique({
      where: {
        id: params.id
      }
    })
    
    if (!member) {
      return NextResponse.json(
        { error: 'Organization member not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(member)
  } catch (error) {
    console.error('Error fetching organization member:', error)
    return NextResponse.json(
      { error: 'Failed to fetch organization member' },
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
      where: {
        id: params.id
      },
      data
    })
    return NextResponse.json(member)
  } catch (error) {
    console.error('Error updating organization member:', error)
    return NextResponse.json(
      { error: 'Failed to update organization member' },
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
      where: {
        id: params.id
      }
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting organization member:', error)
    return NextResponse.json(
      { error: 'Failed to delete organization member' },
      { status: 500 }
    )
  }
} 