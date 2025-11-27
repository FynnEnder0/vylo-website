import Link from 'next/link'
import { useRouter } from 'next/router'
import { translations } from '../lib/translations'

export default function Footer() {
  const router = useRouter()
  const { locale } = router
  const t = translations[locale]

  return (
    <footer className="bg-primary-900 border-t border-primary-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">VYLO</h3>
            <p className="text-gray-400">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.nav.services}</h4>
            <ul className="space-y-2">
              <li><Link href="/leistungen" className="text-gray-400 hover:text-white transition">{t.services.integration.title}</Link></li>
              <li><Link href="/leistungen" className="text-gray-400 hover:text-white transition">{t.services.automation.title}</Link></li>
              <li><Link href="/leistungen" className="text-gray-400 hover:text-white transition">{t.services.data.title}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/impressum" className="text-gray-400 hover:text-white transition">{t.footer.imprint}</Link></li>
              <li><Link href="/datenschutz" className="text-gray-400 hover:text-white transition">{t.footer.privacy}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  )
}

