import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Check database connection
    await prisma.$connect()

    // Fetch infrastructure with error handling
    const infrastructure = await prisma.rDInfrastructure.findMany({
      orderBy: {
        category: 'asc',
      },
    }).catch(error => {
      console.error('Error fetching infrastructure:', error)
      return []
    })

    // Fetch projects with error handling
    const projects = await prisma.rDProject.findMany({
      orderBy: [
        {
          category: 'asc',
        },
        {
          order: 'asc',
        },
      ],
    }).catch(error => {
      console.error('Error fetching projects:', error)
      return []
    })

    // Log the results
    console.log(`Found ${infrastructure.length} infrastructure items and ${projects.length} projects`)

    // Group infrastructure by category
    const groupedInfrastructure = infrastructure.reduce((acc, item) => {
      const existingCategory = acc.find(g => g.title === item.category)
      if (existingCategory) {
        existingCategory.items.push({
          name: item.name,
          description: item.description || '',
          specs: item.specs,
        })
      } else {
        acc.push({
          title: item.category,
          items: [{
            name: item.name,
            description: item.description || '',
            specs: item.specs,
          }]
        })
      }
      return acc
    }, [] as any[])

    // Group projects by category
    const groupedProjects = projects.reduce((acc, item) => {
      const existingCategory = acc.find(g => g.category === item.category)
      if (existingCategory) {
        existingCategory.items.push(item.title)
      } else {
        acc.push({
          category: item.category,
          items: [item.title]
        })
      }
      return acc
    }, [] as any[])

    return NextResponse.json({
      infrastructure: groupedInfrastructure,
      projects: groupedProjects
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { error: 'Error fetching R&D activities. Please try again later.' }, 
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
} 