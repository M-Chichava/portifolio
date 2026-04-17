import Link from 'next/link'
import { Github, Linkedin, Instagram, MessageCircle } from 'lucide-react'
import { personal } from '@/lib/data'

const NAV = ['About', 'Skills', 'Services', 'Work', 'Contact']

const SOCIALS = [
  { icon: Github,        href: personal.github,    label: 'GitHub'    },
  { icon: Linkedin,      href: personal.linkedin,   label: 'LinkedIn'  },
  { icon: Instagram,     href: personal.instagram,  label: 'Instagram' },
  { icon: MessageCircle, href: personal.whatsapp,   label: 'WhatsApp'  },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-900 dark:bg-[#060d07] border-t border-zinc-800 dark:border-[#1c2e20]">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-lg font-black text-white tracking-tight">
              <span className="text-brand">M</span>Chichava
            </p>
            <p className="text-zinc-500 text-xs mt-1">FullStack & Mobile Developer</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-zinc-500 hover:text-brand text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
            <Link href="/privacy" className="text-zinc-500 hover:text-brand text-sm font-medium transition-colors">
              Privacy Policy
            </Link>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-xl text-zinc-500 hover:text-brand hover:bg-brand/10 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-zinc-800 dark:border-[#1c2e20] text-center">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Marcos Chichava · Maputo, Mozambique
          </p>
        </div>

      </div>
    </footer>
  )
}
