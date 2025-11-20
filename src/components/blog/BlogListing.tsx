'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Search, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/lib/blog';

interface BlogListingProps {
  posts: BlogPost[];
  featuredPosts: BlogPost[];
  categories: string[];
  tags: string[];
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

export default function BlogListing({
  posts,
  featuredPosts,
  categories,
  tags,
}: BlogListingProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<'categories' | 'states'>('categories');
  const postsPerPage = 9;
  const searchParams = useSearchParams();

  // Initialize category/tag filters from URL query params when present
  useEffect(() => {
    if (!searchParams) return;
    const cat = searchParams.get('category');
    const tag = searchParams.get('tag');
    if (cat) setSelectedCategory(cat);
    if (tag) setSelectedTag(tag);
  }, [searchParams]);

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      !selectedCategory || post.category === selectedCategory;

    const matchesTag = !selectedTag || post.tags.includes(selectedTag);

    return matchesSearch && matchesCategory && matchesTag;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setCurrentPage(1);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">
              LEGAL RESOURCES
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Resource Center
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto" />
            <p className="text-lg text-muted-foreground">
              Expert legal guides and insights to help you navigate your case
            </p>
          </div>
        </div>
      </section>

      {/* Re-designed layout: left for posts, right for sidebar */}
      <section className="py-8 md:py-12 bg-muted/20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left: Featured + Posts */}
            <div className="md:col-span-8">
              {/* Search (smaller, above grid) */}
              <div className="relative max-w-2xl mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-10 h-12 text-lg"
                />
              </div>

              {/* Posts grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {currentPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all h-full flex flex-col">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 space-y-3 flex-1 flex flex-col">
                        <div className="flex items-center gap-2"><Badge variant="secondary">{post.category}</Badge></div>
                        <h3 className="font-bold text-xl group-hover:text-accent transition-colors line-clamp-2">{post.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 flex-1">{post.description}</p>
                        <div className="flex items-center justify-between pt-2 border-t">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground"><User className="w-3 h-3" />{post.author}</div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" />{post.readingTime}</div>
                        </div>
                        <div className="flex items-center gap-1 text-accent font-medium text-sm">Read More <ArrowRight className="w-4 h-4" /></div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2">
                  <Button variant="outline" onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))} disabled={currentPage === 1}>Previous</Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button key={page} variant={currentPage === page ? 'default' : 'outline'} onClick={() => setCurrentPage(page)}>{page}</Button>
                  ))}
                  <Button variant="outline" onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages}>Next</Button>
                </div>
              )}
            </div>

            {/* Right: Sidebar */}
            <aside className="md:col-span-4">
              <div className="space-y-6 sticky top-20">
                {/* CTA widget - Mini Hero Form */}
                <Card className="p-6 bg-white shadow-lg">
                  <h3 className="font-bold text-xl text-center mb-2 text-accent">Speak to a Lawyer Near You.</h3>
                  <p className="text-sm text-center text-muted-foreground mb-4">Choose Accident Type</p>
                  
                  {/* Accident Type Icons */}
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

                  {/* Dropdown and Location */}
                  <div className="space-y-3">
                    <select className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-gray-50">
                      <option>Auto Accident</option>
                      <option>Malpractice</option>
                      <option>Personal Injury</option>
                      <option>Workers Comp</option>
                      <option>Slip And Fall</option>
                      <option>Social Security (SSDI)</option>
                    </select>
                    
                    <Input placeholder="RWP, Islamabad Capital Territory" className="bg-gray-50 border-gray-200 text-sm" />
                    
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold" asChild>
                      <Link href="/case-review">Find Lawyer</Link>
                    </Button>
                  </div>
                </Card>

                {/* Category list */}
                <Card className="p-6">
                  <div className="flex gap-2 mb-4">
                    <Button 
                      variant={activeTab === 'categories' ? 'default' : 'outline'} 
                      size="sm" 
                      onClick={() => setActiveTab('categories')}
                      className="flex-1"
                    >
                      Categories
                    </Button>
                    <Button 
                      variant={activeTab === 'states' ? 'default' : 'outline'} 
                      size="sm" 
                      onClick={() => setActiveTab('states')}
                      className="flex-1"
                    >
                      All States
                    </Button>
                  </div>

                  {activeTab === 'categories' ? (
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
                        <button
                          key={category.name}
                          className="flex flex-col items-center gap-2 p-4 border rounded-lg hover:border-accent hover:bg-accent/5 transition-all group text-center"
                          onClick={() => handleCategoryClick(category.name)}
                        >
                          <div className="w-12 h-12 flex items-center justify-center">
                            <img src={category.icon} alt={category.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                          </div>
                          <span className="text-xs font-medium uppercase text-gray-700 leading-tight">
                            {category.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                      {[
                        { name: 'ALABAMA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2656a6a1cbd9797c60da_alaska_%2525281%252529.png' },
                        { name: 'ALASKA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2656a6a1cbd9797c60da_alaska_%2525281%252529.png' },
                        { name: 'ARIZONA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb261c0ad444ecb9a03ce0_arizona_%2525282%252529.png' },
                        { name: 'ARKANSAS', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb265467503827a3c491ba_missouri_%2525281%252529.png' },
                        { name: 'CALIFORNIA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2659be79ffef41a69eb0_california_%2525286%252529.png' },
                        { name: 'COLORADO', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb265576f4907f97618cb4_colorado_%2525281%252529.png' },
                        { name: 'CONNECTICUT', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb265567503827a3c49297_connecticut_%2525281%252529.png' },
                        { name: 'DELAWARE', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb26540ad444ecb9a0808e_maps_%2525286%252529.png' },
                        { name: 'FLORIDA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2654bd4684dbaa25a913_florida_%2525281%252529.png' },
                        { name: 'GEORGIA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb261d40ab68b4893aa12f_georgia_%2525281%252529.png' },
                        { name: 'HAWAII', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb26564bfe07b3b27cd4ff_hawaii_%2525281%252529.png' },
                        { name: 'IDAHO', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2656c656eb809bceaa93_maps_%25252821%252529.png' },
                        { name: 'ILLINOIS', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb26595ec03dad8e359e4c_illinois_%2525281%252529.png' },
                        { name: 'INDIANA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2656b1ae81f880adb243_maps_%2525282%252529.png' },
                        { name: 'IOWA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2658aad230dbbad92ca2_maps_%2525284%252529.png' },
                        { name: 'KANSAS', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb26548379c83d333bd33c_maps_%25252820%252529.png' },
                        { name: 'KENTUCKY', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb261ce1907f9c9c90df19_maps_%2525287%252529.png' },
                        { name: 'LOUISIANA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2654aad230dbbad9264c_maps_%25252829%252529.png' },
                        { name: 'MAINE', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb261caad230dbbad8e464_maps_%2525283%252529.png' },
                        { name: 'MARYLAND', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2656c7c1a9de2c2885e6_maps_%25252824%252529.png' },
                        { name: 'MASSACHUSETTS', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2656bf9d1d6579059765_maps_%2525289%252529.png' },
                        { name: 'MICHIGAN', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2656db758ddfe3c539de_maps_%25252810%252529.png' },
                        { name: 'MINNESOTA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2656f54c9add9d896bf0_maps_%25252826%252529.png' },
                        { name: 'MISSISSIPPI', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb265448f3cc16eeb0e664_maps_%25252818%252529.png' },
                        { name: 'MISSOURI', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb265467503827a3c491ba_missouri_%2525281%252529.png' },
                        { name: 'MONTANA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb26595aa0fc677d75f937_maps_%25252827%252529.png' },
                        { name: 'NEBRASKA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb26556c0fa51978705cc1_maps_%25252816%252529.png' },
                        { name: 'NEVADA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb261c40ab68b4893aa0fa_maps_%25252819%252529.png' },
                        { name: 'NEW HAMPSHIRE', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb265776f4907f97618e49_maps_%25252822%252529.png' },
                        { name: 'NEW JERSEY', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb26552510dfad32dc2e6c_maps_%25252815%252529.png' },
                        { name: 'NEW MEXICO', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb26569189230c50e04b9b_maps_%25252823%252529.png' },
                        { name: 'NEW YORK', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb26566091d559ef0b188b_new-york_%2525284%252529.png' },
                        { name: 'NORTH CAROLINA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb261bbd4684dbaa25a45d_maps_%25252817%252529.png' },
                        { name: 'NORTH DAKOTA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2656afa2d1b87e60094c_maps_%25252813%252529.png' },
                        { name: 'OHIO', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb265440ab68b4893aad6c_maps-and-location.png' },
                        { name: 'OKLAHOMA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb26596d57a6d4ef608fec_maps_%25252825%252529.png' },
                        { name: 'OREGON', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb265417051e7b33fba871_maps_%25252812%252529.png' },
                        { name: 'PENNSYLVANIA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb261dcd504bfd960991d2_maps_%25252814%252529.png' },
                        { name: 'RHODE ISLAND', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb265676f4907f97618d56_maps_%25252811%252529.png' },
                        { name: 'SOUTH CAROLINA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb26562510dfad32dc30be_maps_%2525285%252529.png' },
                        { name: 'SOUTH DAKOTA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2656afa2d1b87e60094c_maps_%25252813%252529.png' },
                        { name: 'TENNESSEE', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb261c0ad444ecb9a03ce0_arizona_%2525282%252529.png' },
                        { name: 'TEXAS', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2659a45c67bd9b04f917_utah.png' },
                        { name: 'UTAH', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2659a45c67bd9b04f917_utah.png' },
                        { name: 'VERMONT', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb265776f4907f97618e49_maps_%25252822%252529.png' },
                        { name: 'VIRGINIA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb261c76f4907f97614c5a_virginia_%2525281%252529.png' },
                        { name: 'WASHINGTON', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb265717051e7b33fbab2d_washington.png' },
                        { name: 'WEST VIRGINIA', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb261c76f4907f97614c5a_virginia_%2525281%252529.png' },
                        { name: 'WISCONSIN', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb2656db758ddfe3c539de_maps_%25252810%252529.png' },
                        { name: 'WYOMING', icon: 'https://cdn.prod.website-files.com/5d51b2f2cab8feda6f5631e4/66eb26595aa0fc677d75f937_maps_%25252827%252529.png' },
                      ].map((state) => (
                        <Link
                          key={state.name}
                          href={`/resources/state/${state.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex flex-col items-center gap-2 p-4 border rounded-lg hover:border-accent hover:bg-accent/5 transition-all group text-center"
                        >
                          <div className="w-12 h-12 flex items-center justify-center">
                            <img src={state.icon} alt={state.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                          </div>
                          <span className="text-xs font-medium uppercase text-gray-700">
                            {state.name}
                          </span>
                        </Link>
                      ))}
                      <Link
                        href="/resources/states"
                        className="flex flex-col items-center gap-2 p-4 border-2 border-dashed border-accent/50 rounded-lg hover:border-accent hover:bg-accent/5 transition-all text-center col-span-2"
                      >
                        <div className="text-2xl text-accent">➕</div>
                        <span className="text-xs font-semibold uppercase text-accent">
                          All States
                        </span>
                      </Link>
                    </div>
                  )}
                </Card>

                {/* Tag cloud */}
                {tags.length > 0 && (
                  <Card className="p-6">
                    <h4 className="font-semibold mb-3">Popular Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {tags.slice(0, 12).map((tag) => (
                        <Badge key={tag} variant={selectedTag === tag ? 'default' : 'secondary'} className="cursor-pointer" onClick={() => handleTagClick(tag)}>{tag}</Badge>
                      ))}
                    </div>
                  </Card>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      
    </div>
  );
}
