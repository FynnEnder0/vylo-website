import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { translations } from '../lib/translations'
import Link from 'next/link'

export default function Home() {
  const router = useRouter()
  const { locale } = router
  const t = translations[locale]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-500 transition">
                {t.hero.cta}
              </Link>
              <Link href="/leistungen" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-900 transition">
                {t.hero.cta2}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-primary-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.services.title}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-700 p-8 rounded-lg border border-accent-600/20 hover:border-accent-600 transition">
              <div className="text-accent-400 text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.services.integration.title}</h3>
              <p className="text-gray-300">{t.services.integration.description}</p>
            </div>

            <div className="bg-primary-700 p-8 rounded-lg border border-accent-600/20 hover:border-accent-600 transition">
              <div className="text-accent-400 text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.services.automation.title}</h3>
              <p className="text-gray-300">{t.services.automation.description}</p>
            </div>

            <div className="bg-primary-700 p-8 rounded-lg border border-accent-600/20 hover:border-accent-600 transition">
              <div className="text-accent-400 text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.services.data.title}</h3>
              <p className="text-gray-300">{t.services.data.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why VYLO Section */}
      <section className="py-20 bg-primary-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            {t.why.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-accent-400 text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-2">{t.why.item1.title}</h3>
              <p className="text-gray-400">{t.why.item1.description}</p>
            </div>

            <div className="text-center">
              <div className="text-accent-400 text-5xl mb-4">🔌</div>
              <h3 className="text-xl font-bold text-white mb-2">{t.why.item2.title}</h3>
              <p className="text-gray-400">{t.why.item2.description}</p>
            </div>

            <div className="text-center">
              <div className="text-accent-400 text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-2">{t.why.item3.title}</h3>
              <p className="text-gray-400">{t.why.item3.description}</p>
            </div>

            <div className="text-center">
              <div className="text-accent-400 text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-2">{t.why.item4.title}</h3>
              <p className="text-gray-400">{t.why.item4.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.contact.description}
          </h2>
          <Link href="/kontakt" className="inline-block bg-white text-accent-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
            {t.hero.cta}
          </Link>
        </div>
      </section>
    </Layout>
  )
}

