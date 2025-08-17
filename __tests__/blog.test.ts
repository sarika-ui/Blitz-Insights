import { describe, it, expect } from 'vitest';
import { getPaginatedPosts } from '@/lib/blog';

describe('getPaginatedPosts', () => {
  const sample = Array.from({ length: 10 }).map((_, i) => ({
    title: `Post ${i + 1}`,
    excerpt: 'x',
    date: '2024-01-01',
    tags: ['a'],
    author: 'Author',
    slug: `post-${i + 1}`,
    content: '...'
  }));

  it('paginates items', () => {
    const { posts, totalPages, currentPage, hasNext, hasPrev } = getPaginatedPosts(sample as any, 2, 3);
    expect(posts.length).toBe(3);
    expect(totalPages).toBe(4);
    expect(currentPage).toBe(2);
    expect(hasNext).toBe(true);
    expect(hasPrev).toBe(true);
  });
});


