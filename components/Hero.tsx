'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, MessageCircle, Download, ArrowRight } from 'lucide-react'
import { personal } from '@/lib/data'

function useTyping(words: string[], speed = 90, deleteSpeed = 50, pause = 2200) {
  const [text, setText]         = useState('')
  const [wordIdx, setWordIdx]   = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    const delay = deleting ? deleteSpeed : speed

    const t = setTimeout(() => {
      if (!deleting) {
        if (text.length < word.length) {
          setText(word.slice(0, text.length + 1))
        } else {
          setTimeout(() => setDeleting(true), pause)
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1))
        } else {
          setDeleting(false)
          setWordIdx((i) => (i + 1) % words.length)
        }
      }
    }, delay)

    return () => clearTimeout(t)
  }, [text, deleting, wordIdx, words, speed, deleteSpeed, pause])

  return text
}

const SOCIALS = [
  { icon: Github,         href: 'https://github.com/M-Chichava',                    label: 'GitHub'    },
  { icon: Linkedin,       href: 'https://linkedin.com/in/marcos-chichava-bs321631', label: 'LinkedIn'  },
  { icon: Instagram,      href: 'https://www.instagram.com/mfchichava/',       label: 'Instagram' },
  { icon: MessageCircle,  href: personal.whatsapp,                                  label: 'WhatsApp'  },
]

const fade = (delay = 0) => ({
  initial:   { opacity: 0, y: 24 },
  animate:   { opacity: 1, y: 0  },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

export default function Hero() {
  const typed = useTyping(personal.roles)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-zinc-50 dark:bg-[#09100b] overflow-hidden"
    >
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-hero-glow-light dark:bg-hero-glow pointer-events-none" />
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#07ac4b 1px, transparent 1px), linear-gradient(to right, #07ac4b 1px, transparent 1px)', backgroundSize: '48px 48px' }}
      />

      <div className="container-custom section px-4 md:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text ── */}
          <div className="order-2 md:order-1 space-y-6">

            <motion.div {...fade(0.1)} className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              Available for projects
            </motion.div>

            <motion.div {...fade(0.2)}>
              <p className="text-zinc-500 dark:text-zinc-400 font-medium mb-1">Hello, I&apos;m 👋</p>
              <h1 className="text-5xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tight leading-none">
                Marcos<br />
                <span className="text-brand">Chichava</span>
              </h1>
            </motion.div>

            <motion.div {...fade(0.3)} className="flex items-center gap-2 text-xl md:text-2xl font-bold text-zinc-700 dark:text-zinc-200 h-9">
              <span>{typed}</span>
              <span className="w-0.5 h-6 bg-brand animate-blink" />
            </motion.div>

            <motion.p {...fade(0.4)} className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
              {personal.bio}
            </motion.p>

            <motion.div {...fade(0.5)} className="flex flex-wrap gap-3">
              <a href={personal.cv} download className="btn-primary">
                <Download size={16} />
                Download CV
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
                <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div {...fade(0.6)} className="flex items-center gap-3 pt-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl border border-zinc-200 dark:border-[#1c2e20] text-zinc-500 dark:text-zinc-400
                             hover:border-brand hover:text-brand hover:bg-brand/5 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative animate-float">
              {/* Glow ring */}
              <div className="absolute -inset-3 rounded-full bg-brand/20 blur-2xl" />
              {/* Outer ring */}
              <div className="absolute -inset-1.5 rounded-full border-2 border-brand/30" />
              {/* Inner ring */}
              <div className="absolute -inset-0.5 rounded-full border border-brand/50" />
              {/* Photo */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-2 ring-brand/40">
                <Image
                  src="/portifolio/assets/DSC_4848.JPG"
                  alt="Marcos Chichava"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Location badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5
                              bg-white dark:bg-[#0f1912] border border-zinc-200 dark:border-[#1c2e20]
                              shadow-lg px-4 py-2 rounded-full whitespace-nowrap">
                <span className="text-xs">📍</span>
                <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">Maputo, Mozambique</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
