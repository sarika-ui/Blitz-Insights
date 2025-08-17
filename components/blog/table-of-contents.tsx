'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from content
    const headingRegex = /^(#{2,6})\s+(.+)$/gm;
    const headings: TocItem[] = [];
    let match: RegExpExecArray | null;

    while ((match = headingRegex.exec(content)) !== null) {
      const hashes = match[1] ?? '';
      const rawText = match[2] ?? '';
      const level = hashes.length;
      const text = rawText.trim();
      if (!text) continue;
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

      headings.push({ id, text, level });
    }

    setToc(headings);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -35% 0%',
        threshold: 0,
      }
    );

    // Observe all headings
    toc.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [toc]);

  if (toc.length === 0) return null;

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="sticky top-24 space-y-4">
      <h3 className="text-lg font-semibold">Table of Contents</h3>
      <nav className="space-y-1">
        {toc.map(({ id, text, level }) => (
          <button
            key={id}
            onClick={() => scrollToHeading(id)}
            className={cn(
              'block w-full text-left text-sm transition-colors hover:text-primary',
              level === 2 && 'pl-0',
              level === 3 && 'pl-4',
              level === 4 && 'pl-8',
              level === 5 && 'pl-12',
              level === 6 && 'pl-16',
              activeId === id
                ? 'text-primary font-medium border-l-2 border-primary pl-3'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {text}
          </button>
        ))}
      </nav>
    </div>
  );
}