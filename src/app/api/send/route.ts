// src/app/api/send/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    const data = await resend.emails.send({
      from: 'Adeptek <contact@adepteksolutions.com>',
      to: ['adepteksolutions@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
    })

    return NextResponse.json(data)
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Failed to send email, lmao'
    return NextResponse.json(
      { error: errorMessage }, 
      { status: 500 }
    )
  }
}