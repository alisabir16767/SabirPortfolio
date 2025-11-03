'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Briefcase, Award, Calendar, MapPin, Rocket, Target, TrendingUp, Code } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      company: "Moment of Inertia",
      role: "Full Stack Developer (Remote)",
      period: "2025 - Present",
      location: "Remote",
      type: "Current",
      icon: <Rocket className="h-5 w-5" />,
      achievements: [
        "Developing and maintaining full-stack applications using modern web technologies",
        "Implementing responsive UI components and optimizing user experience",
        "Building RESTful APIs and integrating third-party services",
        "Collaborating with cross-functional teams in an agile environment"
      ],
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "GraphQL"],
      color: "from-purple-500 to-pink-500"
    },
    {
      company: "SmallBus",
      role: "Backend Developer Intern",
      period: "sept 2025 - Dec 2025",
      location: "Remote",
      type: "Internship",
      icon: <Code className="h-5 w-5" />,
      achievements: [
        "Built and maintained scalable backend services with Node.js, Express.js, and MongoDB",
        "Implemented secure authentication & authorization systems for user management",
        "Integrated multiple APIs for business operations, improving data flow efficiency by 30%",
        "Collaborated in agile development cycles with weekly sprints and code reviews"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "Prenagati Technology",
      role: "MERN Stack Developer Intern",
      period: "May 2024 - July 2024",
      location: "Remote",
      type: "Internship",
      icon: <Target className="h-5 w-5" />,
      achievements: [
        "Optimized backend services and database queries, improving API throughput by 25%",
        "Secured 1,000+ user accounts with JWT and Passport.js authentication systems",
        "Developed & tested 15+ RESTful APIs with 100% test coverage and comprehensive documentation",
        "Implemented responsive frontend components using React and modern CSS frameworks"
      ],
      technologies: ["MERN Stack", "JWT", "Passport.js", "REST APIs", "MongoDB"],
      color: "from-green-500 to-emerald-500"
    }
  ]

  const achievements = [
    {
      title: "DSA Mastery",
      description: "Solved 1100+ DSA problems across multiple platforms",
      icon: "🎯",
      metric: "1100+",
      unit: "Problems",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "GFG Competitive Programming",
      description: "Achieved 4-star rating with 1800+ contest rating",
      icon: "⭐",
      metric: "1800+",
      unit: "Rating",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "MERN Stack Certification",
      description: "Certified MERN Stack Developer from Coursera",
      icon: "📜",
      metric: "Professional",
      unit: "Certification",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Yale University Course",
      description: "Completed Financial Markets course from Yale University",
      icon: "🎓",
      metric: "Yale",
      unit: "University",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Performance Optimization",
      description: "Applied optimization techniques for high-scale computing",
      icon: "⚡",
      metric: "25%",
      unit: "Performance Gain",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "API Development",
      description: "Built 30+ RESTful APIs with comprehensive documentation",
      icon: "🔗",
      metric: "30+",
      unit: "APIs Built",
      color: "from-cyan-500 to-blue-500"
    }
  ]

  const skillsProgress = [
    { name: "Full Stack Development", level: 90 },
    { name: "Backend Architecture", level: 85 },
    { name: "Database Design", level: 80 },
    { name: "Cloud Deployment", level: 75 },
    { name: "Problem Solving", level: 95 },
    { name: "Team Collaboration", level: 88 }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
      
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
            <Briefcase className="h-10 w-10 text-white" />
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My journey through professional roles, internships, and personal accomplishments 
            that shaped my development career.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 bg-purple-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Professional Journey</h3>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="relative"
                >
                  {/* Current Role Highlight */}
                  {exp.type === "Current" && (
                    <div className="absolute -top-3 -left-3 z-10">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                        🚀 Current Role
                      </span>
                    </div>
                  )}

                  <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 bg-gradient-to-r ${exp.color} rounded-xl text-white`}>
                            {exp.icon}
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-800">{exp.role}</h4>
                            <p className="text-lg text-purple-600 font-semibold">{exp.company}</p>
                          </div>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          exp.type === "Current" 
                            ? "bg-green-100 text-green-700" 
                            : "bg-blue-100 text-blue-700"
                        }`}>
                          {exp.type}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (index * 0.2) + (techIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index * 0.2) + (i * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-gray-600"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements & Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 bg-blue-100 rounded-lg">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800">Achievements & Skills</h3>
            </motion.div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`bg-gradient-to-br ${achievement.color} p-1 rounded-2xl shadow-lg`}
                >
                  <div className="bg-white rounded-xl p-4 text-center h-full">
                    <div className="text-2xl mb-2">{achievement.icon}</div>
                    <div className="font-bold text-gray-800 text-lg mb-1">{achievement.metric}</div>
                    <div className="text-xs text-gray-600 mb-1">{achievement.unit}</div>
                    <h4 className="font-semibold text-gray-700 text-sm mb-1">{achievement.title}</h4>
                    <p className="text-xs text-gray-500">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Progress */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">Core Competencies</h4>
              <div className="space-y-4">
                {skillsProgress.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
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
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg transform origin-left"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to work together?</h3>
              <p className="text-purple-100">Let's discuss how I can contribute to your next project</p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap flex items-center gap-2"
            >
              <Briefcase className="h-5 w-5" />
              Start Conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}