import { useRef, useEffect } from 'react'
import Navbar from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  // Premium Cursor with Hover Effects
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + 'px'
        ringRef.current.style.top = e.clientY + 'px'
      }
    }

    const onEnter = () => {
      if (dotRef.current) dotRef.current.classList.add('expanded')
      if (ringRef.current) ringRef.current.classList.add('expanded')
    }

    const onLeave = () => {
      if (dotRef.current) dotRef.current.classList.remove('expanded')
      if (ringRef.current) ringRef.current.classList.remove('expanded')
    }

    const updateHoverElements = () => {
      const hoverElements = document.querySelectorAll('a, button, input, textarea, [data-hover], .cursor-pointer')
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    document.addEventListener('mousemove', onMove)
    updateHoverElements()

    // Watch for dynamic content
    const observer = new MutationObserver(() => {
      updateHoverElements()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      observer.disconnect()
    }
  }, [])

  // Background Particles
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = document.createElement('div')
      particlesContainer.className = 'particles'
      
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.animationDelay = Math.random() * 20 + 's'
        particle.style.animationDuration = (15 + Math.random() * 10) + 's'
        particlesContainer.appendChild(particle)
      }
      
      document.body.appendChild(particlesContainer)
      return particlesContainer
    }

    const particlesContainer = createParticles()
    
    return () => {
      if (particlesContainer) {
        document.body.removeChild(particlesContainer)
      }
    }
  }, [])

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#080a0f' }}>
      {/* Premium Custom Cursor */}
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />

      {/* Premium Navbar */}
      <Navbar />
      
      {/* Main Content with Proper Spacing */}
      <main className="relative z-10 pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      
      {/* Premium Footer */}
      <Footer />
    </div>
  );
}

export default App;
