'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    setIsVisible(true)
    init3DBackground()
  }, [])

  const init3DBackground = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl')
    if (!gl) {
      console.warn('WebGL not supported, falling back to 2D background')
      return
    }

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Vertex shader
    const vsSource = `
      attribute vec4 aVertexPosition;
      uniform mat4 uModelViewMatrix;
      uniform mat4 uProjectionMatrix;
      varying float vDepth;
      
      void main() {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
        gl_PointSize = 2.0;
        vDepth = aVertexPosition.z;
      }
    `

    // Fragment shader
    const fsSource = `
      precision mediump float;
      varying float vDepth;
      
      void main() {
        vec3 color1 = vec3(0.1, 0.0, 0.3);
        vec3 color2 = vec3(0.4, 0.2, 0.6);
        vec3 color3 = vec3(0.8, 0.6, 1.0);
        vec3 color4 = vec3(1.0, 0.8, 0.2);
        
        float factor = (vDepth + 1.0) / 2.0;
        vec3 color;
        
        if (factor < 0.3) {
          color = mix(color1, color2, factor / 0.3);
        } else if (factor < 0.6) {
          color = mix(color2, color3, (factor - 0.3) / 0.3);
        } else {
          color = mix(color3, color4, (factor - 0.6) / 0.4);
        }
        
        gl_FragColor = vec4(color, 0.8);
      }
    `

    // Compile shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER)
    if (!vertexShader) return
    gl.shaderSource(vertexShader, vsSource)
    gl.compileShader(vertexShader)

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
    if (!fragmentShader) return
    gl.shaderSource(fragmentShader, fsSource)
    gl.compileShader(fragmentShader)

    const shaderProgram = gl.createProgram()
    if (!shaderProgram) return
    gl.attachShader(shaderProgram, vertexShader)
    gl.attachShader(shaderProgram, fragmentShader)
    gl.linkProgram(shaderProgram)
    gl.useProgram(shaderProgram)

    // Create 3D particles
    const particles = []
    const particleCount = 1500

    for (let i = 0; i < particleCount; i++) {
      particles.push(
        Math.random() * 4 - 2, // x
        Math.random() * 4 - 2, // y
        Math.random() * 4 - 2  // z
      )
    }

    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(particles), gl.STATIC_DRAW)

    const positionAttributeLocation = gl.getAttribLocation(shaderProgram, "aVertexPosition")
    gl.enableVertexAttribArray(positionAttributeLocation)
    gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0)

    // Set up perspective
    const projectionMatrix = new Float32Array(16)
    const fieldOfView = 45 * Math.PI / 180
    const aspect = canvas.clientWidth / canvas.clientHeight
    const zNear = 0.1
    const zFar = 100.0

    // Perspective matrix
    const f = 1.0 / Math.tan(fieldOfView / 2)
    projectionMatrix[0] = f / aspect
    projectionMatrix[5] = f
    projectionMatrix[10] = (zFar + zNear) / (zNear - zFar)
    projectionMatrix[11] = -1
    projectionMatrix[14] = (2 * zFar * zNear) / (zNear - zFar)

    const projectionMatrixUniform = gl.getUniformLocation(shaderProgram, "uProjectionMatrix")
    const modelViewMatrixUniform = gl.getUniformLocation(shaderProgram, "uModelViewMatrix")

    let rotation = 0
    let time = 0

    const render = () => {
      if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) return

      time += 0.01
      rotation += 0.002

      gl.clearColor(0.05, 0.03, 0.1, 1.0)
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
      gl.enable(gl.DEPTH_TEST)

      // Model-view matrix with rotation and movement
      const mvMatrix = new Float32Array([
        Math.cos(rotation), 0, Math.sin(rotation), 0,
        0, 1, 0, 0,
        -Math.sin(rotation), 0, Math.cos(rotation), 0,
        Math.sin(time * 0.5) * 0.2, Math.cos(time * 0.3) * 0.1, -5, 1
      ])

      gl.uniformMatrix4fv(projectionMatrixUniform, false, projectionMatrix)
      gl.uniformMatrix4fv(modelViewMatrixUniform, false, mvMatrix)

      gl.drawArrays(gl.POINTS, 0, particleCount / 3)
      requestAnimationFrame(render)
    }

    render()

    // Cleanup function
    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-white overflow-hidden relative">
      {/* 3D Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)' 
        }}
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-purple-900/40" />
      
      <div className="container mx-auto px-6 relative z-10">
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
                href="https://github.com/alisabir16767" 
                className="hover:text-yellow-300 transition-colors transform hover:scale-110 backdrop-blur-sm bg-white/10 p-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={28} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/sabirali123/" 
                className="hover:text-yellow-300 transition-colors transform hover:scale-110 backdrop-blur-sm bg-white/10 p-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a 
                href="mailto:alisabir167167@gmail.com" 
                className="hover:text-yellow-300 transition-colors transform hover:scale-110 backdrop-blur-sm bg-white/10 p-2 rounded-full"
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
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg backdrop-blur-sm"
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
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors backdrop-blur-sm"
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
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-600 rounded-full blur-3xl opacity-30"
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
                className="relative w-full h-full bg-gradient-to-br from-purple-500 to-blue-600 rounded-full p-2 shadow-2xl backdrop-blur-sm"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Profile Image Placeholder */}
                <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden border-4 border-white backdrop-blur-sm">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <p className="text-sm font-medium">Your Photo Here</p>
                  </div>
                </div>

                <FloatingTechIcons />
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white text-purple-600 px-4 py-2 rounded-full shadow-lg font-semibold backdrop-blur-sm"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  2+ Years Experience
                </span>
              </motion.div>

              {/* Available for Work Badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-yellow-400 text-purple-900 px-4 py-2 rounded-full shadow-lg font-semibold backdrop-blur-sm"
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
            className="flex flex-col items-center text-gray-300 backdrop-blur-sm bg-white/10 rounded-full p-4"
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
          className={`absolute w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-xl backdrop-blur-sm ${
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
