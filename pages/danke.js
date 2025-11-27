import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { translations } from '../lib/translations'
import Link from 'next/link'

export default function ThankYou() {
  const router = useRouter()
  const { locale } = router
  const t = translations[locale]

  return (
    <Layout title={`${locale === 'de' ? 'Vielen Dank' : 'Thank You'} – VYLO`}>
      <section className="py-20 bg-primary-800 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full">
                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {locale === 'de' ? 'Vielen Dank!' : 'Thank You!'}
            </h1>

            <p className="text-xl text-gray-300 mb-4">
              {locale === 'de'
                ? 'Ihre Anfrage wurde erfolgreich versendet.'
                : 'Your inquiry has been successfully sent.'}
            </p>

            <p className="text-lg text-gray-400 mb-8">
              {locale === 'de'
                ? 'Wir melden uns innerhalb von 24 Stunden bei Ihnen. Prüfen Sie auch Ihren Spam-Ordner, falls Sie nichts von uns hören.'
                : 'We will get back to you within 24 hours. Please check your spam folder if you don\'t hear from us.'}
            </p>

            <div className="bg-primary-700 p-6 rounded-lg border border-accent-600/20 mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                {locale === 'de' ? 'Was passiert als Nächstes?' : 'What Happens Next?'}
              </h2>
              <ul className="text-left text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-accent-400 mr-2">1.</span>
                  <span>{locale === 'de'
                    ? 'Wir prüfen Ihre Anfrage und analysieren Ihren Use Case'
                    : 'We review your inquiry and analyze your use case'}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-400 mr-2">2.</span>
                  <span>{locale === 'de'
                    ? 'Ein Experte aus unserem Team meldet sich per E-Mail bei Ihnen'
                    : 'An expert from our team will contact you via email'}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-400 mr-2">3.</span>
                  <span>{locale === 'de'
                    ? 'Wir vereinbaren ein unverbindliches Erstgespräch (30 Min.)'
                    : 'We schedule a non-binding initial consultation (30 min.)'}</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-500 transition">
                {locale === 'de' ? 'Zur Startseite' : 'Back to Home'}
              </Link>
              <Link href="/leistungen" className="bg-primary-700 border-2 border-accent-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition">
                {locale === 'de' ? 'Unsere Leistungen' : 'Our Services'}
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-primary-700">
              <p className="text-gray-400 text-sm">
                {locale === 'de'
                  ? 'Dringende Anfrage? Schreiben Sie uns direkt an: '
                  : 'Urgent inquiry? Contact us directly at: '}
                <a href="mailto:fylaender@gmail.com" className="text-accent-400 hover:text-accent-300">
                  fylaender@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

