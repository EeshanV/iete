'use client'

import React from 'react'
import { Achievement } from '@prisma/client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Card from '@/components/ui/Card'

export default function AchievementList({
  initialAchievements
}: {
  initialAchievements: Achievement[]
}) {
  const router = useRouter()
  const [achievements, setAchievements] = useState(initialAchievements)

  const deleteAchievement = async (id: number) => {
    if (!confirm('Are you sure you want to delete this achievement?')) return
    
    try {
      const res = await fetch(`/api/achievements/${id}`, {
        method: 'DELETE'
      })
      
      if (res.ok) {
        setAchievements(achievements.filter(achievement => achievement.id !== id))
      }
    } catch (error) {
      console.error('Failed to delete achievement:', error)
    }
  }

  return (
    <Card>
      <ul className="divide-y divide-gray-200">
        {achievements.map((achievement) => (
          <li 
            key={achievement.id} 
            className={`py-6 first:pt-0 last:pb-0 transition-colors duration-200 ${
              achievement.url ? 'hover:bg-blue-50/50' : 'hover:bg-gray-50/50'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 px-4">
              <div className="space-y-3 flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    {achievement.title}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {achievement.year}
                  </span>
                </div>
                {achievement.description && (
                  <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                    {achievement.description}
                  </p>
                )}
                {achievement.url && (
                  <div className="flex items-center">
                    <a 
                      href={achievement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors group"
                    >
                      <svg 
                        className="mr-1.5 h-4 w-4 transition-transform group-hover:translate-y-[-1px]" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                        />
                      </svg>
                      <span className="border-b border-transparent group-hover:border-current">
                        View Document
                      </span>
                    </a>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => router.push(`/admin/achievements/${achievement.id}/edit`)}
                  className="px-3.5 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center gap-1.5"
                >
                  <svg 
                    className="h-4 w-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" 
                    />
                  </svg>
                  Edit
                </button>
                <button
                  onClick={() => deleteAchievement(achievement.id)}
                  className="px-3.5 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex items-center gap-1.5"
                >
                  <svg 
                    className="h-4 w-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                    />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
        {achievements.length === 0 && (
          <li className="py-12">
            <div className="text-center text-gray-500">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">No achievements</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by creating a new achievement.</p>
            </div>
          </li>
        )}
      </ul>
    </Card>
  )
} 