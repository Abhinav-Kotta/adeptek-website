"use client"
import { FC, useState, ChangeEvent, FormEvent } from 'react'
import { Loader2 } from 'lucide-react'

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.'
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-4 sm:p-6 lg:p-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Get In Touch</h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s discuss how we can help transform your business
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'
              }`}>
                {submitStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5 sm:mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400 text-sm sm:text-base disabled:opacity-60"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5 sm:mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400 text-sm sm:text-base disabled:opacity-60"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5 sm:mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  disabled={isSubmitting}
                  className="w-full px-3 sm:px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400 text-sm sm:text-base disabled:opacity-60"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base inline-flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm