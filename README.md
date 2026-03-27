# Ma Fête - Landing Page

Landing page optimizada para móviles y conversión del parque temático privado Ma Fête.

## Stack
- HTML5 + CSS3 Vanilla + JavaScript vanilla
- Sin dependencias ni frameworks
- Deploy: Cloudflare Workers / Pages

## Estructura
```
├── index.html       # Página principal
├── style.css        # Estilos (mobile-first)
├── script.js        # Interactividad
├── wrangler.toml    # Config Cloudflare Workers
├── _headers         # Headers HTTP para CF Pages
└── _redirects       # Redirects para CF Pages
```

## Secciones
1. **Sticky Bar** – CTA fija al hacer scroll
2. **Navbar** – Logo + botón de pre-reserva
3. **Hero** – VSL de fondo con CTA principal
4. **Video VSL** – Video del parque
5. **Features** – Por qué Ma Fête
6. **Planes** – Aventura Estándar & Máxima con precios
7. **Testimonios** – Social proof
8. **Proceso** – 3 pasos para reservar
9. **Formulario GHL** – Pre-reserva integrada
10. **FAQ** – Preguntas frecuentes
11. **Final CTA** – Último empuje de conversión
12. **Footer** + WhatsApp flotante

## Deploy a Cloudflare Workers

### Usando Wrangler CLI
```bash
npm install -g wrangler
wrangler login
wrangler deploy
```

### Usando Cloudflare Pages (Dashboard)
1. Conecta el repositorio GitHub en Cloudflare Pages
2. Framework preset: None
3. Build command: (vacío)
4. Build output directory: `/`

## Variables de entorno
No hay variables de entorno requeridas.

## Contacto
- Tel: 849-710-9225
- GHL Calendar ID: LxCNFY123qi4fY2EZysN
