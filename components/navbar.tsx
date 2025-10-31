'use client'

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Github, Linkedin, Mail, FileDown, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const components: { title: string; href: string; description: string; icon: string }[] = [
  {
    title: "Skills & Technologies",
    href: "#skills",
    description: "View my technical skills and expertise across various technologies.",
    icon: "⚡"
  },
  {
    title: "Projects Portfolio",
    href: "#projects",
    description: "Explore my featured projects and applications.",
    icon: "🚀"
  },
  {
    title: "Experience",
    href: "#experience",
    description: "Learn about my professional experience and internships.",
    icon: "💼"
  },
  {
    title: "Achievements",
    href: "#achievements",
    description: "See my certifications and accomplishments.",
    icon: "🏆"
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50" 
          : "bg-white/80 backdrop-blur-md border-b border-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-xl shadow-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Sabir Ali
              </span>
              <p className="text-xs text-gray-500 -mt-1">Full Stack Developer</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="/" 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-purple-50 text-gray-700 hover:text-purple-700 font-medium transition-all duration-200 rounded-xl"
                      )}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="#about" 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-purple-50 text-gray-700 hover:text-purple-700 font-medium transition-all duration-200 rounded-xl"
                      )}
                    >
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-purple-50 text-gray-700 hover:text-purple-700 font-medium data-[state=open]:bg-purple-50 data-[state=open]:text-purple-700 transition-all duration-200 rounded-xl">
                    Portfolio
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="rounded-2xl border-0 shadow-xl bg-white/95 backdrop-blur-xl p-4">
                    <ul className="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                          icon={component.icon}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      href="#contact" 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-purple-50 text-gray-700 hover:text-purple-700 font-medium transition-all duration-200 rounded-xl"
                      )}
                    >
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Social Links */}
            <div className="flex items-center space-x-2 ml-4 border-l border-gray-200 pl-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200"
                  asChild
                >
                  <a href="https://github.com/alisabir16767" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                  asChild
                >
                  <a href="https://linkedin.com/in/sabirali123

" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200"
                  asChild
                >
                  <a href="mailto:alisabir167167@gmail.com">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Resume Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl rounded-xl transition-all duration-200 group"
              >
                <a href="/ResumeWithExp.pdf" download className="flex items-center gap-2">
                  <FileDown className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[380px] border-0 bg-white/95 backdrop-blur-xl shadow-xl">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8 pt-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                        <Sparkles className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          Sabir Ali
                        </span>
                        <p className="text-xs text-gray-500">Full Stack Developer</p>
                      </div>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => setIsOpen(false)}
                        className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex-1 space-y-3">
                    <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
                      🏠 Home
                    </MobileNavLink>
                    <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>
                      👨‍💻 About
                    </MobileNavLink>
                    <MobileNavLink href="#skills" onClick={() => setIsOpen(false)}>
                      ⚡ Skills
                    </MobileNavLink>
                    <MobileNavLink href="#projects" onClick={() => setIsOpen(false)}>
                      🚀 Projects
                    </MobileNavLink>
                    <MobileNavLink href="#experience" onClick={() => setIsOpen(false)}>
                      💼 Experience
                    </MobileNavLink>
                    <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
                      📞 Contact
                    </MobileNavLink>
                  </nav>

                  {/* Footer */}
                  <div className="space-y-4 pt-8 border-t border-gray-200">
                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                      {[
                        { icon: <Github className="h-5 w-5" />, href: "https://github.com/alisabir16767", color: "hover:text-gray-700 hover:bg-gray-100" },
                        { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/sabirali123", color: "hover:text-blue-600 hover:bg-blue-50" },
                        { icon: <Mail className="h-5 w-5" />, href: "mailto:alisabir167167@gmail.com", color: "hover:text-red-500 hover:bg-red-50" }
                      ].map((social, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className={cn("text-gray-600 rounded-xl transition-all duration-200", social.color)}
                            asChild
                          >
                            <a href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                              {social.icon}
                            </a>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Resume Button */}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        asChild 
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg rounded-xl transition-all duration-200 group"
                      >
                        <a href="/resume.pdf" download className="flex items-center justify-center gap-2">
                          <FileDown className="h-4 w-4 group-hover:scale-110 transition-transform" />
                          Download Resume
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: string }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex items-start space-x-3 select-none rounded-xl p-4 leading-none no-underline outline-none transition-all duration-200 hover:bg-purple-50 hover:shadow-md border border-transparent hover:border-purple-100",
            "group cursor-pointer",
            className
          )}
          {...props}
        >
          <div className="text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-200">
            {icon}
          </div>
          <div className="space-y-1">
            <div className="text-sm font-semibold text-gray-800 group-hover:text-purple-700">
              {title}
            </div>
            <p className="text-sm leading-snug text-gray-600">
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

interface MobileNavLinkProps {
  href: string
  onClick: () => void
  children: React.ReactNode
}

function MobileNavLink({ href, onClick, children }: MobileNavLinkProps) {
  return (
    <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className="flex items-center space-x-3 py-3 px-4 text-lg font-medium text-gray-700 transition-all duration-200 rounded-xl hover:bg-purple-50 hover:text-purple-700"
        onClick={onClick}
      >
        <span>{children}</span>
      </Link>
    </motion.div>
  )
}