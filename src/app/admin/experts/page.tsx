import { Metadata } from 'next'
import ExpertList from './ExpertList'
import React from 'react'


export const metadata: Metadata = {
  title: 'Expert Management | Admin',
  description: 'Manage experts in the admin panel',
}

export default function ExpertsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Expert Management</h1>
      <ExpertList />
    </div>
  )
} 