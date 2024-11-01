import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const experts = await prisma.expert.findMany()
    return NextResponse.json(experts)
  } catch {
    return NextResponse.json({ error: 'Error fetching experts' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const expert = await prisma.expert.create({
      data: json,
    })
    return NextResponse.json(expert)
  } catch {
    return NextResponse.json({ error: 'Error creating expert' }, { status: 500 })
  }
} 