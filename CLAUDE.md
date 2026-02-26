# Claude Code Anweisungen - Grinsel Landing

## Projekt-Kontext

Dies ist die zentrale Landing Page für `grinsel.online`. Sie verlinkt zu allen digitalen Projekten:

| Projekt | Pfad | Beschreibung |
|---------|------|--------------|
| Cosplay Digital Gadgets | `/gadgets/` | Android Apps für Cosplay |
| TableCast VTT | Externe URL | Virtual Tabletop |

## KRITISCH - Vor Änderungen beachten

### Links zu anderen Projekten
- **NUR nach Rücksprache mit dem User ändern**
- Links sind bewusst auf Railway URLs gesetzt (temporär)
- Nach Domain-Setup werden sie auf relative Pfade umgestellt

### Domain-Referenzen
- `metadataBase` in `layout.tsx` ist auf `grinsel.online` gesetzt
- Bei Domain-Änderungen: Layout UND README aktualisieren

## Verwandte Projekte (READ ONLY)

Diese Projekte gehören zum gleichen Ökosystem. **Nur lesen, nicht ändern** ohne explizite Anweisung:

| Projekt | Pfad |
|---------|------|
| Cosplay Digital Gadgets | `C:\Users\marcj\git10\cosplay_digital_gadget_page` |
| TableCast VTT | `C:\Users\marcj\git07` |

### Wichtige Konfigurationen in anderen Projekten

**cosplay_digital_gadget_page:**
- `basePath: '/gadgets'` in `next.config.js`
- Domain hardcoded: `grinsel.online/gadgets` in 5 Dateien
- Hat eigene HANDOVER.md mit Details

**git07 (TableCast):**
- KEIN basePath (läuft auf Root `/`)
- Hat eigene CLAUDE.md und MANUAL.md
- Express.js Backend, KEIN Next.js

## Link-Aktualisierung Checkliste

Bei Domain-Änderungen diese Dateien prüfen:

1. `src/app/page.tsx`
   - Gadgets-Card href
   - TableCast-Card href
   - Footer Impressum href
   - Footer Privacy href

2. `src/app/layout.tsx`
   - metadataBase URL

3. `README.md`
   - URL-Tabellen aktualisieren

4. `LINK_MATRIX.md`
   - Alle Verlinkungen dokumentieren

## Technologie-Stack

- **Framework:** Next.js 14 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS (Cyberpunk-Theme)
- **Hosting:** Railway
- **Domain:** grinsel.online (Strato)

## Häufige Aufgaben

### Neues Projekt hinzufügen

1. Card in `page.tsx` hinzufügen (Grid-Layout)
2. Links in Footer prüfen (Impressum/Privacy)
3. `LINK_MATRIX.md` aktualisieren
4. `README.md` Projekt-Tabelle ergänzen

### Domain aktivieren

1. README.md "Domain-Setup Anleitung" folgen
2. Nach DNS-Propagation Links in `page.tsx` ändern
3. Alle Dokumentation aktualisieren

## Git

- **Remote:** `git@github.com:Grinsel/grinsel-landing.git`
- **Branch:** `master`
- **Auto-Deploy:** Railway deployed bei Push

## Commit-Format

```
feat: Add new project card for [Name]
fix: Update broken link to [Target]
docs: Update README with new URLs
style: Adjust card hover effects
```
