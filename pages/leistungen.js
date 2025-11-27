import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { translations } from '../lib/translations'
import Link from 'next/link'

export default function Services() {
  const router = useRouter()
  const { locale } = router
  const t = translations[locale]

  return (
    <Layout title={`${t.services.title} – VYLO`}>
      <section className="py-20 bg-primary-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.services.title}
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              {t.services.subtitle}
            </p>

            <div className="space-y-12">
              <div className="bg-primary-700 p-8 rounded-lg border border-accent-600/20">
                <div className="flex items-start gap-4">
                  <div className="text-accent-400 text-5xl">⚙️</div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {t.services.integration.title}
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {t.services.integration.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-700 p-8 rounded-lg border border-accent-600/20">
                <div className="flex items-start gap-4">
                  <div className="text-accent-400 text-5xl">🔄</div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {t.services.automation.title}
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {t.services.automation.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-700 p-8 rounded-lg border border-accent-600/20">
                <div className="flex items-start gap-4">
                  <div className="text-accent-400 text-5xl">📊</div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {t.services.data.title}
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {t.services.data.description}
                    </p>
                  </div>
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

