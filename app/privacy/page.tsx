import Link from 'next/link'

import { FooterSection } from '@/components/sections/footer-section';

export const metadata = {
  title: 'Privacy Policy – 6ystems',
  description: 'How 6ystems collects, uses, and protects your data.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-20">

        {/* Back */}
        <Link
          href="/systems-page"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors mb-10"
        >
          ← Back to Systems
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">Effective date: March 1, 2025</p>

        <div className="space-y-10 text-gray-600 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you create an account, fill
              out a form, or communicate with us. This may include your name, email address,
              company name, and any other information you choose to provide.
            </p>
            <p className="mt-3">
              We also automatically collect certain technical information when you visit our
              platform, such as your IP address, browser type, operating system, referring URLs,
              and pages viewed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyse usage trends to improve user experience</li>
              <li>Detect and prevent fraudulent transactions and other illegal activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">3. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may
              share your information with trusted service providers who assist us in operating our
              platform, conducting our business, or servicing you, as long as those parties agree
              to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">4. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to fulfil the purposes
              outlined in this policy, unless a longer retention period is required or permitted
              by law. When your data is no longer needed, we securely delete or anonymise it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">5. Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal
              information against unauthorised access, alteration, disclosure, or destruction.
              However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">6. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, or delete
              your personal information. You may also have the right to object to or restrict
              certain processing of your data. To exercise these rights, contact us at the
              address below.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">7. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our platform
              and hold certain information. You can instruct your browser to refuse all cookies
              or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              changes by posting the new policy on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@6ystems.com" className="text-blue-600 hover:underline">
                privacy@6ystems.com
              </a>.
            </p>
          </section>

        </div>
        
      </div>
        <FooterSection />
    </main>
  )
}
