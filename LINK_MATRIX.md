# Link-Matrix - Grinsel Ökosystem

Vollständige Dokumentation aller Verlinkungen zwischen Projekten.

**Letzte Aktualisierung:** 2026-02-26

---

## Übersicht

```
┌─────────────────────────────────────────────────────────────────┐
│                      grinsel.online                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────┐    ┌─────────────────┐                     │
│  │ grinsel_landing │───►│ cosplay_gadgets │                     │
│  │    (Root /)     │    │   (/gadgets/)   │                     │
│  └────────┬────────┘    └─────────────────┘                     │
│           │                                                      │
│           │             ┌─────────────────┐                     │
│           └────────────►│  TableCast VTT  │                     │
│                         │  (Externe URL)  │                     │
│                         └─────────────────┘                     │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 1. grinsel_landing → Andere Projekte

### Interne Links (page.tsx)

| Zeile | Element | href | Ziel-Projekt | Status |
|-------|---------|------|--------------|--------|
| ~27 | Gadgets Card | `https://cosplay-digital-gadgets-production.up.railway.app/gadgets/` | cosplay_digital_gadget_page | ✅ Aktiv |
| ~49 | TableCast Card | `https://git07-production.up.railway.app/` | git07 | ✅ Aktiv |
| ~76 | Footer Impressum | `https://cosplay-digital-gadgets-production.up.railway.app/gadgets/impressum/` | cosplay_digital_gadget_page | ✅ Aktiv |
| ~79 | Footer Privacy | `https://cosplay-digital-gadgets-production.up.railway.app/gadgets/privacy/` | cosplay_digital_gadget_page | ✅ Aktiv |

### Nach Domain-Setup ändern zu:

| Element | Neuer href |
|---------|------------|
| Gadgets Card | `/gadgets/` |
| TableCast Card | `https://git07-production.up.railway.app/` (bleibt extern) |
| Footer Impressum | `/gadgets/impressum/` |
| Footer Privacy | `/gadgets/privacy/` |

---

## 2. cosplay_digital_gadget_page → Extern

### APK Downloads (content/gadgets.json)

| Gadget | Download URL |
|--------|--------------|
| alien-motion-tracker | `https://github.com/Grinsel/cosplay-digital-gadgets/raw/master/public/apk/alien-motion-tracker.apk` |
| cyberpunk-hacker | `https://github.com/Grinsel/cosplay-digital-gadgets/raw/master/public/apk/cyberpunk-hacker.apk` |
| nod-ops-device | `https://github.com/Grinsel/cosplay-digital-gadgets/raw/master/public/apk/nod-ops-device.apk` |
| predator-countdown | `https://github.com/Grinsel/cosplay-digital-gadgets/raw/master/public/apk/predator-countdown.apk` |
| tactical-scanner | `https://github.com/Grinsel/cosplay-digital-gadgets/raw/master/public/apk/tactical-scanner.apk` |

### YouTube Embeds (content/gadgets.json)

| Gadget | Video ID |
|--------|----------|
| Motion Tracker | 7gZ-NVVBxEQ |
| Cyberpunk Hacker | _rI-QDH7kVg |
| NOD OPS Device | Q7J0v_aNFtI |
| Predator Countdown | plVm5GtOw7Y |
| Tactical Scanner | BUdlt3MCnNo |

### Andere externe Links

| Datei | Link | Zweck |
|-------|------|-------|
| support/page.tsx | `https://paypal.me/Grinsel` | Spenden |
| privacy/page.tsx | `https://railway.app/legal/privacy` | Railway Datenschutz |
| privacy/page.tsx | `https://www.strato.de/datenschutz/` | Strato Datenschutz |
| privacy/page.tsx | `https://policies.google.com/privacy` | Google Datenschutz |
| globals.css | `https://fonts.googleapis.com/...` | JetBrains Mono Font |

### SEO/Domain Referenzen (Hardcoded)

| Datei | Zeile | Referenz |
|-------|-------|----------|
| layout.tsx | 8 | `metadataBase: https://grinsel.online/gadgets` |
| layout.tsx | 21 | `openGraph.url: https://grinsel.online/gadgets` |
| layout.tsx | 36 | `canonical: https://grinsel.online/gadgets` |
| robots.ts | 9 | `sitemap: https://grinsel.online/gadgets/sitemap.xml` |
| sitemap.ts | 5 | `baseUrl: https://grinsel.online/gadgets` |

---

## 3. git07 (TableCast) → Extern

| Link-Typ | URL | Zweck |
|----------|-----|-------|
| SRD API | `https://www.dnd5eapi.co` | D&D 5e Regeldaten |

**Keine Links zu anderen Grinsel-Projekten.**

---

## 4. Railway URLs

### Aktuelle Deployments

| Projekt | Railway URL |
|---------|-------------|
| grinsel_landing | *[Nach Deploy eintragen]* |
| cosplay_digital_gadget_page | `https://cosplay-digital-gadgets-production.up.railway.app` |
| git07 | `https://git07-production.up.railway.app` |

### Wichtig

- cosplay_digital_gadget_page hat `basePath: '/gadgets'` → URL endet mit `/gadgets/`
- git07 hat KEINEN basePath → URL ist Root `/`

---

## 5. Firebase Verbindungen

### cosplay_digital_gadget_page

| Service | Projekt-ID | Zweck |
|---------|------------|-------|
| Firestore | cosplay-gadgets-comments | Kommentare + Download-Counter |
| Auth | cosplay-gadgets-comments | Admin-Login |

**Collections:**
- `comments` - Benutzerkommentare
- `downloads` - Download-Zähler pro Gadget

---

## 6. Checkliste bei Link-Änderungen

### Vor Änderungen prüfen:

- [ ] Ziel-URL ist erreichbar
- [ ] Bei internen Links: basePath beachten
- [ ] Bei externen Links: HTTPS verwenden
- [ ] LINK_MATRIX.md aktualisieren
- [ ] README.md aktualisieren (falls URL-Tabellen)

### Nach Änderungen testen:

- [ ] Link funktioniert im Browser
- [ ] Keine 404-Fehler in Console
- [ ] Alle betroffenen Seiten geprüft
- [ ] Git commit mit beschreibender Message

---

## 7. Geplante Änderungen

### Domain-Umstellung (wenn Strato aktiv)

| Aktuell | Neu |
|---------|-----|
| Railway URLs in Landing | Relative Pfade `/gadgets/` |
| Externe TableCast URL | Bleibt extern (oder später `/vtt/`) |

### TableCast unter /vtt/ (Zukunft)

Erfordert:
1. basePath in TableCast hinzufügen (BREAKING CHANGE)
2. Alle internen Links in TableCast anpassen
3. Neue Railway Deployment
4. Landing Page Links aktualisieren
