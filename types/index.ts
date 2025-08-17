// Domain types for the Blitz-Insights website
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  tags: string[];
  href: string;
}

export interface BlogPostFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  author: string;
  image?: string;
  slug: string;
}

export interface BlogPost extends BlogPostFrontmatter {
  content: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  timestamp: string;
  source: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}