'use client';

import { Link } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeadingAnchorProps {
  id: string;
  level: 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export function HeadingAnchor({ id, level, children, className }: HeadingAnchorProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;

  const handleAnchorClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Update URL without triggering navigation
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <Component
      id={id}
      className={cn('group relative scroll-mt-20', className)}
    >
      <a
        href={`#${id}`}
        onClick={handleAnchorClick}
        className="anchor absolute -left-8 top-0 flex h-full items-center pr-2 opacity-0 transition-opacity group-hover:opacity-100"
        aria-label={`Link to ${children}`}
      >
        <Link className="h-4 w-4 text-muted-foreground hover:text-primary" />
      </a>
      {children}
    </Component>
  );
}