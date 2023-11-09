// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  typescript: {
    typeCheck: true
  },
  modules: [
    '@element-plus/nuxt',
    '@vueuse/nuxt',
    [
      'nuxt-security',
      {
        nonce: true,
        headers: {
          contentSecurityPolicy: {
            'style-src':
              process.env.NODE_ENV === 'production'
                ? ["'self'", "'nonce-{{nonce}}'"]
                : ["'self'", "'unsafe-inline'"],
            'script-src': ["'self'", "'nonce-{{nonce}}'", "'strict-dynamic'"],
            'script-src-attr': ["'self'", "'nonce-{{nonce}}'", "'strict-dynamic'"]
          },
          xFrameOptions: 'DENY'
        }
      }
    ],
    ['@pinia/nuxt', { autoImports: ['defineStore', 'storeToRefs'] }]
  ],
  app: {
    head: {
      title: '預設的網站名',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge'
        }
      ],
      link: [],
      style: [],
      script: [],
      noscript: [{ children: 'JS是執行網頁必要的，請不要禁止他！！' }]
    }
  },
  devServer: {
    port: 3999
  },
  vite: {
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  },
  imports: { dirs: ['stores'] }
})
