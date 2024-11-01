import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const forums = await prisma.studentForum.findMany({
      include: {
        coordinator: true
      },
      orderBy: {
        name: 'asc'
      }
    })
    return NextResponse.json(forums)
  } catch (_error) {
    return NextResponse.json({ error: 'Error fetching student forums' }, { status: 500 })
  }
} 