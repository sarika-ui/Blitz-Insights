"use client";

import type { ReactNode } from 'react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './container';
import { motion, useInView } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: keyof JSX.IntrinsicElements;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  container?: boolean;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export function Section({
  children,
  className,
  id,
  as = 'section',
  padding = 'lg',
  container = true,
  containerSize = 'lg',
}: SectionProps) {
  const Component = as || 'section';
  const rootRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(rootRef, { once: true, margin: '-50px' });

  const paddingClasses: Record<NonNullable<SectionProps['padding']>, string> = {
    none: '',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
  };

  return (
    <Component id={id} className={cn(paddingClasses[padding], className)}>
      <motion.div
        ref={rootRef as any}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {container ? (
          <Container size={containerSize}>
            {children}
          </Container>
        ) : (
          children
        )}
      </motion.div>
    </Component>
  );
}