'use client'

import React, { useEffect, useState } from 'react'
import { 
  FiUsers, FiBook, FiAward, FiServer, 
  FiUserPlus, FiActivity, FiGrid, FiTrendingUp,
  FiCalendar
} from 'react-icons/fi'
import Link from 'next/link'

interface DashboardStats {
  expertsCount: number
  forumsCount: number
  projectsCount: number
  infrastructureCount: number
  eventsCount: number
}

const quickActions = [
  {
    title: 'Experts',
    icon: FiUsers,
    href: '/admin/experts',
    color: 'bg-blue-500',
    description: 'Manage expert profiles and details'
  },
  {
    title: 'Organization',
    icon: FiUserPlus,
    href: '/admin/organization-members',
    color: 'bg-purple-500',
    description: 'Update organization structure'
  },
  {
    title: 'Student Forums',
    icon: FiBook,
    href: '/admin/student-forums',
    color: 'bg-green-500',
    description: 'Manage student forum information'
  },
  {
    title: 'R&D',
    icon: FiServer,
    href: '/admin/rd',
    color: 'bg-orange-500',
    description: 'Update R&D projects and infrastructure'
  },
  {
    title: 'Achievements',
    icon: FiAward,
    href: '/admin/achievements',
    color: 'bg-yellow-500',
    description: 'Track and update achievements'
  },
  {
    title: 'Events',
    icon: FiCalendar,
    href: '/admin/events',
    color: 'bg-pink-500',
    description: 'Manage events and activities'
  },
]

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/dashboard/stats')
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (error) {
      console.error('Error fetching dashboard stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const statCards = stats ? [
    {
      title: 'Total Experts',
      value: stats.expertsCount.toString(),
      icon: FiUsers,
      color: 'text-blue-600',
    },
    {
      title: 'Student Forums',
      value: stats.forumsCount.toString(),
      icon: FiBook,
      color: 'text-green-600',
    },
    {
      title: 'R&D Projects',
      value: stats.projectsCount.toString(),
      icon: FiServer,
      color: 'text-orange-600',
    },
    {
      title: 'Recent Events',
      value: stats.eventsCount?.toString() || '0',
      icon: FiCalendar,
      color: 'text-pink-600',
    }
  ] : []

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white">
        <h1 className="text-3xl font-bold">Welcome to IETE Admin</h1>
        <p className="mt-2 text-blue-100">
          Manage and update all aspects of IETE from one central dashboard.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          // Loading skeleton for stats
          Array(4).fill(0).map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 animate-pulse">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                  <div className="h-8 bg-gray-200 rounded w-16"></div>
                </div>
                <div className="rounded-full bg-gray-200 p-3 w-12 h-12"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-24 mt-2"></div>
            </div>
          ))
        ) : (
          statCards.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} rounded-full p-3 bg-opacity-10`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <Link 
                key={index} 
                href={action.href}
                className="group bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-gray-200"
              >
                <div className="flex items-center gap-4">
                  <div className={`${action.color} text-white rounded-lg p-3 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
} 