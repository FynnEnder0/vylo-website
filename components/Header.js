import Link from 'next/link'
import { useRouter } from 'next/router'
import { translations } from '../lib/translations'

export default function Header() {
  const router = useRouter()
  const { locale } = router
  const t = translations[locale]

  const switchLocale = (newLocale) => {
    router.push(router.pathname, router.asPath, { locale: newLocale })
  }

  return (
    <header className="bg-primary-900 border-b border-primary-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            VYLO
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition">
              {t.nav.home}
            </Link>
            <Link href="/leistungen" className="text-gray-300 hover:text-white transition">
              {t.nav.services}
            </Link>
            <Link href="/ueber-uns" className="text-gray-300 hover:text-white transition">
              {t.nav.about}
            </Link>
            <Link href="/kontakt" className="bg-accent-600 text-white px-6 py-2 rounded-lg hover:bg-accent-500 transition">
              {t.nav.cta}
            </Link>

            <div className="flex space-x-2 ml-4">
              <button
                onClick={() => switchLocale('de')}
                className={`px-2 py-1 text-sm rounded ${locale === 'de' ? 'bg-accent-600 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                DE
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-2 py-1 text-sm rounded ${locale === 'en' ? 'bg-accent-600 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

