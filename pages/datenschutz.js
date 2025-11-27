import Layout from '../components/Layout'

export default function Privacy() {
  return (
    <Layout title="Datenschutzerklärung – VYLO">
      <section className="py-20 bg-primary-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-primary-700 p-8 rounded-lg">
            <h1 className="text-4xl font-bold text-white mb-8">Datenschutzerklärung</h1>

            <div className="text-gray-300 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-xl font-semibold text-white mb-2">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                  Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
                  denen Sie persönlich identifiziert werden können.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Datenerfassung auf dieser Website</h2>
                <h3 className="text-xl font-semibold text-white mb-2">Kontaktformular</h3>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                  Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Analyse-Tools und Tools von Drittanbietern</h2>
                <p>
                  Diese Website verwendet keine Tracking- oder Analyse-Tools von Drittanbietern, die personenbezogene
                  Daten ohne Ihre Einwilligung erfassen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Ihre Rechte</h2>
                <p>
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
                  Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
                  Berichtigung oder Löschung dieser Daten.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Kontakt</h2>
                <p>
                  Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter:<br />
                  E-Mail: info@vylo.ai
                </p>
              </div>

              <div className="text-sm text-gray-400 pt-4">
                <p><em>Hinweis: Dies ist eine Vorlage. Bitte lassen Sie eine vollständige Datenschutzerklärung
                durch einen Anwalt oder spezialisierten Dienstleister erstellen, um rechtlich abgesichert zu sein.</em></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

