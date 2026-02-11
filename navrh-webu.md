# Návrh webu Con Gusto Investice

> **STAV: IMPLEMENTOVÁNO**
> Tento návrh byl realizován do funkčního HTML/CSS prototypu.
> - `index.html` - Dluhopisy (hlavní stránka)
> - `o-nas.html` - O nás
> - `faq.html` - FAQ
> - `css/styles.css` - Styly
>
> Viz `README.md` pro technický přehled projektu.

---

## 1. Struktura webu (Website Structure Overview)

### Header (Navigace)
- **Logo:** Con Gusto Finance (vlevo)
- **Navigace:** O nás | Dluhopisy | FAQ
- **CTA tlačítko:** "Získat informace" (vpravo, kontrastní barva)

### Footer
- Logo Con Gusto Finance
- Kontaktní údaje (email, telefon)
- Odkaz na hlavní web congusto.cz
- Právní informace (obchodní rejstřík, IČO)
- Copyright

### Proč tato struktura buduje důvěru
- **Minimalistická navigace** - pouze 3 stránky signalizují, že nejde o agresivní marketing, ale o seriózní nabídku
- **Viditelné CTA** - investor nemusí hledat, jak získat informace
- **Footer s právními údaji** - transparentnost a ověřitelnost společnosti
- **Absence "křiklavých" prvků** - žádné countdown timery, pop-upy nebo agresivní bannery

---

## 2. Wireframe jednotlivých stránek

---

### STRÁNKA: O NÁS

**Cíl stránky:** Vybudovat důvěru představením stability, historie a reálného podnikání skupiny Con Gusto.

---

#### HERO SEKCE

**SECTION: Hero - O nás**
```
Purpose: Okamžitě etablovat kredibilitu a stabilitu značky
Layout: Fullwidth hero s velkým headline, subtitulkem a background obrazem
Content:
  Headline: "Stabilní gastronomie s pevnými základy"
  Subheadline: "Skupina Con Gusto patří mezi respektované hráče na brněnské gastronomické scéně již řadu let."
CTA: "Poznat naše podniky" (scroll dolů) | "Investiční příležitost" (odkaz na Dluhopisy)
```
**UX vysvětlení:** Hero okamžitě komunikuje stabilitu a dlouhodobost. Žádné sliby, jen fakta. Investor vidí, že jde o reálné podnikání.

---

#### SECTION: Naše podniky

```
Purpose: Ukázat diverzifikaci a rozsah skupiny
Layout: Grid 2x2 nebo horizontální scroll s kartami podniků
Content:
  - Špičkový steakhouse
  - Autentická italská restaurace
  - Tradiční pivnice
  - Specializovaný winebar
  Text: "Provozujeme několik zavedených podniků různých gastronomických konceptů. Díky této rozmanitosti dokážeme oslovit široké spektrum zákazníků a efektivně reagovat na vývoj trhu."
CTA: žádné
```
**UX vysvětlení:** Diverzifikace = nižší riziko. Investor vidí, že nejde o jeden podnik, ale o portfolio.

---

#### SECTION: Con Gusto Catering

```
Purpose: Rozšířit vnímání skupiny o další stabilní pilíř byznysu
Layout: Dvousloupcový layout - text vlevo, obraz vpravo
Content:
  Headline: "Catering pro stovky hostů"
  Text: "Con Gusto Catering zajišťuje gastronomii pro firemní akce, svatby, oslavy i velké eventy. Máme za sebou stovky realizací. Úspěšná akce nestojí jen na dobrém jídle, ale především na precizní organizaci, spolehlivosti a detailu."
CTA: žádné
```
**UX vysvětlení:** Další příjmový stream = další důkaz stability a profesionality.

---

#### SECTION: Odolnost a stabilita

```
Purpose: Adresovat potenciální obavy o riziko (covid jako stress-test)
Layout: Fullwidth sekce s tmavým pozadím, ikonický statement
Content:
  Headline: "Prověřeni krizí"
  Text: "Skupina Con Gusto prošla i náročnými obdobími, včetně pandemie covidu, které prověřily stabilitu celého gastronomického trhu. Díky zodpovědnému řízení, diverzifikaci provozů a dlouhodobé strategii jsme tuto dobu plně zvládli a vyšli z ní jako silnější a odolnější celek."
CTA: žádné
```
**UX vysvětlení:** Proaktivně adresuje největší obavu investora. "Přežili jsme covid" je silný důkaz odolnosti.

