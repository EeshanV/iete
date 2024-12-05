import React from 'react'
import { Metadata } from 'next'
import RDInfrastructureList from './RDInfrastructureList'
import RDProjectList from './RDProjectList'

export const metadata: Metadata = {
  title: 'R&D Management | Admin',
  description: 'Manage R&D infrastructure and projects in the admin panel',
}

export default function RDPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">R&D Management</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Infrastructure</h2>
          <RDInfrastructureList />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <RDProjectList />
        </section>
      </div>
    </div>
  )
} 