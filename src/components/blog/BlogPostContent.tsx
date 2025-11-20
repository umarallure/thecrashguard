'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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

      {/* Hero Image with centered title overlay */}
      <section className="relative h-[420px] md:h-[540px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        {/* Title and meta anchored at the bottom of the image */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end text-center px-6 pb-12 md:pb-20">
          <Badge variant="default" className="text-sm mb-2">{post.category}</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-black max-w-4xl">
            {post.title}
          </h1>
          <p className="text-sm md:text-base text-black/70 mt-3 max-w-2xl">{post.description}</p>
          {/* Author and meta details centered below the title */}
          <div className="flex items-center gap-4 text-sm text-black/70 mt-4">
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
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article>
                {/* Header intentionally minimal — meta appears on the hero */}

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
                {/* Mini CTA (copy of BlogListing's mini hero form) */}
                <Card className="p-6 bg-white shadow-lg">
                  <h3 className="font-bold text-xl text-center mb-2 text-accent">Speak to a Lawyer Near You.</h3>
                  <p className="text-sm text-center text-muted-foreground mb-4">Choose Accident Type</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { value: "auto-accident", label: "Auto Accident", icon: "https://cdn.prod.website-files.com/5d51b2f2cab8fe67a35631d8/5d5333ed64234cda8dd49833_Auto%20Accident.png" },
                      { value: "workers-comp", label: "Workers Comp", icon: "https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/5eea6d2e2b910eb2f3e54ca4_5d51b4f777dd5094a86c6527_accidentCom_workers_orange.png" },
                      { value: "personal-injury", label: "Personal Injury", icon: "https://cdn.prod.website-files.com/5d51b2f2cab8fe67a35631d8/5d5336e232c94a355821725a_accidentCom_injury_blue.svg" },
                      { value: "ssdi", label: "Wrongful Death", icon: "https://cdn.prod.website-files.com/5d51b2f2cab8fe67a35631d8/5d5335525c5ff36299792c53_Wrongful%20Death.png" },
                    ].map((type) => (
                      <Link key={type.value} href={`/case-review?type=${type.value}`} className="flex flex-col items-center gap-2 p-3 hover:bg-accent/5 rounded-lg transition-all group">
                        <div className="w-12 h-12">
                          <img src={type.icon} alt={type.label} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                        </div>
                        <span className="text-xs text-center font-medium text-gray-700">{type.label}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <select className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50">
                      <option>Auto Accident</option>
                      <option>Malpractice</option>
                      <option>Personal Injury</option>
                      <option>Workers Comp</option>
                      <option>Slip And Fall</option>
                      <option>Social Security (SSDI)</option>
                    </select>
                    <Input placeholder="Enter city or ZIP" className="bg-gray-50 border-gray-200 text-sm" />
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold" asChild>
                      <Link href="/case-review">Find Lawyer</Link>
                    </Button>
                  </div>
                </Card>

                {/* Category list (copy from BlogListing) */}
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

                <Card className="p-6">
                  <div className="flex gap-2 mb-4">
                    <Button variant={'outline'} size="sm" className="flex-1" onClick={() => {}}>Categories</Button>
                    <Button variant={'outline'} size="sm" className="flex-1" onClick={() => {}}>All States</Button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: 'CAR ACCIDENT RESOURCES', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb265601b5a94ef3da67dd_unnamed-11.png' },
                      { name: 'CASE STUDIES & INFOGRAPHICS', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2659ab8822bf67ab8631_research.png' },
                      { name: 'ESPAÑOL', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2654a731cde582681e09_united-states-of-america.png' },
                      { name: 'MEDICAL MALPRACTICE', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb265b01b5a94ef3da68a3_medical-checkup.png' },
                      { name: 'SSDI BENEFITS', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2659c7c1a9de2c288c25_health-insurance.png' },
                      { name: 'TOP NEWS & PRESS RELEASES', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb26564356c4b3e3a069a6_press-release_%2525285%252529.png' },
                      { name: 'WHAT TO DO AFTER A CAR ACCIDENT', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb261b01b5a94ef3da64b3_ambulance_%2525281%252529.png' },
                      { name: 'WORKERS COMPENSATION', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb265985cfd367bd6204f4_hammer_icon.png' },
                    ].map((category) => (
                      <Link key={category.name} href={`/resources?category=${encodeURIComponent(category.name)}`} className="flex flex-col items-center gap-2 p-4 border rounded-lg hover:border-accent hover:bg-accent/5 transition-all group text-center">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img src={category.icon} alt={category.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                        </div>
                        <span className="text-xs font-medium uppercase text-gray-700 leading-tight">
                          {category.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </Card>

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
