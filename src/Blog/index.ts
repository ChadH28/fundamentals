import { GlobalConfig } from 'payload'


const BlogsPage: GlobalConfig = {
  slug: 'blog',
  label: 'Blog Page',
  admin: {
    description: 'Configure the top blogs displayed on the /blog page.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Page Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Page Description',
      required: false,
    },
    {
      name: 'featuredBlogs',
      type: 'relationship',
      relationTo: 'blogs', // Make sure you have a Blogs collection
      hasMany: true,
      maxRows: 4, // Limit to 4 blogs
      label: 'Featured Blogs',
      required: true,
    },
  ],
}

export default BlogsPage
