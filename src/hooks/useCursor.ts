import { useEffect, useRef } from 'react'

export function useCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse   = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })
  const raf     = useRef<number>()

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      if (ringRef.current) { 
        ringRef.current.style.width = '52px'; 
        ringRef.current.style.height = '52px';
        ringRef.current.style.borderColor = 'rgba(201,168,76,0.9)';
      }
      if (dotRef.current) {
        dotRef.current.style.width = '12px';
        dotRef.current.style.height = '12px';
        dotRef.current.style.background = '#fff';
      }
    }

    const onLeave = () => {
      if (ringRef.current) { 
        ringRef.current.style.width = '36px'; 
        ringRef.current.style.height = '36px';
        ringRef.current.style.borderColor = 'rgba(201,168,76,0.55)';
      }
      if (dotRef.current) {
        dotRef.current.style.width = '8px';
        dotRef.current.style.height = '8px';
        dotRef.current.style.background = '#c9a84c';
      }
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

    raf.current = requestAnimationFrame(animate)
    return () => {
      document.removeEventListener('mousemove', onMove)
      if (raf.current) cancelAnimationFrame(raf.current)
      observer.disconnect()
    }
  }, [])

  return { dotRef, ringRef }
}
