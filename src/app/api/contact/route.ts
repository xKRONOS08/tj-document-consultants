import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    
    // Extract form data
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const service = formData.get('service') as string
    const message = formData.get('message') as string

    // Log the submission (for debugging)
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      service,
      message
    })

    // Vercel Forms will automatically handle email sending
    // You can configure the email settings in your Vercel dashboard
    
    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully'
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { 
        success: false,
        message: 'Failed to submit form'
      },
      { status: 500 }
    )
  }
} 