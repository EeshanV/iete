'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { 
  FiUsers, FiBook, FiAward, FiServer, FiUserPlus, FiHome, 
  FiMenu, FiX, FiLogOut, FiChevronLeft, FiChevronRight, FiCalendar 
} from 'react-icons/fi'
import { useState } from 'react'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: FiHome },
  { href: '/admin/experts', label: 'Experts', icon: FiUsers },
  { href: '/admin/organization-members', label: 'Organization', icon: FiUserPlus },
  { href: '/admin/student-forums', label: 'Student Forums', icon: FiBook },
  { href: '/admin/rd', label: 'R&D', icon: FiServer },
  { href: '/admin/achievements', label: 'Achievements', icon: FiAward },
  { href: '/admin/events', label: 'Events', icon: FiCalendar },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      })
      if (response.ok) {
        router.push('/login')
      }
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMobileMenuOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
              <Link 
                href="/admin" 
                className="flex items-center gap-4 px-4"
              >
                <Image
                  src="/IETE-Logo.png"
                  alt="IETE Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                  priority
                />
                <span className="font-bold text-xl text-blue-600 hover:text-blue-700 transition-colors">
                  Admin Dashboard
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg" onClick={e => e.stopPropagation()}>
            <div className="h-full overflow-y-auto">
              <div className="px-2 py-4 space-y-1">
                {navItems.map(({ href, label, icon: Icon }) => {
                  const isActive = pathname === href
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium
                        ${isActive 
                          ? 'bg-blue-50 text-blue-700' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                        }
                      `}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      {label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className={`hidden lg:fixed lg:inset-y-0 lg:flex lg:flex-col transition-all duration-300 ${isCollapsed ? 'lg:w-16' : 'lg:w-64'}`}>
        <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
          <div className="flex-1 flex flex-col pt-20 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 space-y-1">
              {navItems.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`
                      flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'} gap-3 
                      px-4 py-3 rounded-lg text-sm font-medium transition-colors
                      ${isActive 
                        ? 'bg-blue-50 text-blue-700' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }
                    `}
                    title={isCollapsed ? label : ''}
                  >
                    <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                    {!isCollapsed && <span>{label}</span>}
                  </Link>
                )
              })}
            </div>
            <div className="px-3 py-4 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className={`
                  w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'} gap-3 
                  px-4 py-3 rounded-lg text-sm font-medium text-red-600 
                  hover:bg-red-50 transition-colors
                `}
                title={isCollapsed ? 'Logout' : ''}
              >
                <FiLogOut className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span>Logout</span>}
              </button>
            </div>
          </div>
          {/* Collapse Toggle Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute right-0 top-24 transform translate-x-1/2 bg-white border border-gray-200 rounded-full p-1.5 hover:bg-gray-50"
          >
            {isCollapsed ? (
              <FiChevronRight className="w-4 h-4 text-gray-600" />
            ) : (
              <FiChevronLeft className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Main Content - Updated */}
      <div className={`transition-all duration-300 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'}`}>
        <main className="flex-1 pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
} 