import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const experts = await prisma.expert.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(experts)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching experts' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const expert = await prisma.expert.create({
      data,
    })
    return NextResponse.json(expert)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error creating expert' },
      { status: 500 }
    )
  }
} 