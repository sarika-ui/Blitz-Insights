import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl sm:text-4xl font-bold">Page Not Found</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              <Search className="mr-2 h-5 w-5" />
              Browse Insights
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="pt-8 space-y-4">
          <p className="text-sm font-medium text-muted-foreground">
            Or try one of these popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/about"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/case-studies"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/contact"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}