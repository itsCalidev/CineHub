// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // Cambia esto por tu URL real en Vercel
  site: "https://cine-hub.vercel.app",

  integrations: [
    tailwind({
      // Aplica los estilos base de Tailwind automáticamente
      applyBaseStyles: true,
      // Apunta al archivo de configuración personalizado
      configFile: "./tailwind.config.mjs",
    }),
  ],

  // Configuración de output para Vercel (estático por defecto)
  output: "static",

  // Opcional: habilita compresión de imágenes con Sharp
  // image: {
  //   service: sharpImageService(),
  // },
});
