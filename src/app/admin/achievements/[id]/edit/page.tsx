import React from 'react'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import AchievementForm from '../../AchievementForm'

export default async function EditAchievementPage({
  params
}: {
  params: { id: string }
}) {
  const achievement = await prisma.achievement.findUnique({
    where: {
      id: parseInt(params.id)
    }
  })

  if (!achievement) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit Achievement</h1>
      <AchievementForm initialData={achievement} />
    </div>
  )
} 