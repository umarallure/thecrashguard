# Blog System Documentation

## Overview

Your site now has a fully functional, SEO-optimized blog system built with Next.js 14, MDX, and comprehensive schema markup.

## Features Implemented

### ✅ MDX Blog Engine
- **Location**: `/content/posts/[slug].mdx`
- **Processing**: Automatic MDX compilation with GitHub Flavored Markdown
- **Typography**: Beautiful prose styling using `@tailwindcss/typography`
- **Headings**: Auto-generated IDs and anchor links for deep linking

### ✅ SEO Optimization
- **Page Metadata**: Automatic title, description, keywords generation
- **OpenGraph**: Full OG tags for social media sharing
- **Twitter Cards**: Optimized Twitter card metadata
- **Canonical URLs**: Proper canonical URL configuration
- **Reading Time**: Automatic calculation of reading time

### ✅ Schema Markup (JSON-LD)
Located in `/lib/schema.ts`:
- **Organization Schema**: Company information (homepage)
- **LocalBusiness Schema**: Legal service details (homepage)
- **Article Schema**: Blog post structured data
- **Breadcrumb Schema**: Navigation hierarchy
- **FAQ Schema**: FAQ page markup (ready to use)

### ✅ Auto-Generated Files
- **Sitemap**: `/app/sitemap.ts` - Auto-generates sitemap.xml
- **Robots.txt**: `/app/robots.ts` - Search engine directives
- **RSS Feed**: `/app/rss.xml/route.ts` - RSS 2.0 feed generation

### ✅ Blog Features
- **Featured Posts**: Highlight important articles
- **Categories**: Organize by topic (Car Accidents, etc.)
- **Tags**: Multi-tag support for better discovery
- **Search**: Full-text search across all posts
- **Filters**: Category and tag filtering
- **Pagination**: Automatic pagination for large post lists
- **Related Posts**: Smart algorithm based on tags and categories
- **Table of Contents**: Auto-generated from H2/H3 headings
- **Share Buttons**: Facebook, Twitter, LinkedIn, Copy Link
- **Responsive Images**: Optimized hero images

## File Structure

```
content/posts/                          # MDX blog posts
  ├── what-to-do-after-car-accident.mdx
  ├── how-to-determine-fault-car-accident.mdx
  └── rideshare-accidents-guide.mdx

lib/                                    # Utilities
  ├── blog.ts                           # MDX processing & queries
  └── schema.ts                         # JSON-LD schema generators

app/
  ├── layout.tsx                        # Root layout with org schema
  ├── sitemap.ts                        # Auto sitemap generation
  ├── robots.ts                         # Robots.txt generation
  ├── rss.xml/route.ts                  # RSS feed endpoint
  ├── resources/page.tsx                # Blog listing page
  └── blog/[slug]/page.tsx              # Individual blog post

src/components/blog/
  ├── BlogListing.tsx                   # Blog listing with filters
  └── BlogPostContent.tsx               # Blog post template

src/components/home/
  └── ResourceGallery.tsx               # Updated to link to blog
```

## How to Add a New Blog Post

1. Create a new `.mdx` file in `/content/posts/[slug].mdx`

2. Add frontmatter at the top:
```mdx
---
title: "Your Article Title"
description: "A compelling description for SEO and previews"
date: "2024-11-19"
author: "Author Name"
tags: ["tag1", "tag2", "tag3"]
image: "/images/blog/your-image.jpg"
category: "Category Name"
readingTime: "5 min read"
featured: true
---

# Your Article Title

Your content here...
```

3. Write your content using Markdown/MDX
4. Save the file - it will automatically appear on the blog!

## Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Article title (also used for SEO) |
| `description` | string | ✅ | Meta description for SEO |
| `date` | string | ✅ | Publication date (YYYY-MM-DD) |
| `author` | string | ✅ | Author name |
| `tags` | array | ✅ | Array of tags for categorization |
| `image` | string | ✅ | Hero image path |
| `category` | string | ✅ | Primary category |
| `readingTime` | string | ❌ | Optional (auto-calculated if omitted) |
| `featured` | boolean | ❌ | Show in featured section (default: false) |

## Available Functions (lib/blog.ts)

### Query Functions
- `getAllPosts()` - Get all posts sorted by date
- `getFeaturedPosts()` - Get featured posts (max 3)
- `getPostBySlug(slug)` - Get single post by slug
- `getPostsByCategory(category)` - Filter by category
- `getPostsByTag(tag)` - Filter by tag
- `getRelatedPosts(slug, limit)` - Get related posts
- `searchPosts(query)` - Full-text search
- `getAllCategories()` - Get unique categories
- `getAllTags()` - Get unique tags
- `getTableOfContents(content)` - Extract ToC from content
- `getCompiledMDX(slug)` - Get compiled MDX content

## SEO Best Practices

### ✅ Implemented
- Meta titles (under 60 characters)
- Meta descriptions (under 160 characters)
- OpenGraph tags for social sharing
- Twitter card metadata
- JSON-LD structured data
- Canonical URLs
- Automatic sitemap generation
- RSS feed
- Semantic HTML structure
- Fast page load with ISR
- Mobile-responsive design
- Clean, readable URLs

### 📝 Recommendations
1. Add high-quality images (1200x630 for OG images)
2. Use descriptive, keyword-rich titles
3. Write compelling meta descriptions
4. Interlink related articles
5. Keep URLs short and descriptive
6. Update content regularly
7. Monitor search performance with Google Search Console

## URLs & Routes

- **Blog Listing**: `/resources` or `/blog`
- **Individual Posts**: `/blog/[slug]`
- **Sitemap**: `/sitemap.xml`
- **RSS Feed**: `/rss.xml`
- **Robots**: `/robots.txt`

## Sample Blog Posts

Three comprehensive articles are included:

1. **What to Do After a Car Accident** - Complete step-by-step guide
2. **How to Determine Fault** - Fault determination and liability
3. **Rideshare Accidents Guide** - Uber/Lyft accident claims

## Customization

### Change Blog URL
Edit `/app/resources/page.tsx` or move to `/app/blog/page.tsx`

### Modify Schema
Edit `/lib/schema.ts` to update organization details, contact info, etc.

### Styling
- Blog cards: `/src/components/blog/BlogListing.tsx`
- Post template: `/src/components/blog/BlogPostContent.tsx`
- MDX components: `/mdx-components.tsx`
- Prose styles: Tailwind `@tailwindcss/typography`

### Add More Schema Types
Import and use from `/lib/schema.ts`:
- `generateFAQSchema()` - For FAQ pages
- `generateBreadcrumbSchema()` - For breadcrumbs
- Custom schemas as needed

## Performance

- **Static Generation**: All blog pages are pre-rendered at build time
- **ISR**: Incremental Static Regeneration for updates
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting per route
- **Fast Navigation**: Prefetching and client-side routing

## Next Steps

1. Add actual blog images to `/public/images/blog/`
2. Create more blog posts in `/content/posts/`
3. Update schema.ts with real business information
4. Set up Google Analytics (already configured in layout.tsx)
5. Submit sitemap to Google Search Console
6. Set up social media OG image generation
7. Add author pages if needed
8. Implement blog categories page
9. Add newsletter signup integration
10. Monitor SEO performance and iterate

## Support

For questions or issues with the blog system, refer to:
- Next.js Documentation: https://nextjs.org/docs
- MDX Documentation: https://mdxjs.com
- Schema.org: https://schema.org
- Google Search Central: https://developers.google.com/search
