import { useRouter } from 'next/router'
import { useState } from 'react'
import Layout from '../components/Layout'
import { translations } from '../lib/translations'

export default function Contact() {
  const router = useRouter()
  const { locale } = router
  const t = translations[locale]

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Layout title={`${t.contact.title} – VYLO`}>
      <section className="py-20 bg-primary-800">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.contact.title}
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              {t.contact.subtitle}
            </p>
            <p className="text-lg text-gray-400 mb-12">
              {t.contact.description}
            </p>

            <form
              action="https://formsubmit.co/fylaender@gmail.com"
              method="POST"
              className="bg-primary-700 p-8 rounded-lg border border-accent-600/20"
            >
              <input type="hidden" name="_subject" value="Neue Kontaktanfrage von VYLO Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    {t.contact.form.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-800 text-white border border-primary-600 rounded-lg focus:outline-none focus:border-accent-600"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-white font-semibold mb-2">
                    {t.contact.form.company}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-800 text-white border border-primary-600 rounded-lg focus:outline-none focus:border-accent-600"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    {t.contact.form.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-800 text-white border border-primary-600 rounded-lg focus:outline-none focus:border-accent-600"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-semibold mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-800 text-white border border-primary-600 rounded-lg focus:outline-none focus:border-accent-600"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    {t.contact.form.message} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-800 text-white border border-primary-600 rounded-lg focus:outline-none focus:border-accent-600"
                  />
                </div>

                <div className="text-sm text-gray-400">
                  {t.contact.form.privacy}
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-500 transition"
                >
                  {t.contact.form.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

