import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { getAllBlogPosts, getAllTags, getPaginatedPosts } from '@/lib/blog';
import { TagFilter } from '@/components/blog/tag-filter';
import { Pagination } from '@/components/ui/pagination';
import { BlogPostSkeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Strategic insights, industry analysis, and expert perspectives on business transformation, digital innovation, and operational excellence.',
};

export const dynamic = 'force-static';

interface BlogPageProps {
  searchParams: {
    page?: string;
    tag?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const posts = await getAllBlogPosts();
  const tags = getAllTags(posts);
  
  const currentPage = parseInt(searchParams.page || '1', 10);
  const selectedTag = searchParams.tag;
  
  const {
    posts: paginatedPosts,
    totalPages,
    hasNext,
    hasPrev,
  } = getPaginatedPosts(posts, currentPage, 6, selectedTag);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Insights & Analysis
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic insights, industry analysis, and expert perspectives on business transformation, 
            digital innovation, and operational excellence from our consulting experts.
          </p>
        </div>
      </Section>

      {/* Featured Post */}
      {!selectedTag && posts.length > 0 && (
        <Section>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Featured Article</h2>
            <p className="text-muted-foreground">Our latest strategic insights</p>
          </div>
          
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src={(posts[0]?.image as string | undefined) || '/api/placeholder/600/400'}
                  alt={posts[0]?.title || 'Featured Article'}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {(posts[0]?.tags ?? []).slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                    {posts[0]?.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {posts[0]?.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {posts[0]?.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(posts[0]?.date || '').toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                  </div>
                  <Button asChild size="lg">
                    <Link href={`/blog/${posts[0]?.slug}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Section>
      )}

      {/* Tag Filter */}
      <Section className={!selectedTag && posts.length > 0 ? 'pt-0' : ''}>
        <div className="max-w-4xl mx-auto">
          <TagFilter tags={tags} basePath="/blog" />
        </div>
      </Section>

      {/* All Posts */}
      {paginatedPosts.length > 0 && (
        <Section className={cn(
          'bg-muted/50',
          (!selectedTag && posts.length > 0) ? 'pt-8' : ''
        )}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {selectedTag ? `Articles tagged "${selectedTag}"` : 'All Articles'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {selectedTag 
                ? `${paginatedPosts.length} article${paginatedPosts.length !== 1 ? 's' : ''} found`
                : 'Explore our complete collection of strategic insights and industry analysis.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post, index) => {
              // Skip first post if not filtering and it's the first page
              if (!selectedTag && currentPage === 1 && index === 0) return null;
              
              return (
              <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || '/api/placeholder/400/225'}
                      alt={post.title || 'Blog Post'}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {post.tags?.slice(0, 2).map((tag: string) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl leading-tight line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center text-xs text-muted-foreground space-x-3">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author || 'Author'}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date || '' ).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                    </div>
                    <Button asChild variant="ghost" className="p-0 h-auto font-medium">
                      <Link href={`/blog/${post.slug}`} className="group">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              );
            })}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                basePath="/blog"
                searchParams={selectedTag ? { tag: selectedTag } : {}}
              />
            </div>
          )}
        </Section>
      )}

      {/* No Results */}
      {selectedTag && paginatedPosts.length === 0 && (
        <Section>
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">No articles found</h2>
            <p className="text-muted-foreground">
              No articles found for the tag "{selectedTag}". Try browsing other topics or view all articles.
            </p>
            <Button asChild>
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </Section>
      )}

      {/* CTA Section */}
      <Section>
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl text-white p-8 lg:p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Stay Updated
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get the latest strategic insights and industry analysis delivered to your inbox. 
            Join thousands of business leaders who rely on our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/newsletter">Subscribe to Newsletter</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/contact">
                Get Consulting Help
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

// Loading component for Suspense
function BlogPostsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-lg border bg-card p-6">
          <BlogPostSkeleton />
        </div>
      ))}
    </div>
  );
}