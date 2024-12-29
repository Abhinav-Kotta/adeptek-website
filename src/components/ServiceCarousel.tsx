"use client"
import { FC, useRef, useState, useEffect } from 'react'
import { Code2, Database, Cloud, Shield, GitBranch, Cpu, LineChart, Lock, ChevronLeft, ChevronRight } from 'lucide-react'
import ServiceCard from './ServiceCard'

const Services: FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const services = [
    {
      title: "Cloud Solutions",
      description: "Modernize your infrastructure with scalable cloud solutions and seamless integration",
      icon: <Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
    },
    {
      title: "Custom Development",
      description: "Tailored software solutions designed specifically for your unique business needs",
      icon: <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights to drive business growth",
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with enterprise-grade security solutions and monitoring",
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
    },
    {
      title: "DevOps",
      description: "Streamline your development and operations with automated workflows",
      icon: <GitBranch className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
    },
    {
      title: "AI Solutions",
      description: "Leverage artificial intelligence and machine learning for business optimization",
      icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-500" />
    },
    {
      title: "Business Intelligence",
      description: "Make data-driven decisions with comprehensive analytics and reporting",
      icon: <LineChart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />
    },
    {
      title: "Identity Management",
      description: "Secure access control and authentication solutions for your organization",
      icon: <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
    }
  ]

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      handleScroll() // Check initial state
      
      return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300 // Adjust this value to change scroll distance
      const currentScroll = scrollContainerRef.current.scrollLeft
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="services" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Services</h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Comprehensive IT solutions tailored to transform and elevate your business
          </p>
        </div>

        <div className="relative">
          {/* Mobile scroll buttons */}
          <div className="sm:hidden">
            {showLeftArrow && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/90 p-2 rounded-full shadow-lg"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}
            {showRightArrow && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/90 p-2 rounded-full shadow-lg"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}
          </div>

          {/* Scrollable container for mobile, grid for larger screens */}
          <div
            ref={scrollContainerRef}
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {services.map((service, index) => (
              <div key={index} className="min-w-[280px] sm:min-w-0">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services