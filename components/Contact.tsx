'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { personal } from '@/lib/data'
import { useLang } from '@/components/LanguageProvider'

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
]

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const form      = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const { t } = useLang()

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
          <p className="section-subtitle">{t.contact.subtitle}</p>
          <h2 className="section-title">{t.contact.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{t.contact.talk}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                {t.contact.intro}
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
                  {t.contact.writeMe}
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
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">{t.contact.send}</h3>
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">{t.contact.name}</label>
                  <input
                    type="text" name="name" required placeholder={t.contact.namePh}
                    className="w-full bg-zinc-50 dark:bg-[#09100b] border border-zinc-200 dark:border-[#1c2e20]
                               rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400
                               focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">{t.contact.email}</label>
                  <input
                    type="email" name="email" required placeholder={t.contact.emailPh}
                    className="w-full bg-zinc-50 dark:bg-[#09100b] border border-zinc-200 dark:border-[#1c2e20]
                               rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400
                               focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">{t.contact.message}</label>
                  <textarea
                    name="project" required placeholder={t.contact.messagePh}
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
                      {t.contact.sending}
                    </span>
                  ) : (
                    <>
                      <Send size={16} />
                      {t.contact.submit}
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="flex items-center gap-2 text-brand text-sm font-medium bg-brand/10 border border-brand/20 rounded-xl px-4 py-3">
                    <CheckCircle size={16} />
                    {t.contact.success}
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 text-sm font-medium bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    <AlertCircle size={16} />
                    {t.contact.error}
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