---

#### SECTION: Con Gusto Finance

```
Purpose: Představit investiční entitu a její účel
Layout: Centered text s logem Con Gusto Finance
Content:
  Headline: "Con Gusto Finance s.r.o."
  Text: "Naše projekty stavíme na dlouhodobé udržitelnosti, transparentním hospodaření a postupném rozvoji. Proto vznikla společnost Con Gusto Finance s.r.o., jejímž cílem je umožnit partnerům a investorům podílet se na dalším růstu skupiny prostřednictvím jasně definovaných investičních projektů."
CTA: "Prozkoumat investiční příležitost" → Dluhopisy
```
**UX vysvětlení:** Přirozený přechod od "kdo jsme" k "jak se můžete zapojit".

---

#### SECTION: Závěrečný statement

```
Purpose: Uzavřít stránku silným, zapamatovatelným tvrzením
Layout: Minimalistický centered text na světlém pozadí
Content:
  "Con Gusto není jednorázový nápad ani krátkodobý trend. Je to značka postavená na zkušenostech, lidech a reálném podnikání, které má pevné základy a jasnou vizi do budoucna."
CTA: žádné
```
**UX vysvětlení:** Emocionální tečka. Investor odchází s pocitem solidarity a důvěry.

---

### STRÁNKA: DLUHOPISY

**Cíl stránky:** Jasně prezentovat investiční příležitost, parametry a proces. Vést k odeslání kontaktního formuláře.

---

#### HERO SEKCE

**SECTION: Hero - Dluhopisy**
```
Purpose: Jasně komunikovat nabídku a její hlavní benefit
Layout: Fullwidth hero, headline vlevo, klíčové parametry vpravo v boxu
Content:
  Headline: "Investujte do stabilní české gastronomie"
  Subheadline: "Otevíráme možnost podílet se na dalším rozvoji skupiny prostřednictvím investice do dluhopisů společnosti Con Gusto Finance s.r.o."

  Parametry box:
  - 7 % p.a.
  - 2 roky
  - od 5 000 Kč

CTA: "Získat podrobné informace"
```
**UX vysvětlení:** Investor okamžitě vidí klíčové čísla. Žádné skrývání podmínek.

---

#### SECTION: Proč investovat s Con Gusto

```
Purpose: Shrnout hlavní argumenty pro investici
Layout: 6 ikon/karet v gridu 3x2
Content:
  - Stabilní gastronomická skupina s historií a jasnou vizí
  - Zvládnuté krizové období včetně pandemie covidu
  - Auditovaná společnost
  - Investice do konkrétního projektu
  - Pevně dané podmínky, žádné skryté poplatky
  - Pravidelná komunikace s investory

  Závěrečný text: "Naším cílem je budovat dlouhodobé a férové partnerství s investory, kteří hledají rozumné zhodnocení a transparentní přístup."
CTA: žádné
```
**UX vysvětlení:** Scannable formát. Investor rychle projde klíčové body bez čtení dlouhých odstavců.

---

#### SECTION: Základní parametry investice

```
Purpose: Detailně představit podmínky investice
Layout: Strukturovaná tabulka/seznam s ikonami
Content:
  - Roční úroková sazba: 7 %
  - Doba investice: 2 roky
  - Minimální investice: 5 000 Kč
  - Výplata úroků: Každé 3 měsíce nebo každých 6 měsíců
  - Typ emise: Neveřejná emise dluhopisů
  - Celkový cílový objem: minimálně 15 000 000 Kč

  Poznámka: "Úrok je vyplácen po zdanění dle platné legislativy. O vše se staráme za vás, žádná administrativa navíc."
CTA: žádné
```
**UX vysvětlení:** Transparentnost. Všechny důležité parametry na jednom místě.

---

#### SECTION: Bezpečnost a transparentnost

```
Purpose: Adresovat obavy o bezpečnost investice
Layout: Dvousloupcový - text vlevo, bullet points vpravo
Content:
  Headline: "Investice je strukturována tak, aby byla maximálně přehledná a kontrolovatelná."

  Body:
  - Smlouva o úpisu dluhopisu je uzavírána online
  - Prostředky jsou použity výhradně na konkrétní projekt uvedený ve smlouvě
  - Po podpisu smlouvy dochází k odeslání investice
  - Pokud k úhradě nedojde, smlouva je neplatná
  - Emise není veřejně obchodovatelná
  - Projekt nepodléhá dohledu ČNB, což je u neveřejných emisí standardní

  Highlight box: "Součástí zajištění je ručitelské prohlášení mateřské společnosti, která kryje závazky emitenta."
CTA: žádné
```
**UX vysvětlení:** Proaktivně adresuje otázky o ČNB a bezpečnosti. Ručitelské prohlášení jako klíčový trust element.

