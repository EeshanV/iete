import { useEffect, useState } from 'react'
import type { Event } from '@prisma/client'
import React from 'react'


export default function Events() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error))
  }, [])

  return (
    <div>
      {events.map(event => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          {event.imageUrl && <img src={event.imageUrl} alt={event.title} />}
        </div>
      ))}
    </div>
  )
} 