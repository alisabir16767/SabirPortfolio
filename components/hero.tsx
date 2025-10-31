'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p className="text-lg text-yellow-300 mb-4 font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Sabir <span className="text-yellow-300">Ali</span>
              </h1>
              
              {/* Typewriter Effect */}
              <div className="text-xl md:text-2xl mb-6 h-16">
                <span className="text-gray-200">
                  I'm a{' '}
                  <span className="text-yellow-300 font-semibold">
                    <Typewriter
                      words={[
                        'Full Stack Developer',
                        'MERN Stack Specialist',
                        'Backend Developer',
                        'Problem Solver',
                        'Tech Enthusiast'
                      ]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </span>
              </div>
            </motion.div>

            <motion.p 
              className="text-lg mb-8 text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Building scalable web applications with modern technologies. 
              Passionate about creating efficient, user-friendly solutions that make an impact.
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              className="flex justify-center lg:justify-start space-x-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.a 
                href="https://github.com" 
                className="hover:text-yellow-300 transition-colors transform hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={28} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                className="hover:text-yellow-300 transition-colors transform hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a 
                href="mailto:alisabir167167@gmail.com" 
                className="hover:text-yellow-300 transition-colors transform hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={28} />
              </motion.a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.a 
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowDown size={20} />
              </motion.a>
              
              <motion.a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#ffffff",
                  color: "#7c3aed"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Floating Background Elements */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-600 rounded-full blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Main Image Container */}
              <motion.div
                className="relative w-full h-full bg-gradient-to-br from-purple-500 to-blue-600 rounded-full p-2 shadow-2xl"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Profile Image Placeholder - Replace with your actual image */}
                <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden border-4 border-white">
                  {/* You can replace this with your actual image using Next.js Image component */}
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <p className="text-sm font-medium">Your Photo Here</p>
                  </div>
                  
                  Uncomment and use this when you have your actual image 
                  <Image
                    src="/Sabiraliphoto.jpg"
                    alt="Sabir Ali"
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </div>

                <FloatingTechIcons />
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white text-purple-600 px-4 py-2 rounded-full shadow-lg font-semibold"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  2+ Years Hands-On Experience
                </span>
              </motion.div>

              {/* Available for Work Badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-yellow-400 text-purple-900 px-4 py-2 rounded-full shadow-lg font-semibold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
              >
                Available for Work
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Floating Tech Icons Component
function FloatingTechIcons() {
  const icons = [
    { icon: "⚛", name: "React", delay: 0 },
    { icon: "🚀", name: "Node.js", delay: 0.5 },
    { icon: "📱", name: "Mobile", delay: 1 },
    { icon: "☁", name: "Cloud", delay: 1.5 },
  ]

  return (
    <>
      {icons.map((tech, index) => (
        <motion.div
          key={tech.name}
          className={`absolute w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-xl ${
            index % 2 === 0 ? 'border-2 border-yellow-300' : 'border-2 border-purple-400'
          }`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 1.5 + tech.delay,
            duration: 0.6,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ scale: 1.2, rotate: 360 }}
          style={{
            top: index % 2 === 0 ? '10%' : '70%',
            left: index % 2 === 0 ? '85%' : '5%',
          }}
        >
          {tech.icon}
        </motion.div>
      ))}
    </>
  )
}