---

#### SECTION: Plně online proces

```
Purpose: Ukázat jednoduchost a modernost procesu
Layout: Horizontální timeline/stepper
Content:
  Headline: "Plně online, od registrace po výplatu"

  Kroky:
  1. Vyplnění kontaktních údajů
  2. Ověření identity a zabezpečení účtu
  3. Online podpis smlouvy
  4. Odeslání investice
  5. Sledování investice v uživatelském rozhraní
  6. Pravidelné vyplácení úroků

  Poznámka: "Připravujeme investiční aplikaci s přehledem o výši investice, růstu, termínech výplat a aktuálním stavu projektu."

  Tagline: "Bez papírů, bez zbytečných schůzek."
CTA: žádné
```
**UX vysvětlení:** Vizuální timeline redukuje vnímanou komplexitu. "Online" = moderní a pohodlné.

---

#### SECTION: Věrnostní program

```
Purpose: Přidat unique value proposition nad rámec čistého výnosu
Layout: Karta s ikonou nebo ilustrací
Content:
  Headline: "Investice propojená s věrnostním programem"
  Text: "Investování u Con Gusto není jen o úroku."

  Benefity podle výše investice:
  - Vyšší úroveň věrnostního tarifu
  - Možnost dobití kreditu
  - Zvýhodněný cashback
  - Další benefity v našich restauracích

  Poznámka: "Tento model budeme postupně rozvíjet a transparentně komunikovat."
CTA: žádné
```
**UX vysvětlení:** Diferenciátor od běžných dluhopisů. Propojení s reálným světem restaurací.

---

#### SECTION: Komunikace s investory

```
Purpose: Ujistit o průběžné informovanosti
Layout: Seznam s ikonami
Content:
  Headline: "Pravidelná a otevřená komunikace"

  - Reporty minimálně 1× za 6 měsíců
  - Informace o využití prostředků
  - Přehled hospodaření
  - Výroční zprávy s veřejnými čísly

  Tagline: "Chceme, abyste přesně věděli, kam vaše investice směřuje."
CTA: žádné
```
**UX vysvětlení:** Transparentnost = důvěra. Investor ví, že nebude "ve tmě".

---

#### SECTION: Pro koho je investice určena

```
Purpose: Pomoct investorovi identifikovat se s nabídkou
Layout: 3 karty vedle sebe
Content:
  1. "Pro drobné investory hledající alternativu k bankovním produktům"
  2. "Pro zákazníky Con Gusto, kteří chtějí být součástí růstu značky"
  3. "Pro investory, kteří ocení stabilitu a srozumitelný model"
CTA: žádné
```
**UX vysvětlení:** Segmentace pomáhá investorovi říct "to jsem já".

---

#### SECTION: Kontaktní formulář (hlavní CTA)

```
Purpose: Konverze - získat kontakt pro zaslání dokumentace
Layout: Formulář v kontrastním boxu, centered
Content:
  Headline: "Získejte podrobné informace"
  Subtext: "Podrobné informace o aktuální investiční nabídce zpřístupňujeme po odeslání kontaktních údajů."

  Benefity:
  - Zašleme kompletní investiční dokumentaci
  - Vysvětlíme detaily projektu
  - Odpovíme na konkrétní dotazy

  [FORMULÁŘ - viz sekce 5]

CTA: "Odeslat a získat dokumentaci"
```
**UX vysvětlení:** Jasný value exchange. Investor ví, co dostane za své údaje.

---

#### SECTION: Závěrečný statement

```
Purpose: Silná tečka za stránkou
Layout: Centered text, tmavé pozadí
Content:
  "Con Gusto dluhopisy znamenají stabilní investici do gastronomie, která má pevné základy a prokazatelný růst."
CTA: žádné
```
**UX vysvětlení:** Zapamatovatelná věta, která shrnuje celou nabídku.

---

### STRÁNKA: FAQ

**Cíl stránky:** Odpovědět na všechny otázky, které investor může mít. Redukovat nejistotu a posílit rozhodnutí.

