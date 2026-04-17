'use client'
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollUp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-brand text-white shadow-lg shadow-brand/30
                  hover:bg-brand-light hover:-translate-y-1 transition-all duration-300
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <ArrowUp size={18} />
    </button>
  )
}
