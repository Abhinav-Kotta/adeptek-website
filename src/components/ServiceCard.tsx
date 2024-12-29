import { FC } from 'react'

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="mb-3 sm:mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-400">{description}</p>
    </div>
  )
}

export default ServiceCard