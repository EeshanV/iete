import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const members = await prisma.organizationMemberInstitute.findMany({
      orderBy: { order: 'asc' },
    })
    return NextResponse.json(members)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching members' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const member = await prisma.organizationMemberInstitute.create({
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
      { error: 'Error creating member' },
      { status: 500 }
    )
  }
} 