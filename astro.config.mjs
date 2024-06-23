import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import auth from "auth-astro";
import node from '@astrojs/node'; // Importa el adaptador de Node.js

export default defineConfig({
  output: 'server', // Configura la salida del proyecto para SSR
  adapter: node({
    mode: 'standalone' // Especifica el modo aquí
  }),
  integrations: [tailwind(), auth()],
});
