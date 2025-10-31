'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink, Github, ArrowRight, Users, Zap, TrendingUp, Play } from 'lucide-react'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "Wanderlust",
      subtitle: "Airbnb-like Booking Platform",
      description: "A distributed booking platform handling 1,000+ users with 100+ weekly bookings and <200ms API latency.",
      image: "/projects/wanderlust.jpg", // Add this image to public/projects/ folder
      fallbackColor: "from-purple-500 to-pink-500",
      technologies: ["MERN Stack", "AWS", "Passport.js", "MongoDB", "Redis", "Render"],
      achievements: [
        "Implemented secure authentication with Passport.js & cookies",
        "Deployed on Render with AWS S3 & CloudFront CDN",
        "Optimized MongoDB indexes, reducing query times by 40%",
        "Built 10+ RESTful APIs with comprehensive documentation"
      ],
      stats: [
        { icon: <Users className="h-4 w-4" />, value: "1,000+", label: "Users" },
        { icon: <TrendingUp className="h-4 w-4" />, value: "100+", label: "Weekly Bookings" },
        { icon: <Zap className="h-4 w-4" />, value: "<200ms", label: "API Latency" }
      ],
      githubLink: "https://github.com/alisabir16767/WanderLust",
      liveLink: "https://wanderlust-sf9v.onrender.com/",
      category: "Full Stack"
    },
    {
      title: "FaceCall",
      subtitle: "Video Conferencing App",
      description: "Real-time video conferencing platform supporting 50+ concurrent users with audio, video, and chat features.",
      image: "/projects/facecall.jpg", // Add this image to public/projects/ folder
      fallbackColor: "from-blue-500 to-cyan-500",
      technologies: ["MERN", "WebRTC", "Socket.io", "JWT", "Material UI", "Node.js"],
      achievements: [
        "Implemented secure JWT-based authentication & authorization",
        "Created RESTful APIs for room management and user sessions",
        "Optimized WebRTC for low-latency, stable video communication",
        "Designed fully responsive UI with Material UI components"
      ],
      stats: [
        { icon: <Users className="h-4 w-4" />, value: "50+", label: "Concurrent Users" },
        { icon: <Zap className="h-4 w-4" />, value: "Real-time", label: "Communication" },
        { icon: <TrendingUp className="h-4 w-4" />, value: "HD", label: "Video Quality" }
      ],
      githubLink: "https://github.com/alisabir16767/VIDEOCALL",
      liveLink: "https://videocall-frontend-3zxi.onrender.com/",
      category: "Real-time App"
    },
    {
      title: "UrbanMarket",
      subtitle: "E-commerce Marketplace",
      description: "Full-stack marketplace platform serving 200+ users with secure payment processing and inventory management.",
      image: "/projects/urbanmarket.jpg", // Add this image to public/projects/ folder
      fallbackColor: "from-green-500 to-emerald-500",
      technologies: ["MERN", "Next.js", "Redux", "MongoDB Atlas", "Vercel", "Stripe"],
      achievements: [
        "Built 15+ RESTful APIs with comprehensive error handling",
        "Optimized MongoDB queries, improving performance by 15%",
        "Integrated Redux for efficient global state management",
        "Secured 1,000+ transactions with robust payment processing"
      ],
      stats: [
        { icon: <Users className="h-4 w-4" />, value: "200+", label: "Active Users" },
        { icon: <TrendingUp className="h-4 w-4" />, value: "1,000+", label: "Transactions" },
        { icon: <Zap className="h-4 w-4" />, value: "15%", label: "Performance Gain" }
      ],
      githubLink: "https://github.com/alisabir16767/BazarConnect",
      liveLink: "https://bazar-connect.vercel.app/",
      category: "E-commerce"
    }
  ]

  // Function to handle image error and show fallback
  const ProjectImage = ({ project, index }: { project: any; index: number }) => {
    return (
      <div className="aspect-video bg-gradient-to-br relative overflow-hidden rounded-2xl shadow-2xl">
        {/* Try to load actual image */}
        <div className="w-full h-full relative">
          <Image
            src={project.image}
            alt={`${project.title} - ${project.subtitle}`}
            fill
            className="object-cover"
            onError={(e) => {
              // If image fails to load, show fallback
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
          
          {/* Fallback UI - shown if image doesn't exist */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.fallbackColor} flex items-center justify-center text-white`}>
            <div className="text-center p-8">
              <div className="text-6xl mb-4">
                {index === 0 && "🏠"}
                {index === 1 && "📹"}
                {index === 2 && "🛒"}
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-white/80 mb-4">{project.subtitle}</p>
              <div className="flex justify-center gap-2 flex-wrap">
                {project.technologies.slice(0, 3).map((tech: string) => (
                  <span key={tech} className="bg-white/20 px-2 py-1 rounded text-xs backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Overlay with Action Buttons */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex gap-4">
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-1"
            >
              <Play className="h-5 w-5" />
              <span className="text-sm font-medium">Demo</span>
            </motion.a>
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg border border-white/30">
            {project.category}
          </span>
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-6 shadow-lg"
          >
            <TrendingUp className="h-10 w-10 text-white" />
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing my expertise in building scalable, full-stack applications 
            that solve real-world problems with modern technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="flex-1 relative group"
              >
                <ProjectImage project={project} index={index} />
              </motion.div>

              {/* Project Content */}
              <div className="flex-1">
                <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    {/* Project Header */}
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xl text-purple-600 font-semibold mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.stats.map((stat, statIndex) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: (index * 0.2) + (statIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="text-center p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-purple-200 transition-colors"
                        >
                          <div className="flex justify-center text-purple-600 mb-1">
                            {stat.icon}
                          </div>
                          <div className="font-bold text-gray-800 text-lg">{stat.value}</div>
                          <div className="text-xs text-gray-600">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (index * 0.2) + (techIndex * 0.05) }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-200 hover:border-purple-300 transition-colors"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievement}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.2) + (achievementIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-gray-600 hover:text-gray-800 transition-colors"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: (index * 0.2) + 0.5 }}
                      viewport={{ once: true }}
                      className="flex gap-4 mt-8"
                    >
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex-1 justify-center group"
                      >
                        <Play className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        Live Demo
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-purple-400 hover:text-purple-600 transition-all duration-300 flex-1 justify-center group"
                      >
                        <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        Source Code
                      </motion.a>
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold mb-2">Want to see more projects?</h3>
              <p className="text-purple-100">Explore my GitHub for complete source code and additional projects</p>
            </div>
            <motion.a
              href="https://github.com/alisabir16767"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}