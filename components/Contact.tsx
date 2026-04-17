'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { personal } from '@/lib/data'

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: 'bg-blue-500/10 text-blue-500 dark:text-blue-400',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: personal.phone,
    href: personal.whatsapp,
    color: 'bg-brand/10 text-brand',
  },
  {
    icon: MessageCircle,
    label: 'Messenger',
    value: 'Marcos Chichava',
    href: personal.messenger,
    color: 'bg-violet-500/10 text-violet-500 dark:text-violet-400',
  },
]

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const form      = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return
    setStatus('sending')
    try {
      await emailjs.sendForm(
        'service_m8e3vwd',
        'template_l4iw15c',
        form.current,
        'Zuse4O7usJCRA_mxj',
      )
      setStatus('success')
      form.current.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="section bg-white dark:bg-[#0f1912]">
      <div className="container-custom px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle">Get in touch</p>
          <h2 className="section-title">Contact Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Let&apos;s talk</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                Have a project in mind or want to collaborate? I&apos;m always open to new opportunities.
                Reach out via any channel below.
              </p>
            </div>

            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center gap-4 p-4 hover:border-brand/40 hover:-translate-y-0.5 group"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">{label}</p>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 mt-0.5">{value}</p>
                </div>
                <span className="ml-auto text-zinc-300 dark:text-zinc-600 group-hover:text-brand transition-colors text-xs font-semibold">
                  Write me →
                </span>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="card p-6">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">Send a message</h3>
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Name</label>
                  <input
                    type="text" name="name" required placeholder="Your name"
                    className="w-full bg-zinc-50 dark:bg-[#09100b] border border-zinc-200 dark:border-[#1c2e20]
                               rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400
                               focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Email</label>
                  <input
                    type="email" name="email" required placeholder="your@email.com"
                    className="w-full bg-zinc-50 dark:bg-[#09100b] border border-zinc-200 dark:border-[#1c2e20]
                               rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400
                               focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Message</label>
                  <textarea
                    name="project" required placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full bg-zinc-50 dark:bg-[#09100b] border border-zinc-200 dark:border-[#1c2e20]
                               rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400
                               focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="flex items-center gap-2 text-brand text-sm font-medium bg-brand/10 border border-brand/20 rounded-xl px-4 py-3">
                    <CheckCircle size={16} />
                    Message sent successfully!
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 text-sm font-medium bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    <AlertCircle size={16} />
                    Failed to send. Try emailing directly.
                  </div>
                )}

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
