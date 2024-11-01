import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const achievements = await prisma.achievement.findMany({
      orderBy: {
        year: 'asc'
      }
    })
    return NextResponse.json(achievements)
  } catch (_error) {
    console.error('Error fetching achievements:', _error)
    return NextResponse.json({ error: 'Failed to fetch achievements' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const achievement = await prisma.achievement.create({
      data: json,
    })
    return NextResponse.json(achievement)
  } catch (_error) {
    return NextResponse.json({ error: 'Error creating achievement' }, { status: 500 })
  }
} 