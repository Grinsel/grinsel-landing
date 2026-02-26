# Grinsel Landing Page

Portal für alle digitalen Projekte von Marc Schmelzer.

## Projekte

| Projekt | Beschreibung | Status | Technologie |
|---------|--------------|--------|-------------|
| [Cosplay Gadgets](https://cosplay-digital-gadgets-production.up.railway.app/gadgets/) | Android Apps für Cosplay & Roleplay | ✅ Live | Next.js 14 |
| [TableCast VTT](https://git07-production.up.railway.app/) | Virtual Tabletop für Pen & Paper | ✅ Live | Express.js |

## URLs

### Aktuelle URLs (Railway)

| Projekt | URL |
|---------|-----|
| Landing Page | *[URL nach Deploy eintragen]* |
| Cosplay Gadgets | https://cosplay-digital-gadgets-production.up.railway.app/gadgets/ |
| TableCast VTT | https://git07-production.up.railway.app/ |

### Geplante URLs (nach Domain-Setup)

| Projekt | URL |
|---------|-----|
| Landing Page | https://grinsel.online/ |
| Cosplay Gadgets | https://grinsel.online/gadgets/ |
| TableCast VTT | https://grinsel.online/vtt/ (später) |

---

## Domain-Setup Anleitung (Strato → Railway)

### Voraussetzungen
- Domain bei Strato registriert und aktiv (Status: nicht mehr "in Bearbeitung")
- Railway-Projekte deployed

### Schritt 1: Railway Custom Domain hinzufügen

1. **Railway Dashboard öffnen:** https://railway.app/dashboard
2. **Projekt auswählen** (z.B. grinsel-landing)
3. **Service klicken** (das Kästchen mit der App)
4. **Settings Tab** öffnen
5. **"Domains" Sektion** finden
6. **"Add Custom Domain"** klicken
7. **Domain eingeben:** `grinsel.online`
8. **Railway zeigt DNS-Einträge** - diese notieren!

Beispiel was Railway zeigt:
```
Type: CNAME
Name: @
Value: grinsel-landing-xxx.up.railway.app
```

### Schritt 2: DNS bei Strato konfigurieren

1. **Strato Login:** https://www.strato.de/apps/CustomerService
2. **Domain-Verwaltung** öffnen
3. **grinsel.online** auswählen
4. **DNS-Verwaltung** oder **DNS-Einstellungen** öffnen
5. **Neue Einträge hinzufügen:**

Für Root-Domain (`grinsel.online`):
```
Typ: A oder CNAME (je nach Railway-Anweisung)
Host: @ (oder leer)
Ziel: [Wert von Railway]
```

Für www-Subdomain (`www.grinsel.online`):
```
Typ: CNAME
Host: www
Ziel: [Wert von Railway]
```

6. **Speichern** - DNS-Propagation dauert bis zu 48 Stunden

### Schritt 3: SSL verifizieren

- Railway aktiviert SSL automatisch nach DNS-Propagation
- Prüfen: https://grinsel.online sollte grünes Schloss zeigen
- Falls nicht: 24-48h warten oder Railway Support kontaktieren

### Schritt 4: Links aktualisieren (nach Domain-Setup)

In `src/app/page.tsx` ändern:
```tsx
// Gadgets-Link
href="/gadgets/"  // statt Railway URL

// Footer Impressum
href="/gadgets/impressum/"

// Footer Privacy
href="/gadgets/privacy/"

// TableCast bleibt externe URL oder später /vtt/
```

---

## Entwicklung

### Lokaler Dev-Server
```bash
npm install
npm run dev
# Öffne http://localhost:3000
```

### Build & Start
```bash
npm run build
npm start
```

### Deployment
Railway auto-deployed bei Push auf `master` Branch.

---

## Projektstruktur

```
grinsel_landing/
├── src/app/
│   ├── page.tsx      # Landing Page mit Projekt-Cards
│   ├── layout.tsx    # Root Layout mit Metadata
│   └── globals.css   # Tailwind + Custom Styles
├── README.md         # Diese Datei
├── CLAUDE.md         # AI-Anweisungen
├── LINK_MATRIX.md    # Alle Verlinkungen dokumentiert
└── next.config.js    # Next.js Konfiguration
```

---

## Verwandte Repositories

| Projekt | Pfad | GitHub |
|---------|------|--------|
| Cosplay Gadgets | `C:\Users\marcj\git10\cosplay_digital_gadget_page` | Grinsel/cosplay-digital-gadgets |
| TableCast VTT | `C:\Users\marcj\git07` | Grinsel/git07 |
| Landing Page | `C:\Users\marcj\git10\grinsel_landing` | Grinsel/grinsel-landing |

---

## Kontakt

Marc Schmelzer
https://grinsel.online
