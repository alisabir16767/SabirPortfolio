'use client'

import { motion } from 'framer-motion'
import { Code, Cloud, Database, Terminal, Zap, Cpu } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Java", level: 90, color: "from-red-500 to-orange-500" },
        { name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-600" },
        { name: "C++", level: 85, color: "from-blue-500 to-purple-500" },
        { name: "MySQL", level: 88, color: "from-blue-400 to-cyan-500" },
        { name: "TypeScript", level: 92, color: "from-blue-600 to-blue-800" }
      ]
    },
    {
      title: "Frameworks & Technologies",
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        { name: "ReactJS", level: 94, color: "from-cyan-400 to-blue-500" },
        { name: "Next.js", level: 90, color: "from-gray-700 to-gray-900" },
        { name: "Node.js", level: 92, color: "from-green-500 to-green-700" },
        { name: "Express.js", level: 88, color: "from-gray-400 to-gray-600" },
        { name: "MongoDB", level: 85, color: "from-green-400 to-green-600" },
        { name: "Docker", level: 80, color: "from-blue-400 to-cyan-500" },
        { name: "Redis", level: 75, color: "from-red-400 to-red-600" }
      ]
    },
    {
      title: "Developer Tools",
      icon: <Terminal className="h-6 w-6" />,
      skills: [
        { name: "VS Code", level: 95, color: "from-blue-500 to-purple-600" },
        { name: "Postman", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "GitHub", level: 92, color: "from-gray-700 to-gray-900" },
        { name: "Vercel", level: 88, color: "from-gray-400 to-gray-600" },
        { name: "DataGrip", level: 80, color: "from-purple-500 to-pink-500" }
      ]
    },
    {
      title: "AWS Cloud Services",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "EC2", level: 85, color: "from-orange-400 to-orange-600" },
        { name: "S3", level: 88, color: "from-yellow-400 to-yellow-600" },
        { name: "Lambda", level: 82, color: "from-blue-400 to-blue-600" },
        { name: "RDS", level: 80, color: "from-green-400 to-green-600" },
        { name: "CloudFront", level: 78, color: "from-purple-400 to-purple-600" },
        { name: "IAM", level: 85, color: "from-red-400 to-red-600" }
      ]
    }
  ]

  const expertiseAreas = [
    {
      title: "Frontend Development",
      description: "Modern React applications with responsive design",
      icon: "🎨",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend Development",
      description: "Scalable server architecture and APIs",
      icon: "⚙️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Database Design",
      description: "Optimized data models and queries",
      icon: "🗄️",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud Infrastructure",
      description: "AWS deployment and management",
      icon: "☁️",
      color: "from-orange-500 to-yellow-500"
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
      
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
            <Zap className="h-10 w-10 text-white" />
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mastering the tools and technologies that power modern web applications. 
            Continuously learning and adapting to new challenges.
          </p>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-gradient-to-br ${area.color} p-1 rounded-2xl shadow-lg`}
            >
              <div className="bg-white rounded-xl p-6 text-center h-full hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-3">{area.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2"></div>
                  </div>
                </div>

                {/* Skills List with Progress Bars */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="group/skill"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700 group-hover/skill:text-purple-600 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg transform origin-left`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "RESTful APIs", "GraphQL", "WebSocket", "JWT", "OAuth", 
              "Microservices", "CI/CD", "Agile/Scrum", "Test-Driven Development",
              "Performance Optimization", "Security Best Practices", "Responsive Design"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-full text-gray-700 font-medium border border-gray-300 hover:border-purple-300 hover:shadow-md transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-6 rounded-2xl shadow-xl">
            <Database className="h-8 w-8" />
            <div>
              <p className="text-lg font-semibold">Interested in my technical capabilities?</p>
              <p className="text-purple-100">Let's discuss how I can contribute to your project</p>
            </div>
            <motion.a
              href="#contact"
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}