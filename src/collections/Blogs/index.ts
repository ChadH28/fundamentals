import type { CollectionConfig } from 'payload'

const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    defaultColumns: ['title', 'author', 'createdAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}

export default Blogs
