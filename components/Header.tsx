'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { personal } from '@/lib/data'

const NAV_LINKS = [
  { label: 'Home',      href: '#home'          },
  { label: 'About',     href: '#about'         },
  { label: 'Skills',    href: '#skills'        },
  { label: 'Services',  href: '#services'      },
  { label: 'Work',      href: '#work'          },
  { label: 'Contact',   href: '#contact'       },
]

export default function Header() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('#home')
  const { theme, setTheme }     = useTheme()
  const [mounted, setMounted]   = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setActive(href)
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 dark:bg-[#09100b]/90 backdrop-blur-md border-b border-zinc-200/60 dark:border-[#1c2e20]/60 shadow-sm'
        : 'bg-transparent'
    }`}>
      <nav className="container-custom flex items-center justify-between h-16 px-4 md:px-6">

        {/* Logo */}
        <button
          onClick={() => handleNav('#home')}
          className="text-lg font-black tracking-tight text-zinc-900 dark:text-white"
        >
          <span className="text-brand">M</span>Chichava
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`nav-link relative py-1 ${active === link.href ? 'text-brand' : ''}`}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-brand rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Theme toggle + mobile menu */}
        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-xl text-zinc-500 dark:text-zinc-400 hover:text-brand dark:hover:text-brand hover:bg-brand/10 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-brand/10 hover:text-brand transition-all"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-200 dark:border-[#1c2e20] bg-white dark:bg-[#0f1912] shadow-xl">
          <ul className="px-6 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    active === link.href
                      ? 'bg-brand/10 text-brand'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-brand hover:bg-brand/5'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2 pb-1">
              <a href={personal.cv} download className="btn-primary w-full justify-center text-sm">
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
