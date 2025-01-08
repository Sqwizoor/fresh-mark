import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'uupoh2nj',
  dataset: 'production',
  apiVersion: '2023-12-25', // Use the latest API version
  useCdn: false,
})

