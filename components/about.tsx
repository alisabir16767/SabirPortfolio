'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap, BookOpen, Award, Target } from 'lucide-react'

export default function About() {
  const education = [
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "Chandigarh University",
      details: "CGPA: 8.19",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "Intermediate of Science",
      institution: "Co-operative Inter College",
      details: "Percentage: 83.2%",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      degree: "High School (10th)",
      institution: "Co-operative High School",
      details: "Percentage: 67.8%",
      icon: <Award className="h-6 w-6" />
    }
  ]

  const coursework = [
    "Data Structures & Algorithms",
    "Operating Systems", 
    "System Design",
    "Database Management System (DBMS)",
    "Team Skills",
    "Web Development",
    "Object-Oriented Programming",
    "Computer Networks",
    "Software Engineering",
    "Cloud Computing"
  ]

  const stats = [
    { number: "1100+", label: "DSA Problems Solved" },
    { number: "4 Star", label: "GFG Rating" },
    { number: "2+", label: "Years Experience" },
    { number: "15+", label: "Projects Completed" }
  ]

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6"
          >
            <Target className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 text-gradient bg-gradient-to-r from-purple-600 to-blue-600">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A passionate <span className="text-purple-600 font-semibold">Full Stack Developer</span> with expertise in 
            modern web technologies, cloud platforms, and building scalable applications that solve real-world problems.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-100 rounded-lg">
                <GraduationCap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                          {edu.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                            {edu.degree}
                          </h4>
                          <p className="text-gray-600 mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                            {edu.institution}
                          </p>
                          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 px-4 py-2 rounded-full">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-purple-700 font-semibold">{edu.details}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coursework & Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Core Competencies</h3>
            </div>

            {/* Coursework Grid */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                Academic Coursework
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {coursework.map((course, index) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-sm">{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-4">My Approach</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Clean, maintainable code with best practices</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Performance optimization and scalability focus</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">User-centric design and development</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg">
            <span className="text-lg font-semibold">Ready to build something amazing?</span>
            <motion.a
              href="#contact"
              className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}