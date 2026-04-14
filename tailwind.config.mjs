// tailwind.config.mjs
// Configuración personalizada de Tailwind para Cine-Hub
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"],
  theme: {
    extend: {
      // Paleta de colores propia de Cine-Hub
      colors: {
        brand: {
          dark:   "#0a0f1a",   // fondo principal
          darker: "#060b14",   // fondo alternado
          blue:   "#2563eb",   // azul primario
          accent: "#3b82f6",   // azul claro / hover
          glow:   "#60a5fa",   // brillo / resaltado
        },
      },
      // Fuentes registradas en Google Fonts (cargadas en Layout.astro)
      fontFamily: {
        display:    ["Bebas Neue", "cursive"],
        body:       ["Barlow", "sans-serif"],
        condensed:  ["Barlow Condensed", "sans-serif"],
      },
      // Sombras de marca
      boxShadow: {
        "blue-glow":  "0 0 20px rgba(37,99,235,0.35)",
        "blue-glow-lg": "0 0 40px rgba(37,99,235,0.25)",
      },
      // Gradientes reutilizables como utilidades de fondo
      backgroundImage: {
        "hero-gradient":    "linear-gradient(to right, #0a0f1a 0%, rgba(10,15,26,0.70) 50%, transparent 100%)",
        "card-gradient":    "linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(6,11,20,0.80) 100%)",
        "section-gradient": "linear-gradient(to bottom, #0a0f1a 0%, #060b14 100%)",
      },
      // Animaciones personalizadas
      keyframes: {
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
        pulse_slow: {
          "0%, 100%": { opacity: "0.4" },
          "50%":      { opacity: "0.8" },
        },
      },
      animation: {
        "fade-in-up":  "fadeInUp 0.7s ease-out forwards",
        "shimmer":     "shimmer 2.5s linear infinite",
        "pulse-slow":  "pulse_slow 3s ease-in-out infinite",
      },
      // Espaciado extra para layouts cinematográficos
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      // Radios de borde
      borderRadius: {
        "4xl": "2rem",
      },
      // Transiciones
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [
    // Descomenta si instalas @tailwindcss/typography para páginas de reseñas/artículos:
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/forms"),
  ],
};
