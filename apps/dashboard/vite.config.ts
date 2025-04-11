/** @type {import('vite').UserConfig} */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  // Carrega variáveis de ambiente do arquivo .env
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  const baseApiUrl = env.VITE_API_BASE_URL || 'http://localhost:3000'

  if (command === 'serve') {
    return {
      plugins: [react()],
      server: {
        cors: {
          origin: 'http://localhost:3000',
          methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
          allowedHeaders: ['Content-Type', 'Authorization'],
          credentials: true,
        },
        proxy: {
          '/api': {
            target: baseApiUrl,
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace(/^\/api/, ''),
          },
        },
      },
    }
  } else {
    return {
      plugins: [react()],
      base: '/',
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
        emptyOutDir: true,
        sourcemap: false,
        // rollupOptions: {
        //   output: {
        //     assetFileNames: 'assets/[name]-[hash][extname]',
        //     entryFileNames: 'assets/[name]-[hash].js',
        //   },
        // },
      },

      define: {
        'process.env.VITE_API_BASE_URL': JSON.stringify(
          env.VITE_API_BASE_URL || '/api',
        ),
      },
    }
  }
})

// /** @type {import('vite').UserConfig} */
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig(({ command }) => {
//   if (command === 'serve') {
//     return {
//       // dev specific config
//       server: {
//         cors: {
//           origin: 'http://localhost:3000', // Permitir requisições desse domínio
//           methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//           allowedHeaders: ['Content-Type', 'Authorization'],
//           credentials: true, // Permitir envio de cookies e credenciais
//         },
//         proxy: {
//           '/api': {
//             target: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000', // API do Next.js
//             changeOrigin: true,
//             secure: false, // Evita problemas com HTTPS em ambiente local
//             rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' do caminho da requisição
//           },
//         },
//       },
//     }
//   } else {
//     // command === 'build'
//     return {
//       // build specific config
//       plugins: [react()],
//       base: '/', // Isso é crucial para os caminhos dos assets
//       build: {
//         outDir: 'dist',
//         assetsDir: 'assets',
//         emptyOutDir: true,
//         sourcemap: false, // Desative para produção
//       },
//     }
//   }
// })

// export default defineConfig({

//   plugins: [react()],
//   base: '/', // Isso é crucial para os caminhos dos assets
//   build: {
//     outDir: 'dist',
//     assetsDir: 'assets',
//     emptyOutDir: true,
//     sourcemap: false // Desative para produção
//   },

//   server: {
//     cors: {
//       origin: 'http://localhost:3000', // Permitir requisições desse domínio
//       methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//       allowedHeaders: ['Content-Type', 'Authorization'],
//       credentials: true, // Permitir envio de cookies e credenciais
//     },
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3000', // API do Next.js
//         changeOrigin: true,
//         secure: false, // Evita problemas com HTTPS em ambiente local
//         rewrite: (path) => path.replace(/^\/api/, ''), // Remove '/api' do caminho da requisição
//       },
//     },
//   },
// })
