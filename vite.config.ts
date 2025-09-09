import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv, type UserConfig } from 'vite'

export default defineConfig(({ mode }: UserConfig) => {
  if (!mode) return {}

  const config = loadEnv(mode, process.cwd(), '')

  console.log(`🍀 Mode: ${mode}`)
  console.log(`🍀 Env: ${config.VITE_ENVIRONMENT}`)

  return {
    plugins: [react(), tailwindcss()],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  }
})
