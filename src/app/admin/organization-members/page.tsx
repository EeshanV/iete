import React from 'react'
import { Metadata } from 'next'
import OrganizationMemberList from './OrganizationMemberList'

export const metadata: Metadata = {
  title: 'Organization Member Management | Admin',
  description: 'Manage organization members in the admin panel',
}

export default function OrganizationMembersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Organization Member Management</h1>
      <OrganizationMemberList />
    </div>
  )
} 