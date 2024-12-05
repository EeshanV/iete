import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      )
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Create unique filename
    const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`
    const uploadDir = path.join(process.cwd(), 'public', 'uploads')
    const filepath = path.join(uploadDir, filename)

    // Ensure upload directory exists
    try {
      await mkdir(uploadDir, { recursive: true })
    } catch (error) {
      console.log('Directory exists or cannot be created')
    }

    // Write file to public/uploads directory
    try {
      await writeFile(filepath, buffer)
      console.log('File written successfully:', filepath)
    } catch (error) {
      console.error('Error writing file:', error)
      throw error
    }
    
    // Return the URL that can be used to access the file
    const url = `/uploads/${filename}`
    
    return NextResponse.json({ url })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    )
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
} 