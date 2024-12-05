import React from 'react'
import { OrganizationComponent } from './OrganizationComponent'
import { prisma } from '@/lib/prisma'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Organization',
}
export default async function OrganizationPage() {
  try {
    const members = await prisma.organizationMember.findMany({
      orderBy: {
        order: 'asc',
      },
    })

    return <OrganizationComponent initialMembers={members} />
  } catch (error) {
    console.error('Database error:', error)
    return <div>Error loading organization members</div>
  }
}
