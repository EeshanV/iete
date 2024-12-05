import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const event = await prisma.event.findUnique({
      where: {
        id: parseInt(params.id)
      },
      include: {
        images: true
      }
    })
    
    if (!event) {
      return new NextResponse(null, { status: 404 })
    }
    
    return NextResponse.json(event)
  } catch (error) {
    return new NextResponse(null, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.event.delete({
      where: {
        id: parseInt(params.id)
      }
    })
    
    return new NextResponse(null, { status: 204 })
  } catch (error) {
    return new NextResponse(null, { status: 500 })
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json()
    const event = await prisma.event.update({
      where: {
        id: parseInt(params.id)
      },
      data,
      include: {
        images: true
      }
    })
    
    return NextResponse.json(event)
  } catch (error) {
    return new NextResponse(null, { status: 500 })
  }
} 