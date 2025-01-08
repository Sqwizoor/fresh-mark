import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'next-sanity-blog-2024',

  projectId: 'uupoh2nj',
  dataset: 'production',
basePath: '/https://fresh-mark-sqwizoors-projects.vercel.app',
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

