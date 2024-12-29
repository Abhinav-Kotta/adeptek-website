import { FC } from 'react'

const Hero: FC = () => {
  return (
    <section className="relative min-h-screen px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/consulting.webp')",
          filter: "brightness(0.3)"
        }}
      />
      
      {/* Darker animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
      
      {/* Animated orbs - adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[90%] sm:w-[80%] h-[80%] rounded-full bg-blue-900/20 blur-[80px] sm:blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[90%] sm:w-[80%] h-[80%] rounded-full bg-purple-900/20 blur-[80px] sm:blur-[120px] animate-pulse [animation-delay:1s]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto pt-16 sm:pt-24 pb-12">
        <div className="max-w-lg sm:max-w-2xl px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Transform Your Business with Modern IT Solutions
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            We help businesses leverage cutting-edge technology to drive growth and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors backdrop-blur-sm">
              Get Started
            </button>
            <button className="w-full sm:w-auto border border-blue-500 text-blue-400 hover:bg-blue-900/30 font-semibold py-3 px-8 rounded-lg transition-colors backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero