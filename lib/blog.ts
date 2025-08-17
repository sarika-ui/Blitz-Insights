import { readdir, readFile } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost, BlogPostFrontmatter } from '@/types';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const files = await readdir(CONTENT_DIR);
    const mdxFiles = files.filter(file => file.endsWith('.mdx'));
    
    const posts = await Promise.all(
      mdxFiles.map(async (file) => {
        const filePath = path.join(CONTENT_DIR, file);
        const fileContent = await readFile(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        
        return {
          ...data,
          content,
          slug: data.slug || file.replace('.mdx', ''),
        } as BlogPost;
      })
    );
    
    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
    const fileContent = await readFile(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    return {
      ...data,
      content,
      slug,
    } as BlogPost;
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
}

export function getAllTags(posts: BlogPost[]): string[] {
  const tagSet = new Set<string>();
  posts.forEach(post => {
    post.tags?.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

export function getPostsByTag(posts: BlogPost[], tag: string): BlogPost[] {
  return posts.filter(post => post.tags?.includes(tag));
}

export function getPaginatedPosts(
  posts: BlogPost[],
  page: number = 1,
  limit: number = 6,
  tag?: string
): {
  posts: BlogPost[];
  totalPages: number;
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
} {
  // Filter by tag if provided
  const filteredPosts = tag 
    ? posts.filter(post => post.tags?.includes(tag))
    : posts;
    
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredPosts.length / limit);
  
  return {
    posts: paginatedPosts,
    totalPages,
    currentPage: page,
    hasNext: page < totalPages,
    hasPrev: page > 1,
  };
}

export function generateHeadingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function processContentWithAnchors(content: string): string {
  // Add IDs to headings for anchor links
  return content.replace(/^(#{2,6})\s+(.+)$/gm, (match, hashes, text) => {
    const level = hashes.length;
    const id = generateHeadingId(text.trim());
    return `<h${level} id="${id}" class="group relative scroll-mt-20">
      <a href="#${id}" class="anchor absolute -left-8 top-0 flex h-full items-center pr-2 opacity-0 transition-opacity group-hover:opacity-100" aria-label="Link to ${text.trim()}">
        <svg class="h-4 w-4 text-muted-foreground hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
        </svg>
      </a>
      ${text.trim()}
    </h${level}>`;
  });
}