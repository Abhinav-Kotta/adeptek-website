import { Code2, Shield, Database, Cloud } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Adeptek</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            With over a decade of experience in the IT industry, we leverage our expertise to empower businesses through innovative technology solutions.
          </p>
        </div>
ß
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-white">Our Experience</h3>
            <p className="text-gray-300">
              After 10 years of delivering cutting-edge IT solutions, we&apos;ve refined our approach to help businesses thrive in the digital age. Our comprehensive expertise spans across modern technologies and methodologies.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Code2 className="w-6 h-6 text-blue-500" />, text: "Java Frameworks" },
                { icon: <Cloud className="w-6 h-6 text-blue-500" />, text: "Cloud Development" },
                { icon: <Shield className="w-6 h-6 text-blue-500" />, text: "Security Solutions" },
                { icon: <Database className="w-6 h-6 text-blue-500" />, text: "Database Technology" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-200">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-white">Our Approach</h3>
            <p className="text-gray-300 mb-4">
              We believe in delivering comprehensive solutions that drive real business value. Our process includes:
            </p>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Thorough technical consultation
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Detailed project planning
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Milestone-based development
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Continuous support & maintenance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;