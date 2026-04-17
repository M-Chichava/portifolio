import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Moz Net Salary',
  description: 'Privacy policy for the Moz Net Salary mobile application.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-[#09100b] pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-brand text-sm font-semibold mb-8 hover:underline">
            ← Back to Portfolio
          </Link>
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            Moz Net Salary
          </div>
          <h1 className="text-4xl font-black text-zinc-900 dark:text-white tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Last updated: April 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Overview</h2>
            <p>
              Moz Net Salary (&quot;the App&quot;) is a salary calculator for Mozambican workers developed by Marcos Chichava.
              This Privacy Policy explains how the App handles information. In summary: <strong className="text-zinc-900 dark:text-white">the App collects no personal data.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">1. Data Collection</h2>
            <p>
              The App does <strong className="text-zinc-900 dark:text-white">not collect, transmit, or share any personal data</strong>.
              All information you enter (salary values, settings, PIN) is stored exclusively on your device using the operating system&apos;s
              secure local storage. It never leaves your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">2. Data Storage</h2>
            <p>
              The App uses device-local secure storage (Expo SecureStore) exclusively for:
            </p>
            <ul className="list-none space-y-2 mt-3">
              {[
                'Your app settings (language, theme, currency display)',
                'PIN lock configuration (stored as a secure hash)',
                'Last calculated salary values (for the lock screen preview)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              None of this information is accessible to the developer, third parties, or any server.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">3. Internet Access</h2>
            <p>
              The App does <strong className="text-zinc-900 dark:text-white">not require an internet connection</strong> and makes no network
              requests. All calculations are performed locally using embedded tax rules from Mozambican legislation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">4. Third-Party Services</h2>
            <p>
              The App does not integrate any third-party analytics, advertising, tracking, or data-collection services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">5. Children&apos;s Privacy</h2>
            <p>
              The App does not collect any data from anyone, including children under the age of 13.
              It is a general-purpose utility application safe for all ages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">6. Changes to This Policy</h2>
            <p>
              If this Privacy Policy changes, the updated version will be published at this URL
              with an updated date. Any changes will maintain the same core principle: your data stays on your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">7. Contact</h2>
            <p>
              For questions about this Privacy Policy or the App, please contact:
            </p>
            <div className="mt-3 p-4 bg-brand/5 border border-brand/15 rounded-xl">
              <p className="font-semibold text-zinc-900 dark:text-white">Marcos Chichava</p>
              <a href="mailto:chichavapro@gmail.com" className="text-brand hover:underline text-sm">
                chichavapro@gmail.com
              </a>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
