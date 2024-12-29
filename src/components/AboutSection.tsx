import { Code2, Shield, Database, Cloud } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">Why Choose Adeptek</h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto px-4">
            With over a decade of experience in the IT industry, we leverage our expertise to empower businesses through innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Experience Section */}
          <div className="space-y-4 sm:space-y-6 p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">Our Experience</h3>
            <p className="text-sm sm:text-base text-gray-300">
              After 10 years of delivering cutting-edge IT solutions, we&apos;ve refined our approach to help businesses thrive in the digital age. Our comprehensive expertise spans across modern technologies and methodologies.
            </p>
            
            {/* Tech Stack Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                { icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />, text: "Java Frameworks" },
                { icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />, text: "Cloud Development" },
                { icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />, text: "Security Solutions" },
                { icon: <Database className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />, text: "Database Technology" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-lg">
                  {item.icon}
                  <span className="text-sm sm:text-base text-gray-200">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Approach Section */}
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">Our Approach</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              We believe in delivering comprehensive solutions that drive real business value. Our process includes:
            </p>
            <ul className="space-y-3">
              {[
                "Thorough technical consultation",
                "Detailed project planning",
                "Milestone-based development",
                "Continuous support & maintenance"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;