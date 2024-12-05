export const EVENT_CATEGORIES = [
  'Workshop',
  'Conference',
  'Seminar',
  'Training',
  'Competition',
  'Webinar',
  'Technical Talk',
  'Cultural Event',
  'Other'
] as const

export type EventCategory = typeof EVENT_CATEGORIES[number] 