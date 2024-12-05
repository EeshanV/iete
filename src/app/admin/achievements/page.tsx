import React from 'react'
import { prisma } from '@/lib/prisma'
import AchievementList from './AchievementList'
import CreateButton from '@/components/ui/CreateButton'
import Card from '@/components/ui/Card'

export default async function AchievementsAdminPage() {
  const achievements = await prisma.achievement.findMany({
    orderBy: [
      { year: 'desc' },
      { createdAt: 'desc' }
    ]
  })

  const stats = {
    total: achievements.length,
    withFiles: achievements.filter(a => a.url).length,
    thisYear: achievements.filter(a => a.year === new Date().getFullYear().toString()).length
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Manage Achievements</h1>
        <CreateButton 
          href="/admin/achievements/create"
          label="Add Achievement"
        />
      </div>
      <AchievementList initialAchievements={achievements} />
    </div>
  )
} 