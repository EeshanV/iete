import { Metadata } from 'next'
import HomePage from '../components/homepage'
import prisma from '@/lib/prisma'

export const metadata: Metadata = {
  title: 'IETE - Institution of Electronics and Telecommunication Engineers',
  description: 'Institution of Electronics and Telecommunication Engineers',
}

async function getAchievements() {
  try {
    const achievements = await prisma.achievement.findMany({
      orderBy: {
        year: 'desc',
      },
    })
    return achievements
  } catch (error) {
    console.error('Error fetching achievements:', error)
    return []
  }
}

export default async function Page() {
  const achievements = await getAchievements()
  
  return <HomePage achievements={achievements} />
}
