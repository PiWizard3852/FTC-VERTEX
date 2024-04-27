import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import prefetch from '@astrojs/prefetch'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://ftcvertex.org',
  integrations: [
    tailwind(),
    mdx(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    partytown(),
    sitemap(),
    prefetch({
      selector: 'a',
    }),
    react(),
    compress(),
  ],
})
