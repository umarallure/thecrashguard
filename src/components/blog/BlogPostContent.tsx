'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Calendar,
  Clock,
  User,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { BlogPost, TableOfContentsItem } from '@/lib/blog';

interface BlogPostContentProps {
  post: BlogPost;
  compiledContent: any;
  toc: TableOfContentsItem[];
  relatedPosts: BlogPost[];
}

// Consistent date formatting to prevent hydration errors
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC'
  });
};

export default function BlogPostContent({
  post,
  compiledContent,
  toc,
  relatedPosts,
}: BlogPostContentProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      shareUrl
    )}&text=${encodeURIComponent(post.title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      shareUrl
    )}&title=${encodeURIComponent(post.title)}`,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <section className="py-4 border-b">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="/resources"
              className="hover:text-foreground transition-colors"
            >
              Resources
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium line-clamp-1">
              {post.title}
            </span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article>
                {/* Header */}
                <header className="mb-8 space-y-4">
                  <Badge variant="default" className="text-sm">
                    {post.category}
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                    {post.title}
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    {post.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </header>

                <Separator className="my-8" />

                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                  {compiledContent}
                </div>

                <Separator className="my-12" />

                {/* Share Buttons */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Share this article</h3>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(shareLinks.facebook, '_blank')}
                    >
                      <Facebook className="w-4 h-4 mr-2" />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(shareLinks.twitter, '_blank')}
                    >
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(shareLinks.linkedin, '_blank')}
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyLink}
                    >
                      <Link2 className="w-4 h-4 mr-2" />
                      {copied ? 'Copied!' : 'Copy Link'}
                    </Button>
                  </div>
                </div>
              </article>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <section className="mt-16">
                  <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                      >
                        <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all h-full">
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-4 space-y-2">
                            <Badge variant="secondary" className="text-xs">
                              {relatedPost.category}
                            </Badge>
                            <h3 className="font-bold text-sm group-hover:text-accent transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h3>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {relatedPost.description}
                            </p>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents */}
                {toc.length > 0 && (
                  <Card className="p-6">
                    <h3 className="font-bold text-lg mb-4">Table of Contents</h3>
                    <nav className="space-y-2">
                      {toc.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block text-sm hover:text-accent transition-colors ${
                            item.level === 2
                              ? 'font-medium'
                              : 'pl-4 text-muted-foreground'
                          }`}
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </Card>
                )}

                {/* CTA Card */}
                <Card className="p-6 bg-accent text-accent-foreground">
                  <h3 className="font-bold text-xl mb-3">Need Legal Help?</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Our experienced legal team is ready to review your case for
                    free.
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full"
                    asChild
                  >
                    <Link href="/case-review">
                      Get Free Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </Card>

                {/* Contact Info */}
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href="tel:+15551234567"
                        className="text-accent hover:underline"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:info@casewisesolutions.com"
                        className="text-accent hover:underline"
                      >
                        info@casewisesolutions.com
                      </a>
                    </div>
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-muted-foreground">
                        Mon-Fri: 9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Take Action?
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't wait to protect your rights. Contact us today for a free case
              evaluation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/case-review">Start Your Case Review</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/resources">Browse More Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
