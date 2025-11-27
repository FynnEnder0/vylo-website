import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { translations } from '../lib/translations'
import Link from 'next/link'

export default function About() {
  const router = useRouter()
  const { locale } = router
  const t = translations[locale]

  return (
    <Layout title={`${t.about.title} – VYLO`}>
      <section className="py-20 bg-primary-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.about.title}
            </h1>

            <div className="bg-primary-700 p-8 rounded-lg border border-accent-600/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                {t.about.subtitle}
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {t.about.description}
              </p>

              <blockquote className="border-l-4 border-accent-600 pl-6 py-4 mb-6 italic text-gray-200 text-xl">
                {t.about.quote}
              </blockquote>

              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">{t.about.focus.split(':')[0]}:</strong> {t.about.focus.split(':')[1]}</p>
                <p><strong className="text-white">{t.about.philosophy.split(':')[0]}:</strong> {t.about.philosophy.split(':')[1]}</p>
                <p><strong className="text-white">{t.about.motivation.split(':')[0]}:</strong> {t.about.motivation.split(':')[1]}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent-600 to-accent-700 p-8 rounded-lg text-white">
              <h2 className="text-2xl font-bold mb-4">VYLO</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">V – Vision</h3>
                  <p className="text-white/90">Entwicklungen früh erkennen und aktiv gestalten</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Y – Yielding Knowledge</h3>
                  <p className="text-white/90">Wissen als dauerhafte Ressource nutzen</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">L – Learning Adaptation</h3>
                  <p className="text-white/90">Kontinuierliches Lernen als Grundprinzip</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">O – Open Evolution</h3>
                  <p className="text-white/90">Wandel als Chance begreifen</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/kontakt" className="inline-block bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-500 transition">
                {t.nav.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

