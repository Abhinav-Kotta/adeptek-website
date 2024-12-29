import { FC } from 'react'
import { Code2, Database, Cloud, Shield, GitBranch, Cpu, LineChart, Lock } from 'lucide-react'
import ServiceCard from './ServiceCard'

const Services: FC = () => {
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

  return (
    <section id="services" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Services</h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Comprehensive IT solutions tailored to transform and elevate your business
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services