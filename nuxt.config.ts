// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/test-utils",
  ],
  app: {
    head: {
      // udpate Nuxt defaults
      charset: "utf-8",
      // 모바일에서 기본/확대가능 배율 지정
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  },
});
