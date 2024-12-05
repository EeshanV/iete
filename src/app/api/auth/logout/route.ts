import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  try {
    // Clear the auth cookie
    const cookieStore = await cookies();
    cookieStore.delete('auth-token')
    
    return NextResponse.json({ message: 'Logged out successfully' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error logging out' },
      { status: 500 }
    )
  }
} 