---

#### HERO SEKCE

**SECTION: Hero - FAQ**
```
Purpose: Nastavit očekávání a navigovat k odpovědím
Layout: Jednoduchý hero s headline
Content:
  Headline: "Často kladené otázky"
  Subheadline: "Vše, co potřebujete vědět o investici do Con Gusto dluhopisů."
CTA: žádné (obsah je hned pod hero)
```
**UX vysvětlení:** Minimalistický úvod. FAQ stránka je utilitární, ne marketingová.

---

#### SECTION: FAQ Accordion

```
Purpose: Poskytnout odpovědi v přehledném, scannable formátu
Layout: Accordion (rozklikávací otázky), seskupené do kategorií

KATEGORIE 1: Základní informace
- Co je Con Gusto Investice?
- Do čeho přesně investuji?
- Kdo stojí za projektem?

KATEGORIE 2: Parametry investice
- Jaký je výnos z investice?
- Jak dlouho je investice vázaná?
- Jaká je minimální výše investice?
- Kolik peněz chce Con Gusto celkem získat?

KATEGORIE 3: Bezpečnost a rizika
- Je investice bezpečná?
- Podléhá investice dohledu ČNB?
- Jsou dluhopisy obchodovatelné?
- Jak je zajištěna transparentnost?

KATEGORIE 4: Proces investice
- Jak probíhá celý proces investice?
- Kdy se investice považuje za platnou?
- Můžu investovat vícekrát?
- Je možné investici předčasně ukončit?

KATEGORIE 5: Výplata a daně
- Jak jsou vypláceny úroky?
- Musím úrok danit sám?

KATEGORIE 6: Komunikace a benefity
- Jak budu informován o průběhu investice?
- Jak souvisí investice s věrnostním programem Con Gusto?
- Je investice vhodná i pro drobné investory?

KATEGORIE 7: Další kroky
- Kde získám detailní informace o aktuální emisi?
- Proč investovat právě do Con Gusto?

CTA pod každou kategorií: žádné
```
**UX vysvětlení:** Accordion šetří prostor a umožňuje rychlé skenování. Kategorizace pomáhá najít relevantní odpověď.

---

#### SECTION: Stále máte otázky?

```
Purpose: Zachytit uživatele, kteří nenašli odpověď
Layout: Centered box s CTA
Content:
  Headline: "Nenašli jste odpověď?"
  Text: "Kontaktujte nás a rádi vám odpovíme na jakékoli další dotazy."
CTA: "Napište nám" (odkaz na kontaktní formulář na stránce Dluhopisy)
```
**UX vysvětlení:** Záchytná síť pro nerozhodnuté investory.

---

## 3. Vizuální a stylový směr

### Barevná paleta

