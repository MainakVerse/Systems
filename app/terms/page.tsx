import Link from 'next/link'


import { FooterSection } from '@/components/sections/footer-section';


export const metadata = {
  title: 'Terms & Conditions – 6ystems',
  description: 'Terms and conditions governing the use of the 6ystems platform.',
}

export default function TermsPage() {
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

        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms &amp; Conditions</h1>
        <p className="text-sm text-gray-400 mb-10">Effective date: March 1, 2025</p>

        <div className="space-y-10 text-gray-600 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the 6ystems platform, you agree to be bound by these Terms
              and Conditions and our Privacy Policy. If you do not agree with any part of these
              terms, you may not access the platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">2. Use of the Platform</h2>
            <p>You agree to use 6ystems only for lawful purposes and in a manner that does not:</p>
            <ul className="list-disc list-inside space-y-1.5 mt-3">
              <li>Infringe the rights of any third party</li>
              <li>Violate any applicable local, national, or international law or regulation</li>
              <li>Transmit unsolicited or unauthorised advertising material</li>
              <li>Attempt to gain unauthorised access to any part of the platform</li>
              <li>Introduce malicious code or interfere with platform integrity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">3. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, and software on the 6ystems platform are the
              exclusive property of 6ystems or its licensors. You may not reproduce, distribute,
              or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">4. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials
              and for all activities that occur under your account. You agree to notify us
              immediately of any unauthorised use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">5. Subscription and Payments</h2>
            <p>
              Access to certain features requires a paid subscription. All fees are stated in
              your chosen currency and are non-refundable except where required by law. We
              reserve the right to change pricing with 30 days' notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, 6ystems shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from your
              use of the platform, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">7. Disclaimer of Warranties</h2>
            <p>
              The platform is provided on an "as is" and "as available" basis without warranties
              of any kind, either express or implied. We do not warrant that the platform will be
              uninterrupted, error-free, or free of harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the platform at our
              sole discretion, without notice, for conduct that we believe violates these Terms
              or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable law.
              Any disputes arising under these Terms shall be subject to the exclusive
              jurisdiction of the competent courts in the applicable jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted on
              this page with an updated effective date. Continued use of the platform after
              changes constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">11. Contact Us</h2>
            <p>
              For questions about these Terms, please contact us at{' '}
              <a href="mailto:legal@6ystems.com" className="text-blue-600 hover:underline">
                legal@6ystems.com
              </a>.
            </p>
          </section>
            

        </div>
      </div>
      <FooterSection />
    </main>
  )
}
