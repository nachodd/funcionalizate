import { fileURLToPath } from "url";
// import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

//import tailwind from "tailwindcss";
//import autoprefixer from "autoprefixer";
// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@vueuse/nuxt'
  ],

  app: {
    head: {
      title: 'Funcionalizate',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Funcionalizate - Fitness and Health' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devServer: {
    port: 3333
  },

  vite: {
    // css: {
    //   postcss: {
    //     plugins: [tailwind(), autoprefixer()],
    //   },
    // },
    // plugins: [vue(), svgLoader()],
    plugins: [svgLoader()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./", import.meta.url)),
      },
    },
  }

})
