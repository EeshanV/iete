import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div 
      className={`
        bg-white rounded-lg 
        shadow-[0_2px_8px_rgba(0,0,0,0.08)] 
        hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] 
        transition-shadow duration-300 
        p-6 
        ${className}
      `}
      role="region"
    >
      {children}
    </div>
  )
} 