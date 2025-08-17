import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { ArrowLeft, ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { getAllBlogPosts, getBlogPost } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { cn } from '@/lib/utils';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);
  const allPosts = await getAllBlogPosts();
  
  if (!post) {
    notFound();
  }

  const currentIndex = allPosts.findIndex(p => p.slug === params.slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const readingTime = estimateReadingTime(post.content);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Insights
          </Link>
          
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {readingTime} min read
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Image */}
      {post.image && (
        <Section padding="sm">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Section>
      )}

      {/* Article Content */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Table of Contents - Desktop */}
            <div className="hidden lg:block">
              <TableOfContents content={post.content} />
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
                <MDXRemote 
                  source={post.content}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [],
                      rehypePlugins: [],
                    },
                  }}
                />
              </article>
            </div>
          </div>
        </div>
      </Section>

      {/* Navigation */}
      <Section className="bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prevPost && (
              <div className="space-y-3">
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Previous Article
                </div>
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="block group hover:text-primary transition-colors"
                >
                  <h3 className="text-xl font-semibold leading-tight mb-2 group-hover:text-primary">
                    {prevPost.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {prevPost.excerpt}
                  </p>
                  <div className="flex items-center mt-3 text-primary">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Read Previous</span>
                  </div>
                </Link>
              </div>
            )}
            
            {nextPost && (
              <div className={`space-y-3 ${!prevPost ? 'md:col-start-2' : ''}`}>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Next Article
                </div>
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="block group hover:text-primary transition-colors"
                >
                  <h3 className="text-xl font-semibold leading-tight mb-2 group-hover:text-primary">
                    {nextPost.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {nextPost.excerpt}
                  </p>
                  <div className="flex items-center mt-3 text-primary">
                    <span className="text-sm font-medium">Read Next</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl text-white p-8 lg:p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Apply These Insights?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Our team of experts can help you implement these strategies and drive 
            measurable results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Strategic Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/case-studies">
                View Success Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}