import { Feed } from 'feed';
import { getAllPosts } from '@/lib/blog';

export async function GET() {
  const baseUrl = 'https://www.accidentpayments.com';
  const posts = getAllPosts();

  const feed = new Feed({
    title: 'CaseWise Solutions Blog',
    description:
      'Expert legal guides and resources on personal injury, car accidents, and workers compensation.',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    image: `${baseUrl}/logo.png`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, CaseWise Solutions`,
    updated: new Date(),
    generator: 'CaseWise Solutions',
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
      json: `${baseUrl}/feed.json`,
      atom: `${baseUrl}/atom.xml`,
    },
    author: {
      name: 'CaseWise Solutions',
      email: 'info@casewisesolutions.com',
      link: baseUrl,
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${baseUrl}/blog/${post.slug}`,
      link: `${baseUrl}/blog/${post.slug}`,
      description: post.description,
      content: post.description,
      author: [
        {
          name: post.author,
        },
      ],
      date: new Date(post.date),
      image: `${baseUrl}${post.image}`,
      category: [
        {
          name: post.category,
        },
      ],
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
