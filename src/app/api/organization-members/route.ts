import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const members = await prisma.organizationMemberInstitute.findMany({
      orderBy: {
        name: 'asc',
      },
    })
    return NextResponse.json(members)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching organization members' }, { status: 500 })
  }
} 