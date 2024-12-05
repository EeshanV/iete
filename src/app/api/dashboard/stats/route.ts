import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Get current date and first day of current month
    const now = new Date()
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)

    // Fetch all counts in parallel
    const [
      expertsCount,
      expertsThisMonth,
      forumsCount,
      projectsCount,
      infrastructureCount,
      eventsCount
    ] = await Promise.all([
      // Total experts
      prisma.expert.count(),
      
      // New experts this month
      prisma.expert.count({
        where: {
          createdAt: {
            gte: firstDayOfMonth
          }
        }
      }),
      
      // Total forums
      prisma.studentForum.count(),
      
      // Total projects
      prisma.rDProject.count(),
      
      // Total infrastructure items
      prisma.rDInfrastructure.count(),

      //Total events
      prisma.event.count()
    ])



    const responseData = {
      expertsCount,
      newExpertsThisMonth: expertsThisMonth,
      forumsCount,
      projectsCount,
      infrastructureCount,
      eventsCount
    }

    // Ensure we're sending valid JSON
    return new NextResponse(JSON.stringify(responseData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })

  } catch (error) {
    console.error('Error in stats route:', error)
    return new NextResponse(
      JSON.stringify({ error: 'Error fetching dashboard statistics' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
} 