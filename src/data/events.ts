export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
  category: 'conference' | 'workshop' | 'seminar' | 'competition' | 'other';
  location: string;
  isHighlighted?: boolean;
}

export const events: Event[] = [
  {
    id: 1,
    title: "National Science Day Celebrations",
    date: "2024-02-28",
    description: "Celebrated National Science Day with various technical competitions, paper presentations, and project exhibitions. Students from different colleges participated enthusiastically.",
    category: "competition",
    location: "IETE Hyderabad Centre",
    imageUrl: "/images/events/science-day-2024.jpg",
    isHighlighted: true
  },
  {
    id: 2,
    title: "Workshop on IoT and Machine Learning",
    date: "2024-02-15",
    description: "Two-day workshop covering practical aspects of IoT implementation and ML algorithms. Hands-on sessions with real-world applications.",
    category: "workshop",
    location: "IETE Auditorium",
    imageUrl: "/images/events/iot-workshop.jpg"
  },
  {
    id: 3,
    title: "IETE Students Day",
    date: "2024-01-20",
    description: "Annual gathering celebrating student achievements with technical paper presentations, project exhibitions, and cultural activities.",
    category: "other",
    location: "IETE Hyderabad Centre",
    imageUrl: "/images/events/students-day.jpg",
    isHighlighted: true
  }
]; 