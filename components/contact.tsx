'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, Send, User, MailIcon } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppClick = () => {
    const message = "Hello Sabir! I'm interested in discussing a project with you."
    const phoneNumber = "917464082141"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background with Light Black Shades */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-800/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gray-800/50 backdrop-blur-sm rounded-2xl mb-6 border border-gray-700"
          >
            <MessageCircle className="h-10 w-10 text-gray-200" />
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 text-gray-100">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Whether you have a project in mind or just want to chat about tech, 
            I'd love to hear from you. Let's create something amazing together!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gray-400 rounded-full"></div>
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <motion.div 
                    className="flex items-center space-x-4 group cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-3 bg-gray-700/50 rounded-xl group-hover:bg-gray-600/50 transition-colors">
                      <Mail className="text-gray-300" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-200">Email</p>
                      <a 
                        href="mailto:alisabir167167@gmail.com" 
                        className="text-gray-400 hover:text-gray-200 transition-colors group-hover:underline"
                      >
                        alisabir167167@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  {/* Phone & WhatsApp */}
                  <motion.div 
                    className="flex items-center space-x-4 group cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    onClick={handleWhatsAppClick}
                  >
                    <div className="p-3 bg-gray-700/50 rounded-xl group-hover:bg-gray-600/50 transition-colors">
                      <Phone className="text-gray-300" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-200">Phone / WhatsApp</p>
                      <div className="text-gray-400 hover:text-gray-200 transition-colors group-hover:underline cursor-pointer">
                        +91-7464082141
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Click to chat on WhatsApp</p>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div 
                    className="flex items-center space-x-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-3 bg-gray-700/50 rounded-xl group-hover:bg-gray-600/50 transition-colors">
                      <MapPin className="text-gray-300" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-200">Location</p>
                      <p className="text-gray-400">Mohali, Punjab, India</p>
                      <p className="text-xs text-gray-500 mt-1">Available for remote work worldwide</p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <p className="font-semibold text-gray-200 mb-4">Follow Me</p>
                  <div className="flex space-x-4">
                    {[
                      { icon: <Github size={20} />, href: "https://github.com" },
                      { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-700/50 rounded-xl text-gray-400 backdrop-blur-sm transition-all duration-200 hover:text-gray-200 hover:scale-110 border border-gray-600 hover:border-gray-500"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gray-700/50 to-gray-600/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse"></div>
                  <div>
                    <h4 className="font-bold text-gray-200">Available for Projects</h4>
                    <p className="text-gray-400 text-sm">Currently accepting new projects and opportunities</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">Send me a message</h3>
                <p className="text-gray-400 mb-6">I'll get back to you within 24 hours</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                      <User className="h-4 w-4" />
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/30 border border-gray-600 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-gray-700/50 transition-all duration-200 backdrop-blur-sm"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                      <MailIcon className="h-4 w-4" />
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/30 border border-gray-600 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-gray-700/50 transition-all duration-200 backdrop-blur-sm"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                      <MessageCircle className="h-4 w-4" />
                      Your Message
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/30 border border-gray-600 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-gray-700/50 transition-all duration-200 backdrop-blur-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button 
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-gray-700/50 border border-gray-600 rounded-xl text-gray-300 text-center"
                    >
                      ✅ Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-gray-700/50 border border-gray-600 rounded-xl text-gray-300 text-center"
                    >
                      ❌ Failed to send message. Please try again or contact me directly.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gray-800/40 backdrop-blur-sm text-gray-200 px-8 py-8 rounded-2xl shadow-xl max-w-4xl mx-auto border border-gray-700">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold mb-2">Prefer other methods?</h3>
              <p className="text-gray-400">Connect with me on professional networks</p>
            </div>
            <div className="flex gap-4">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-700/50 text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-600/50 transition-colors whitespace-nowrap flex items-center gap-2 border border-gray-600"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </motion.a>
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-700/50 text-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-600/50 transition-colors whitespace-nowrap flex items-center gap-2 border border-gray-600"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}