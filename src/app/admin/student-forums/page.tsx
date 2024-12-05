import React from 'react'
import { Metadata } from 'next'
import StudentForumList from './StudentForumList'

export const metadata: Metadata = {
  title: 'Student Forum Management | Admin',
  description: 'Manage student forums in the admin panel',
}

export default function StudentForumsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Student Forum Management</h1>
      <StudentForumList />
    </div>
  )
} 