import { FC } from 'react'

const Hero: FC = () => {
  return (
    <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh]">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/consulting.webp')",
          filter: "brightness(1.0)"
        }}
      />
      
      {/* Darker animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
      
      {/* Darker animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-blue-900/20 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-purple-900/20 blur-[120px] animate-pulse [animation-delay:1s]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Transform Your Business with Modern IT Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We help businesses leverage cutting-edge technology to drive growth and innovation
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors backdrop-blur-sm">
              Get Started
            </button>
            <button className="border border-blue-500 text-blue-400 hover:bg-blue-900/30 font-semibold py-3 px-8 rounded-lg transition-colors backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero