import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const [
      expertsCount,
      forumsCount,
      projectsCount,
      infrastructureCount,
      eventsCount
    ] = await Promise.all([
      prisma.expert.count(),
      prisma.studentForum.count(),
      prisma.rdProject.count(),
      prisma.rdInfrastructure.count(),
      prisma.event.count()
    ])

    // Calculate active forums percentage (example logic)
    const activeForumsPercentage = Math.round((forumsCount / 100) * 100)

    return NextResponse.json({
      expertsCount,
      forumsCount,
      projectsCount,
      infrastructureCount,
      activeForumsPercentage,
      eventsCount
    })
  } catch (error) {
    console.error('Error fetching admin stats:', error)
    return new NextResponse(null, { status: 500 })
  }
} 