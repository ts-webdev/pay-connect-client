import React, { use } from 'react';
import { FaUsers, FaShieldAlt, FaRocket, FaAward, FaHeart, FaGlobe } from 'react-icons/fa';
import { AuthContext } from '../authContext/AuthContext';

const About = () => {
  const {theme} = use(AuthContext)
  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "৳2.5Cr+", label: "Bills Processed" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Customer Support" }
  ];

  const values = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Security First",
      description: "Bank-level encryption to protect your data and transactions"
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Fast & Reliable",
      description: "Instant bill payments with 99.9% uptime guarantee"
    },
    {
      icon: <FaHeart className="text-2xl" />,
      title: "Customer Focus",
      description: "We prioritize our users' needs and satisfaction"
    },
    {
      icon: <FaGlobe className="text-2xl" />,
      title: "Accessibility",
      description: "Available to everyone across Bangladesh"
    }
  ];

  return (
    <div className={`min-h-screen ${theme ==="light" ? "bg-linear-to-br from-blue-50 to-indigo-100" : "bg-linear-to-r from-gray-900 to-green-900"} -mt-23 pt-10`}>
      <title>PayConnect | About Us</title>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
              About PayConnect
            </h1>
            <p className={`text-xl md:text-2xl leading-relaxed ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
              We're revolutionizing utility bill management in Bangladesh, making payments 
              <span className="text-blue-600 font-semibold"> simpler, faster, and more secure</span> for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={`py-16 ${theme === "light" ? "bg-white" : "bg-black"}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                Our Mission
              </h2>
              <p className={`text-lg mb-6 leading-relaxed ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                At PayConnect, we believe that paying utility bills should be as simple as sending a text message. 
                We're committed to eliminating the hassles of traditional bill payment methods.
              </p>
              <p className={`text-lg mb-8 leading-relaxed ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                Founded in 2023, we've already helped over 50,000 Bangladeshis save time and money 
                by providing a seamless digital bill payment experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold">
                  Get Started
                </button>
                <button className={`px-8 py-3 border rounded-lg transition-colors font-semibold ${theme === "light" ? "border-blue-600 text-blue-600 hover:bg-blue-50" : "border-blue-600 text-blue-600 hover:bg-blue-900/20"}`}>
                  Contact Us
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500" 
                alt="Digital payment" 
                className="rounded-2xl shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${theme === "light" ? "bg-blue-50" : "bg-green-900/10"}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className={`font-medium ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-16 ${theme === "light" ? "bg-white" : "bg-black"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
              Our Values
            </h2>
            <p className={`text-lg ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
              These principles guide everything we do at PayConnect
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-6 text-center hover:shadow-lg transition-shadow ${theme === "light" ? "bg-white border border-gray-200" : "bg-gray-700"}`}
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                  {value.title}
                </h3>
                <p className={theme === "light" ? "text-gray-600" : "text-gray-300"}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Simplify Your Bill Payments?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of satisfied customers who trust PayConnect for their utility bills
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg transition-colors font-semibold">
                Start Paying Bills
              </button>
              <button className="px-8 py-3 border border-white text-white hover:bg-blue-700 rounded-lg transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;