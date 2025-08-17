import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/ui/section';
import { ArrowRight, TrendingUp, Users, Building2 } from 'lucide-react';
import caseStudiesData from '@/data/case-studies.json';
import type { CaseStudy } from '@/types';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Explore our successful client engagements and the measurable impact we\'ve delivered across various industries.',
};

const caseStudies = caseStudiesData as CaseStudy[];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Case Studies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped organizations across industries achieve their strategic 
            objectives and drive measurable business transformation.
          </p>
        </div>
      </Section>

      {/* Stats Overview */}
      <Section className="bg-muted/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              value: '400%',
              label: 'Average Revenue Growth',
              description: 'Across our client portfolio',
            },
            {
              icon: Users,
              value: '150+',
              label: 'Organizations Served',
              description: 'From startups to Fortune 500',
            },
            {
              icon: Building2,
              value: '15+',
              label: 'Industries Covered',
              description: 'Technology, retail, manufacturing, and more',
            },
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="space-y-4 p-0">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div>
                  <div className="font-semibold">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Case Studies Grid */}
      <Section>
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={study.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative aspect-[4/3] lg:aspect-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span>{study.client}</span>
                        <span>•</span>
                        <span>{study.industry}</span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold mb-4">{study.title}</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Our Solution:</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Key Results:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center">
                            <TrendingUp className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            <span className="text-sm font-medium">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl text-white p-8 lg:p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready for Your Success Story?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join our portfolio of successful transformations. Let's discuss how we can help 
            your organization achieve similar breakthrough results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}