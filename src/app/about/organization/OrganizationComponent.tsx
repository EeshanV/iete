'use client'

import React, { useState } from 'react'
import { Navbar } from '../../../components/Navbar'
import { User, X, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import type { OrganizationMember } from '@prisma/client'

interface Props {
  initialMembers: OrganizationMember[]
}

export function OrganizationComponent({ initialMembers }: Props) {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [expandedBios, setExpandedBios] = useState<{ [key: number]: boolean }>({});

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  const toggleBioExpansion = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedBios(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const formatBio = (bio: string, isExpanded: boolean) => {
    const paragraphs = bio.split('\n').filter(p => p.trim() !== '');
    const displayParagraphs = isExpanded ? paragraphs : paragraphs.slice(0, 2);
    
    return (
      <>
        {displayParagraphs.map((p, i) => (
          <p key={i} className="text-sm mb-2">{p}</p>
        ))}
        {!isExpanded && paragraphs.length > 2 && (
          <p className="text-sm text-gray-300">...</p>
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F2F5]">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-24">
        <h1 className="text-4xl font-bold mb-6 text-[#0A2E5C]">Our Organization</h1>
        <p className="mb-8 text-gray-600">Meet the dedicated individuals who make up our organization.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {initialMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              style={{ perspective: '1000px' }}
              onClick={() => handleCardClick(index)}
            >
              <div 
                className={`relative w-full h-full transition-transform duration-500`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: flippedCard === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  height: '300px'
                }}
              >
                {/* Front of the card */}
                <div 
                  className="absolute w-full h-full"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="p-4 flex flex-col h-full justify-between">
                    {member.imageUrl ? (
                      <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                        <Image 
                          src={member.imageUrl} 
                          alt={member.name} 
                          width={96} 
                          height={96} 
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-[#00B4D8] flex items-center justify-center">
                        <User size={48} className="text-white" />
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-center text-[#0A2E5C] mb-2 line-clamp-2">{member.name}</h3>
                    <p className="text-sm text-center text-gray-600 mt-auto">{member.role}</p>
                  </div>
                  <div className="bg-[#0A2E5C] h-2 absolute bottom-0 w-full"></div>
                </div>

                {/* Back of the card */}
                <div 
                  className="absolute w-full h-full bg-[#0A2E5C] text-white p-4 flex flex-col justify-between overflow-y-auto"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                    <div className="text-sm">
                      {member.bio ? (
                        <>
                          {formatBio(member.bio, expandedBios[index] || false)}
                          {member.bio.split('\n').filter(p => p.trim() !== '').length > 2 && (
                            <button 
                              onClick={(e) => toggleBioExpansion(index, e)}
                              className="text-[#00B4D8] hover:underline flex items-center mt-2"
                            >
                              {expandedBios[index] ? (
                                <>
                                  <ChevronUp size={16} className="mr-1" />
                                  Read Less
                                </>
                              ) : (
                                <>
                                  <ChevronDown size={16} className="mr-1" />
                                  Read More
                                </>
                              )}
                            </button>
                          )}
                        </>
                      ) : (
                        "Bio coming soon..."
                      )}
                    </div>
                  </div>
                  <X 
                    className="absolute top-2 right-2 cursor-pointer" 
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlippedCard(null);
                      setExpandedBios(prev => ({ ...prev, [index]: false }));
                    }} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
} 