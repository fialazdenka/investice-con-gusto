# Con Gusto Finance - Investiční web

## O projektu
Investiční microsite pro společnost **Con Gusto Finance s.r.o.** - dluhopisový program gastronomické skupiny Con Gusto (Brno).

**Cíl webu:** Budovat důvěru a získat kontakty potenciálních investorů prostřednictvím kontaktního formuláře.

**Cílová skupina:** Drobní investoři hledající alternativu k bankovním produktům, zákazníci restaurací Con Gusto.

---

## Struktura projektu

```
investice-con-gusto/
├── css/
│   └── styles.css          # Hlavní styly (responzivní, dark theme)
├── texty/                   # Zdrojové dokumenty (DOCX)
│   ├── Dluhopisy o nás.docx
│   ├── CG investice dluhopisy.docx
│   └── CG dluhopisy FAQ.docx
├── index.html               # Hlavní stránka - Dluhopisy
├── o-nas.html               # O skupině Con Gusto
├── faq.html                 # Často kladené otázky (accordion)
├── navrh-webu.md            # Kompletní design dokumentace
└── README.md                # Tento soubor
```

---

## Stránky

### 1. Dluhopisy (index.html) - HLAVNÍ
- Hero s parametry investice (7%, 2 roky, 5000 Kč)
- Proč investovat (6 bodů)
- Základní parametry investice
- Bezpečnost a transparentnost
- Online proces (6 kroků)
- Věrnostní program
- Komunikace s investory
- Pro koho je investice určena
- **Kontaktní formulář** (hlavní CTA)
- Závěrečný statement

### 2. O nás (o-nas.html)
- Hero
- Intro text
- Naše podniky (4 karty: steakhouse, italská, pivnice, winebar)
- Con Gusto Catering
- Prověřeni krizí (covid)
- Con Gusto Finance s.r.o.
- Závěrečný statement

### 3. FAQ (faq.html)
- Hero
- Accordion s 7 kategoriemi:
  - Základní informace
  - Parametry investice
  - Bezpečnost a rizika
  - Proces investice
  - Výplata a daně
  - Komunikace a benefity
  - Další kroky
- CTA "Nenašli jste odpověď?"

---

## Vizuální styl

### Barvy
| Účel | Hodnota |
|------|---------|
| Tmavé pozadí | `#1a1a1a`, `#2d2d2d` |
| Světlé pozadí | `#f5f0e8` (cream), `#e8e0d4` |
| Akcent | `#b8976c` (zlatá/bronzová) |
| Text světlý | `#ffffff` |
| Text tmavý | `#333333` |

### Typografie
- **Headlines:** Playfair Display (serif)
- **Body:** Inter (sans-serif)
- Google Fonts CDN

### Principy
- Premium, klidný vzhled inspirovaný congusto.cz
- Velký spacing mezi sekcemi
- Tmavé sekce střídané se světlými
- Minimalistický, bez agresivního marketingu

---

## Placeholder obrázky

Aktuálně používáme stock fotky z **Unsplash**. K nahrazení vlastními:

| Sekce | Aktuální URL | Doporučený typ |
|-------|--------------|----------------|
| Hero Dluhopisy | `unsplash.com/photo-1414235077428-338989a2e8c0` | Interiér restaurace |
| Parametry | `unsplash.com/photo-1466978913421-dad2ebd01d17` | Detail gastronomie |
| Bezpečnost | `unsplash.com/photo-1486406146926-c627a92ad1ab` | Architektura/stabilita |
| Věrnostní program | `unsplash.com/photo-1517248135467-4c7edcad34c4` | Lidé v restauraci |
| Hero O nás | `unsplash.com/photo-1559339352-11d035aa65de` | Interiér restaurace |
| Steakhouse | `unsplash.com/photo-1544025162-d76694265947` | Steak |
| Italská | `unsplash.com/photo-1473093295043-cdd812d0e601` | Pasta |
| Pivnice | `unsplash.com/photo-1514933651103-005eec06c04b` | Pivnice interiér |
| Winebar | `unsplash.com/photo-1510812431401-41d2bd2722f3` | Víno |
| Catering | `unsplash.com/photo-1555244162-803834f70033` | Catering setup |
| Odolnost | `unsplash.com/photo-1486325212027-8081e485255e` | Architektura |
| Hero FAQ | `unsplash.com/photo-1497366216548-37526070297c` | Kancelář/čistý prostor |

---

## Kontaktní formulář

**Pole:**
- Jméno a příjmení (povinné)
- E-mail (povinné)
- Telefon (nepovinné)
- Orientační výše investice (select, nepovinné)
- GDPR souhlas (povinné)

**Poznámka:** Formulář je pouze frontend. Pro funkčnost je potřeba backend nebo služba typu Formspree, Netlify Forms apod.

---

## Klíčové parametry investice

| Parametr | Hodnota |
|----------|---------|
| Roční úrok | 7 % p.a. |
| Doba investice | 2 roky |
| Minimální investice | 5 000 Kč |
| Výplata úroků | Čtvrtletně nebo pololetně |
| Typ emise | Neveřejná |
| Cílový objem | min. 15 000 000 Kč |

---

## TODO / Další kroky

- [ ] Nahradit placeholder obrázky vlastními fotografiemi
- [ ] Doplnit reálné IČO a právní údaje do footeru
- [ ] Připojit backend pro kontaktní formulář
- [ ] Přidat favicon a OG meta tagy
- [ ] Otestovat na různých zařízeních
- [ ] Nasadit na hosting

---

## Spuštění lokálně

```bash
open ~/Documents/ClaudeProjects/investice-con-gusto/index.html
```

Nebo spustit lokální server:
```bash
cd ~/Documents/ClaudeProjects/investice-con-gusto
python3 -m http.server 8000
# Pak otevřít http://localhost:8000
```

---

## Související soubory

- `navrh-webu.md` - Kompletní wireframe a design dokumentace
- `texty/` - Originální zdrojové dokumenty (DOCX)
