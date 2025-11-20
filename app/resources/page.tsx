import { Metadata } from 'next';
import { Suspense } from 'react';
import {
  getAllPosts,
  getFeaturedPosts,
  getAllCategories,
  getAllTags,
} from '@/lib/blog';
import BlogListing from '@/components/blog/BlogListing';
import { generateOrganizationSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Legal Resource Center | Expert Guides & Articles',
  description:
    'Comprehensive legal guides, articles, and resources on personal injury, car accidents, workers compensation, and more.',
  keywords: [
    'legal resources',
    'car accident guide',
    'personal injury articles',
    'legal advice',
    'injury law',
  ],
  openGraph: {
    title: 'Legal Resource Center | Expert Guides & Articles',
    description:
      'Comprehensive legal guides, articles, and resources on personal injury, car accidents, workers compensation, and more.',
    type: 'website',
    url: 'https://www.accidentpayments.com/resources',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Resource Center | Expert Guides & Articles',
    description:
      'Comprehensive legal guides, articles, and resources on personal injury, car accidents, workers compensation, and more.',
  },
};

export default function ResourcesPage() {
  const posts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  const baseUrl = 'https://www.accidentpayments.com';
  const organizationSchema = generateOrganizationSchema(baseUrl);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <BlogListing
          posts={posts}
          featuredPosts={featuredPosts}
          categories={categories}
          tags={tags}
        />
      </Suspense>
    </>
  );
}
