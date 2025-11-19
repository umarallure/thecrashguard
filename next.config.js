import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['cdn.prod.website-files.com', 'images.unsplash.com'],
  },
  webpack: (config, { isServer }) => {
    // Exclude Vite-specific pages from Next.js build
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
  // Exclude Vite pages from static generation and page discovery
  experimental: {
    outputFileTracingExcludes: {
      '*': ['src/vite-pages/**/*', 'src/pages/**/*', 'src/vite-pages/NotFound.tsx', 'src/vite-pages/Index.tsx', 'src/vite-pages/CaseReview.tsx', 'src/vite-pages/Resources.tsx'],
    },
  },
  // Explicitly exclude vite-pages from page discovery
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
