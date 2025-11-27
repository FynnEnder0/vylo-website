# 🚀 VYLO Website - Deployment Anleitung

## ✅ Status: Bereit für Deployment!

Alle Dateien sind committed und bereit für GitHub/Vercel.

---

## 🎯 Schnellste Methode: GitHub → Vercel (3 Minuten)

### Schritt 1: GitHub Repository erstellen

1. Gehe zu: https://github.com/new
2. **Repository Name:** `vylo-website` (oder `vylo`)
3. **Visibility:** Private (empfohlen) oder Public
4. ⚠️ **NICHT** "Initialize with README" anklicken
5. Klicke "Create repository"

### Schritt 2: Code zu GitHub pushen

✅ **Git-Remote ist bereits korrekt gesetzt!**

Jetzt nur noch pushen:

```bash
cd /Users/fynn-lauridsender/WebstormProjects/vylo2

# Pushe den Code
git branch -M main
git push -u origin main
```

**Dein Repository:** https://github.com/FynnEnder0/vylo-website

**Tipp:** Falls du nach Passwort gefragt wirst, nutze einen [Personal Access Token](https://github.com/settings/tokens) statt deinem Passwort.

### Schritt 3: Bei Vercel deployen

1. Gehe zu: https://vercel.com/signup
2. Klicke **"Continue with GitHub"**
3. Nach Login: Klicke **"Add New..." → "Project"**
4. Wähle dein Repository **"vylo-website"** aus
5. Klicke **"Deploy"** (alle Einstellungen sind bereits korrekt)

⏱️ **Build dauert ca. 1-2 Minuten**

### Schritt 4: Fertig! 🎉

Du bekommst eine URL wie:
**`https://vylo-website.vercel.app`**

Die Website ist jetzt live und hat:
- ✅ Automatisches HTTPS/SSL
- ✅ Globales CDN (schnell weltweit)
- ✅ Automatische Deployments bei jedem Git Push

---

## 🌐 Custom Domain verbinden (optional)

Sobald du `vylo.ai` gekauft hast:

1. In Vercel: **Settings** → **Domains**
2. Domain eingeben: `vylo.ai`
3. DNS-Records beim Domain-Anbieter hinzufügen:
   ```
   A     @    76.76.21.21
   CNAME www  cname.vercel-dns.com
   ```
4. Warte 5-30 Minuten → Fertig!

---

## 📝 Nach dem Deployment

### Kontaktformular aktivieren:
1. Öffne: `pages/kontakt.js`
2. Zeile 43: Ersetze `info@vylo.ai` mit eurer echten E-Mail
3. Commit + Push:
   ```bash
   git add pages/kontakt.js
   git commit -m "Update contact email"
   git push
   ```
4. Vercel deployt automatisch neu!

### Impressum ausfüllen:
- Datei: `pages/impressum.js`
- Echte Adresse, Rechtsform etc. ergänzen

### Datenschutz:
- Datei: `pages/datenschutz.js`
- Von Anwalt prüfen lassen (DSGVO!)

---

## 🔄 Zukünftige Updates

Jedes Mal wenn du etwas änderst:

```bash
git add .
git commit -m "Beschreibung der Änderung"
git push
```

→ Vercel deployt automatisch die neue Version!

---

## 💡 Tipps

- **Preview-URLs:** Jeder Branch bekommt eine eigene Test-URL
- **Logs ansehen:** vercel.com → dein Projekt → Deployments
- **Rollback:** Alte Version mit 1 Klick wieder aktivieren

---

## 🆘 Probleme?

**Build schlägt fehl:**
- Prüfe die Logs in Vercel
- Teste lokal: `npm run build`

**Domain funktioniert nicht:**
- DNS-Propagation kann 24h dauern
- Prüfe DNS: https://dnschecker.org

**Kontaktformular:**
- Erste E-Mail muss bei FormSubmit bestätigt werden

---

**Du bist bereit! 🚀**

Fragen? Öffne ein Issue oder schau in die [Vercel Docs](https://vercel.com/docs).
