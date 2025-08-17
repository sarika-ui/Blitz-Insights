'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TagFilterProps {
  tags: string[];
  basePath: string;
}

export function TagFilter({ tags, basePath }: TagFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get('tag');

  const handleTagClick = (tag: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (selectedTag === tag) {
      // Remove tag filter if clicking the same tag
      params.delete('tag');
    } else {
      // Set new tag filter
      params.set('tag', tag);
    }
    
    // Reset to first page when filtering
    params.delete('page');
    
    const queryString = params.toString();
    router.push(`${basePath}${queryString ? `?${queryString}` : ''}`);
  };

  const clearFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.delete('tag');
    params.delete('page');
    
    const queryString = params.toString();
    router.push(`${basePath}${queryString ? `?${queryString}` : ''}`);
  };

  if (tags.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filter by Topic</h3>
        {selectedTag && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilter}
            className="h-8 px-2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Clear filter
          </Button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const isSelected = selectedTag === tag;
          return (
            <Badge
              key={tag}
              variant={isSelected ? 'default' : 'secondary'}
              className={cn(
                'cursor-pointer transition-all duration-200 hover:scale-105',
                isSelected 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'hover:bg-primary/10 hover:text-primary'
              )}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
              {isSelected && (
                <X className="h-3 w-3 ml-1" />
              )}
            </Badge>
          );
        })}
      </div>
      
      {selectedTag && (
        <p className="text-sm text-muted-foreground">
          Showing posts tagged with <strong>"{selectedTag}"</strong>
        </p>
      )}
    </div>
  );
}