import Layout from '../components/Layout'

export default function Imprint() {
  return (
    <Layout title="Impressum – VYLO">
      <section className="py-20 bg-primary-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-primary-700 p-8 rounded-lg">
            <h1 className="text-4xl font-bold text-white mb-8">Impressum</h1>

            <div className="text-gray-300 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
                <p>VYLO<br />
                [Ihre Straße und Hausnummer]<br />
                [PLZ] [Stadt]<br />
                Deutschland</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Vertreten durch</h2>
                <p>Fynn Ender<br />
                Justin Bohlmann</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Kontakt</h2>
                <p>E-Mail: info@vylo.ai<br />
                Website: https://vylo.ai</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Hinweise zur Website</h2>
                <p className="text-sm">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                  Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
              </div>

              <div className="text-sm text-gray-400 pt-4">
                <p><em>Bitte ergänzen Sie die fehlenden Angaben (Adresse, Rechtsform, ggf. Registernummer, etc.)
                entsprechend Ihrer tatsächlichen Unternehmensdaten.</em></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

