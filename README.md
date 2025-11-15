# 🔥 Dante's Inferno - Landing Page

Landing page premium para la cepa **DANTE'S INFERNO** de **MAD TIKI**, diseñada para CULTIMED Dispensary.

## 🎨 Características

- ⚡ **Next.js 14+** con App Router
- 🎭 **GSAP Animations** con ScrollTrigger
- 🎨 **Tailwind CSS** para diseño moderno
- 📱 **Responsive Design** optimizado para móviles
- 🍃 **Estilo Leafly-inspired** con diseño limpio y profesional
- 🔥 **Tema Dante's Inferno** con colores infernales (naranjas, rojos, púrpuras)

## 🚀 Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en modo desarrollo
npm run dev

# 3. Abrir en navegador
# http://localhost:3000
```

## 📦 Dependencias Principales

- `next`: ^14.2.0
- `react`: ^18.3.0
- `gsap`: ^3.12.5 (animaciones)
- `tailwindcss`: ^3.4.0
- `typescript`: ^5.3.0

## 🎯 Secciones de la Landing

1. **Hero Section** - Título animado con parallax
2. **Strain Details** - Cards con THC, CBD y tipo de cepa
3. **Effects** - Efectos principales con iconos
4. **Terpene Profile** - Barras animadas de terpenos
5. **Flavors** - Tags interactivos de sabores
6. **CTA Section** - Call-to-action destacado
7. **Footer** - Información legal

## 🎨 Paleta de Colores

```javascript
inferno: {
  orange: "#FF6B35",  // Naranja fuego
  red: "#C92A2A",     // Rojo intenso
  purple: "#5F3DC4",  // Púrpura profundo
  dark: "#1A1B26",    // Fondo oscuro
  darker: "#0F1015",  // Fondo más oscuro
}

leafly: {
  green: "#5CB660",      // Verde Leafly
  darkGreen: "#2C6E3D",  // Verde oscuro
}
```

## 🎬 Animaciones GSAP

- **Hero Title**: Fade in + slide up
- **Parallax Background**: Scroll-based
- **Strain Cards**: Staggered entrance
- **Effects Items**: Slide from left
- **Terpene Bars**: Scale animation
- **CTA Button**: Scale on hover

## 📁 Estructura del Proyecto

```
dantes-inferno-landing/
├── app/
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Layout con metadata
│   └── globals.css       # Estilos globales
├── public/
│   └── (assets)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🔧 Personalización

### Cambiar colores
Edita `tailwind.config.ts` en la sección `theme.extend.colors`

### Modificar animaciones
Edita los valores de GSAP en `page.tsx` dentro de `useEffect`

### Actualizar contenido
Modifica los textos directamente en `page.tsx`

## 📱 Responsive

- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large screens (1920px+)

## 🌐 SEO

Incluye:
- Meta tags optimizados
- Open Graph tags
- Descripción rica en keywords
- Estructura semántica HTML5

## 📄 Licencia

© 2025 CULTIMED Dispensary | MAD TIKI

---

**Nota**: Esta landing page está diseñada para un dispensario de cannabis. Asegúrate de cumplir con todas las regulaciones locales sobre publicidad de cannabis.

## 🆘 Soporte

Para más información sobre MAD TIKI y CULTIMED, contacta con el dispensario.
