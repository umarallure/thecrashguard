import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getAllPostSlugs,
  getPostBySlug,
  getCompiledMDX,
  getTableOfContents,
  getRelatedPosts,
} from '@/lib/blog';
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
} from '@/lib/schema';
import BlogPostContent from '@/components/blog/BlogPostContent';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const baseUrl = 'https://www.accidentpayments.com';

  return {
    title: `${post.title} | CaseWise Solutions`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: `${baseUrl}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      url: `${baseUrl}/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${baseUrl}${post.image}`],
    },
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const compiledPost = await getCompiledMDX(params.slug);

  if (!compiledPost) {
    notFound();
  }

  const post = compiledPost;
  const toc = getTableOfContents(post.content || '');
  const relatedPosts = getRelatedPosts(params.slug, 3);

  const baseUrl = 'https://www.accidentpayments.com';
  const articleSchema = generateArticleSchema(post, baseUrl);
  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: 'Home', url: '/' },
      { name: 'Resources', url: '/resources' },
      { name: post.title, url: `/blog/${post.slug}` },
    ],
    baseUrl
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <BlogPostContent
        post={post}
        compiledContent={compiledPost.compiledContent}
        toc={toc}
        relatedPosts={relatedPosts}
      />
    </>
  );
}
