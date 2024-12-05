import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const forums = await prisma.studentForum.findMany({
      include: {
        coordinator: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return NextResponse.json(forums)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching student forums' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { coordinator, ...forumData } = data

    const forum = await prisma.studentForum.create({
      data: {
        ...forumData,
        coordinator: {
          create: coordinator,
        },
      },
      include: {
        coordinator: true,
      },
    })
    return NextResponse.json(forum)
  } catch (error) {
    console.error('Error creating student forum:', error)
    return NextResponse.json(
      { error: 'Error creating student forum' },
      { status: 500 }
    )
  }
} 