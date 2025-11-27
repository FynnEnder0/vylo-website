# VYLO – Integrated AI & Automation

Seriöse B2B-Website für VYLO, entwickelt mit Next.js und Tailwind CSS.

## 🚀 Schnellstart

### Entwicklungsumgebung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

### 🌐 Kostenlos Online Hosten (Vercel - Empfohlen)

**Option A: Automatisches Deployment via GitHub (5 Minuten)**

1. **Repository erstellen:**
   ```bash
   # Falls noch nicht geschehen
   git init
   git add .
   git commit -m "Initial commit - VYLO Website"
   
   # GitHub Repository erstellen (über github.com)
   # Dann pushen:
   git remote add origin https://github.com/DEIN-USERNAME/vylo-website.git
   git push -u origin main
   ```

2. **Bei Vercel deployen:**
   - Gehe zu [vercel.com](https://vercel.com)
   - "Sign up" mit GitHub Account
   - "Add New Project" → Repository `vylo-website` auswählen
   - "Deploy" klicken
   - **Fertig!** URL: `https://vylo-website.vercel.app`

3. **Custom Domain verbinden (optional):**
   - In Vercel: Settings → Domains
   - `vylo.ai` eingeben
   - DNS-Einträge bei Domain-Anbieter hinzufügen

**Option B: Schnell-Deployment via CLI (2 Minuten)**

```bash
# Vercel CLI installieren
npm install -g vercel

# In Projekt-Ordner wechseln
cd /Users/fynn-lauridsender/WebstormProjects/vylo2

# Deployen (folge den Anweisungen)
vercel

# Production Deployment
vercel --prod
```

### Production Build (Self-Hosted)

```bash
# Docker Image bauen
docker build -t vylo-web .

# Container starten
docker run -p 3000:3000 vylo-web
```

## 📁 Struktur

```
vylo2/
├── components/          # React Komponenten
│   ├── Header.js
│   ├── Footer.js
│   └── Layout.js
├── pages/              # Next.js Pages
│   ├── index.js        # Startseite
│   ├── leistungen.js   # Services
│   ├── ueber-uns.js    # Über uns
│   ├── kontakt.js      # Kontakt
│   ├── impressum.js    # Impressum
│   └── datenschutz.js  # Datenschutz
├── lib/                # Utilities
│   └── translations.js # DE/EN Übersetzungen
├── styles/             # Global CSS
├── public/             # Statische Dateien
├── Dockerfile          # Production Build
└── nginx.conf          # Reverse Proxy Config
```

## 🌐 Internationalisierung

Die Website unterstützt Deutsch (Standard) und Englisch.
Sprachumschaltung erfolgt über die Buttons im Header.

## 📧 Kontaktformular

Das Kontaktformular nutzt [FormSubmit.co](https://formsubmit.co/).

**Setup:**
1. Öffne `pages/kontakt.js`
2. Ersetze `info@vylo.ai` mit eurer echten E-Mail
3. Bei erster Submission: E-Mail-Verifizierung bestätigen

**Alternative:** Integration mit eigenem Backend oder CRM.

## 🔐 Security & Deployment

### NGINX Reverse Proxy

Die `nginx.conf` enthält:
- SSL/TLS Konfiguration
- Security Headers (HSTS, X-Frame-Options, etc.)
- Caching für statische Assets

### Umgebungsvariablen

Kopiere `.env.sample` zu `.env` und fülle die Werte:

```bash
cp .env.sample .env
```

### SSL-Zertifikate

Für Production empfohlen:
- Let's Encrypt (kostenlos)
- Certbot für automatische Erneuerung

## 🎨 Branding

**Farben:**
- Primary: `#0B1120` (Anthrazit)
- Accent: `#4F46E5` (Tech-Violett)

**Typografie:**
- Inter (Google Fonts)

## 📝 Content Updates

Alle Texte (DE/EN) befinden sich in `lib/translations.js`.
Änderungen dort wirken sich automatisch auf alle Seiten aus.

## 🛠️ Technologie-Stack

- **Framework:** Next.js 14 (Pages Router)
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts)
- **Hosting:** Self-Hosted (Docker) oder Vercel
- **i18n:** Native Next.js i18n

## 📋 To-Do vor Launch

- [ ] E-Mail-Adresse im Kontaktformular ersetzen
- [ ] Impressum mit echten Daten ausfüllen
- [ ] Datenschutzerklärung rechtlich prüfen lassen
- [ ] Domain vylo.ai registrieren
- [ ] SSL-Zertifikat einrichten
- [ ] Favicon hinzufügen
- [ ] Optional: Matomo oder GA4 (mit Consent)

## 🔄 Wartung & Updates

```bash
# Dependencies aktualisieren
npm update

# Security Audit
npm audit

# Production Build testen
npm run build
npm start
```

## 📞 Support

Bei Fragen zur Website-Struktur oder Deployment:
- Dokumentation: [Next.js Docs](https://nextjs.org/docs)
- Docker: [Docker Docs](https://docs.docker.com/)

---

**VYLO – Intelligent by Design**
{
  "name": "vylo-website",
  "version": "1.0.0",
  "description": "VYLO - Integrated AI & Automation",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0"
  }
}
