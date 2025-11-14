# Sito Web Fotografo Grottaglie

Sito web statico SEO-oriented per fotografo professionista, con landing pages direct response e form di lead generation.

## 📋 Descrizione

Progetto completo comprendente:
- **Sito vetrina principale** con 5 pagine (Home, Chi Sono, Servizi, Portfolio, Contatti)
- **4 Landing Pages** stile direct response (Dan Kennedy) per servizi specifici
- **Form Netlify** per lead generation
- **SEO ottimizzato** per ricerca locale "fotografo Grottaglie"
- **Design responsive** mobile-first
- **Performance ottimizzate** (CSS e JS minimali)

## 🗂️ Struttura del Progetto

```
/
├── index.html                  # Homepage
├── about.html                  # Chi Sono
├── services.html              # Servizi
├── portfolio.html             # Portfolio con lightbox
├── contact.html               # Contatti con form Netlify
├── sitemap.xml                # Sitemap SEO
├── robots.txt                 # File robots.txt
├── _redirects                 # Netlify redirects
├── css/
│   └── style.css              # CSS principale responsive
├── js/
│   └── main.js                # JavaScript (lightbox, menu mobile, animazioni)
├── images/                    # Cartella per immagini (da popolare)
└── landing/                   # Landing pages direct response
    ├── fotografo-matrimonio-grottaglie.html
    ├── fotografo-comunione-grottaglie.html
    ├── fotografo-crescita-grottaglie.html
    └── fotografo-18-anni-grottaglie.html
```

## 🚀 Deploy su Netlify

### Metodo 1: Deploy da Git (Consigliato)

1. Push del codice su GitHub/GitLab
2. Accedi a [Netlify](https://app.netlify.com)
3. Click su "New site from Git"
4. Collega il repository
5. Configurazione build:
   - **Build command:** (lasciare vuoto per sito statico)
   - **Publish directory:** `/` (root del progetto)
6. Click su "Deploy site"

### Metodo 2: Deploy Manuale (Drag & Drop)

1. Accedi a [Netlify](https://app.netlify.com)
2. Trascina l'intera cartella del progetto nell'area "Drop"
3. Attendi il completamento del deploy

### Configurazione Netlify Forms

I form sono già configurati con:
```html
<form name="contact" method="POST" data-netlify="true">
```

Netlify rileva automaticamente i form al deploy. Le submission arriveranno nella dashboard Netlify.

Per ricevere email di notifica:
1. Dashboard Netlify → Site settings → Forms
2. "Form notifications" → "Add notification"
3. Configura email di destinazione

## 📝 Personalizzazione

### Dati da Modificare

1. **Informazioni di contatto NAP** (cerca `Via Roma 123` e sostituisci):
   - Indirizzo
   - Telefono: `+39 099 1234567`
   - Email: `info@studiofotografico.it`

2. **URL del sito** (cerca `https://www.tuodominio.it`):
   - Sostituisci in tutti i file HTML
   - Aggiorna in `sitemap.xml`
   - Aggiorna in `_redirects`

3. **Nome dello studio** (cerca `Studio Fotografico Grottaglie`)

4. **Coordinate GPS** in `index.html` (Schema.org):
   ```json
   "latitude": 40.5378,
   "longitude": 17.4317
   ```

### Immagini da Aggiungere

Crea le seguenti immagini nella cartella `/images/`:

**Homepage:**
- `hero-bg.jpg` (1920x1080px) - Sfondo hero
- `about-preview.jpg` (800x600px)
- `portfolio-1.jpg` a `portfolio-4.jpg` (600x600px)
- `og-image.jpg` (1200x630px) - OpenGraph

**About:**
- `photographer.jpg` (800x800px) - Foto del fotografo

**Services:**
- `service-matrimoni.jpg` (800x600px)
- `service-comunioni.jpg` (800x600px)
- `service-eventi.jpg` (800x600px)
- `service-ritratti.jpg` (800x600px)
- `service-aziendali.jpg` (800x600px)
- `service-book.jpg` (800x600px)

**Portfolio:**
- `gallery/matrimonio-1.jpg` a `matrimonio-5.jpg` (1200x900px)
- `gallery/ritratto-1.jpg` a `ritratto-4.jpg` (1200x900px)
- `gallery/comunione-1.jpg`, `comunione-2.jpg`, `cresima-1.jpg` (1200x900px)
- `gallery/evento-1.jpg` a `evento-3.jpg` (1200x900px)

**Contact:**
- `map-grottaglie.jpg` (600x400px) - Mappa statica (opzionale)

### Ottimizzazione Immagini

Per prestazioni ottimali:
- Converti in formato **WebP** (supporto browser moderno)
- Comprimi con tool come TinyPNG o ImageOptim
- Mantieni dimensioni appropriate (non superiori a quanto indicato)

## 🎨 Personalizzazione Stile

Modifica i colori in `css/style.css` nelle variabili CSS:

```css
:root {
    --primary-color: #2c3e50;      /* Colore principale */
    --secondary-color: #c9a961;    /* Colore secondario (oro)*/
    --accent-color: #8b7355;       /* Colore accento */
    /* ... */
}
```

## 📊 SEO

### Meta Tag
Ogni pagina ha:
- `<title>` ottimizzato
- `meta description` unica
- `meta keywords`
- OpenGraph tags (Facebook)
- Twitter Card tags
- Canonical URL

### Schema.org
Homepage include markup LocalBusiness/Photographer per Google My Business.

### Sitemap
`sitemap.xml` include tutte le pagine. Invia a:
- Google Search Console
- Bing Webmaster Tools

### Google Analytics (Opzionale)

Aggiungi prima del tag `</head>` in ogni pagina:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔧 Funzionalità JavaScript

- **Menu mobile responsive** - Toggle menu su dispositivi piccoli
- **Lightbox portfolio** - Galleria con navigazione keyboard
- **Filtro portfolio** - Filtro categorie con animazioni
- **Smooth scroll** - Scroll fluido per anchor link
- **Form validation** - Validazione client-side dei form
- **Lazy loading** - Caricamento immagini ottimizzato
- **Intersection Observer** - Animazioni scroll-based

## 📱 Responsive Design

Design ottimizzato per:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

Breakpoint principali in `style.css`:
- `@media (max-width: 768px)`
- `@media (max-width: 480px)`

## 🔐 Privacy & GDPR

Ricorda di:
1. Creare una **Privacy Policy** (link presente nei footer)
2. Aggiungere **Cookie banner** se usi analytics
3. Configurare **Netlify Forms** con consenso GDPR

## 📈 Performance

Il sito è ottimizzato per:
- ⚡ Caricamento veloce (< 3s)
- 📱 Mobile-first design
- ♿ Accessibilità (HTML semantico, ARIA labels)
- 🔍 SEO tecnico (sitemap, robots.txt, meta tags)

## 🆘 Supporto

Per problemi o domande:
- Documentazione Netlify: https://docs.netlify.com
- Netlify Forms: https://docs.netlify.com/forms/setup/

## 📄 Licenza

Progetto sviluppato per Studio Fotografico Grottaglie.
© 2024 Tutti i diritti riservati.
