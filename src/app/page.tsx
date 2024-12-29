// src/app/page.tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServiceCarousel from '@/components/ServiceCarousel'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServiceCarousel />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}