| Účel | Barva | Popis |
|------|-------|-------|
| Primární pozadí | Tmavě šedá až antracitová (#1a1a1a - #2d2d2d) | Elegance, premium feeling |
| Sekundární pozadí | Teplá béžová/krémová (#f5f0e8) | Kontrast, čitelnost, gastronomická asociace |
| Text primární | Bílá (#ffffff) na tmavém, tmavě šedá (#333333) na světlém | Vysoký kontrast |
| Akcent | Tlumená zlatá/bronzová (#b8976c) | Investment feeling, premium |
| CTA tlačítka | Akcent barva nebo bílá s tmavým textem | Jasná akce |

### Typografie

- **Headlines:** Serifový font (např. Playfair Display, Cormorant) - elegance, tradice, důvěryhodnost
- **Body text:** Bezserifový font (např. Inter, DM Sans) - modernost, čitelnost
- **Kontrast:** Velké headlines (48-72px), menší body text (16-18px)
- **Váhy:** Bold pro headlines, regular pro body, medium pro subheadlines

### Layout a rytmus

- **Velké sekce:** Každá sekce má dostatek "breathing room" (80-120px padding)
- **Asymetrie:** Občasné asymetrické layouty pro vizuální zajímavost
- **Grid:** 12-sloupcový grid, obsah často v 8-10 sloupcích pro čitelnost
- **Karty:** Jemné stíny, zaoblené rohy (8-12px radius)
- **Fullwidth sekce:** Střídání tmavých a světlých sekcí pro vizuální rytmus

### Propojení s Con Gusto bez kopírování

- Zachovat **eleganci a klid** původního webu
- Přidat **investiční serióznost** (méně fotografií jídla, více struktury)
- Použít **podobnou barevnost** ale s investment twist (více tmavé, méně bílé)
- **Kvalitní fotografie** jako u congusto.cz, ale s důrazem na prostředí a lidi
- **Generózní whitespace** jako hlavní designový princip

---

## 4. Koncepty obrázků

### Stránka O nás

#### Hero - O nás
```
"Dark premium photograph of an elegant restaurant interior at golden hour,
empty tables with white tablecloths, warm ambient lighting, cinematic mood,
shallow depth of field, investment-grade quality, calm atmosphere"
```
**Typ:** Reálná fotografie | **Nálada:** Klidná, etablovaná | **Kompozice:** Wide shot, horizontální

#### Naše podniky - Steakhouse
```
"Moody photograph of premium steak on dark plate, professional plating,
dramatic side lighting, dark wood table, high-end restaurant atmosphere,
food photography, cinematic color grading"
```
**Typ:** Reálná fotografie jídla | **Nálada:** Luxusní, apetitní | **Kompozice:** Close-up, 45° úhel

#### Naše podniky - Italská restaurace
```
"Warm photograph of fresh handmade pasta, rustic Italian style,
natural daylight, wooden surface, authentic ingredients visible,
mediterranean atmosphere, editorial food photography"
```
**Typ:** Reálná fotografie | **Nálada:** Autentická, vřelá | **Kompozice:** Overhead shot

#### Naše podniky - Pivnice
```
"Atmospheric photograph of traditional Czech pub interior,
warm lighting, copper beer taps, wooden furniture,
authentic atmosphere, evening mood, documentary style"
```
**Typ:** Reálná fotografie | **Nálada:** Tradice, autenticita | **Kompozice:** Wide shot

#### Naše podniky - Winebar
```
"Elegant photograph of wine glasses on marble bar counter,
soft backlighting, wine bottles in background blur,
sophisticated atmosphere, minimal composition, premium feeling"
```
**Typ:** Reálná fotografie | **Nálada:** Sofistikovaná | **Kompozice:** Selective focus

#### Con Gusto Catering
```
"Professional photograph of catering event setup, elegant buffet arrangement,
uniformed staff in background, corporate event atmosphere,
wide angle, warm professional lighting, business quality"
```
**Typ:** Reálná fotografie | **Nálada:** Profesionální, spolehlivá | **Kompozice:** Wide shot

#### Odolnost a stabilita
```
"Abstract dark photograph of architectural structure,
strong geometric lines, concrete or steel, dramatic lighting,
metaphor for stability and strength, minimal, premium"
```
**Typ:** Abstraktní/architektura | **Nálada:** Síla, stabilita | **Kompozice:** Dramatic angle

### Stránka Dluhopisy

#### Hero - Dluhopisy
```
"Dark premium photograph blending gastronomy and finance concept,
elegant table setting with subtle financial elements like quality paper documents,
warm lighting, sophisticated atmosphere, investment mood, cinematic"
```
**Typ:** Konceptuální mix | **Nálada:** Seriózní, premium | **Kompozice:** Layered composition

#### Bezpečnost a transparentnost
```
"Minimal abstract photograph of transparent glass structures,
clean lines, soft lighting, metaphor for transparency,
architectural detail, premium quality, calm"
```
**Typ:** Abstraktní | **Nálada:** Čistota, transparentnost | **Kompozice:** Geometric

#### Online proces
```
"Clean photograph of modern laptop or tablet on elegant desk,
minimal workspace, soft natural lighting,
professional environment, subtle premium details, business atmosphere"
```
**Typ:** Lifestyle/tech | **Nálada:** Moderní, jednoduchá | **Kompozice:** Clean desk setup

#### Věrnostní program
```
"Warm photograph of people enjoying dinner in restaurant,
candid moment, friends or business partners,
elegant atmosphere, genuine happiness, soft focus background"
```
**Typ:** Lifestyle | **Nálada:** Radost, komunita | **Kompozice:** Candid, medium shot

#### Komunikace s investory
```
"Professional photograph of business report or document on quality paper,
elegant pen, subtle graphs visible, dark wood desk,
professional atmosphere, trust and transparency concept"
```
**Typ:** Business detail | **Nálada:** Profesionální, důvěryhodná | **Kompozice:** Detail shot

### Stránka FAQ

#### Hero - FAQ
```
"Minimal abstract photograph of clean geometric shapes,
question mark concept through negative space,
soft gradients, premium dark tones, sophisticated minimal"
```
**Typ:** Abstraktní | **Nálada:** Jasnost, přehlednost | **Kompozice:** Centered, minimal

---

## 5. Design kontaktního formuláře

### Umístění
- Hlavní formulář na stránce **Dluhopisy** (před závěrečným statementem)
- Sekundární odkaz na formulář ve **FAQ** ("Nenašli jste odpověď?")
- Sticky CTA v headeru "Získat informace" scrolluje k formuláři

### Pole formuláře

| Pole | Typ | Povinné | Placeholder/Label |
|------|-----|---------|-------------------|
| Jméno a příjmení | Text | Ano | "Vaše jméno" |
| E-mail | Email | Ano | "Váš e-mail" |
| Telefon | Tel | Ne | "Telefon (nepovinné)" |
| Plánovaná výše investice | Select | Ne | "Orientační výše investice" |
| | | | - Nevím / nechci uvádět |
| | | | - 5 000 - 50 000 Kč |
| | | | - 50 000 - 200 000 Kč |
| | | | - 200 000 Kč a více |
| Souhlas GDPR | Checkbox | Ano | "Souhlasím se zpracováním osobních údajů" |

### Microcopy

**Headline:** "Získejte podrobné informace"

**Subtext:**
"Po odeslání vám zašleme kompletní investiční dokumentaci. Žádný spam, žádné agresivní volání."

**CTA tlačítko:** "Odeslat žádost o dokumentaci"

**Pod formulářem:**
"Vaše údaje zpracováváme v souladu s GDPR. Kontaktovat vás budeme pouze v souvislosti s vaší žádostí."

**Po odeslání (success message):**
"Děkujeme za váš zájem. Dokumentaci vám zašleme na uvedený e-mail do 24 hodin."

### Design formuláře
- Tmavé pozadí sekce, světlý formulářový box
- Velké input fieldy (48-56px height)
- Jasné labely nad poli
- Viditelný focus state
- Jednoduchá validace bez agresivních chybových hlášek

---

## 6. Závěrečné UX shrnutí

### Proč tento web funguje pro investory

1. **Transparentnost od první vteřiny**
   - Všechny klíčové parametry (7%, 2 roky, 5000 Kč) viditelné okamžitě
   - Žádné skrývání podmínek nebo "háčků"
   - Proaktivní vysvětlení otázky ČNB dohledu

2. **Kredibilita skrze realitu**
   - Důraz na reálné podniky, ne abstraktní sliby
   - Zmínka o zvládnuté pandemii jako stress-test
   - Auditovaná společnost jako trust signal

3. **Minimální kognitivní zátěž**
   - Jednoduchá navigace (3 stránky)
   - Jasná hierarchie informací
   - FAQ odpovídá na všechny předvídatelné otázky

4. **Respekt k inteligenci investora**
   - Žádné countdown timery nebo FOMO taktiky
   - Žádné přehnané sliby nebo superlativy
   - Klidný, profesionální tón

### Jak web redukuje tření

- **Plně online proces** eliminuje potřebu osobních schůzek
- **FAQ předchází** nutnosti volat s dotazy
- **Formulář žádá minimum** informací (pouze nezbytné)
- **Jasný value exchange** - víte, co dostanete za své údaje

### Co má investor cítit po scrollování webu

1. **"Toto je reálná firma"** - ne startup, ne fintech experiment
2. **"Rozumím, do čeho investuji"** - jasné parametry, konkrétní projekt
3. **"Můžu si to ověřit"** - auditovaná společnost, veřejná čísla
4. **"Není to agresivní prodej"** - klidný tón, žádný tlak
5. **"Chci vědět víc"** - přirozená motivace vyplnit formulář

### Klíčové designové principy

| Princip | Implementace |
|---------|--------------|
| Jednoduchost | 3 stránky, minimální navigace |
| Transparentnost | Všechny parametry viditelné, FAQ |
| Kredibilita | Reálné podniky, zvládnutá krize, audit |
| Premium feeling | Tmavé tóny, kvalitní typografie, spacing |
| Respekt | Žádné manipulativní taktiky |
| Jasná akce | Jeden hlavní CTA - získat dokumentaci |

---

*Návrh vytvořen pro Con Gusto Finance s.r.o.*
*Verze 1.0*
