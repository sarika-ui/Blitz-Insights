import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  CheckCircle,
  Globe,
  TrendingUp,
  Users,
  Briefcase,
  Building2,
  Shield,
  Activity,
  Calculator,
  Scale,
  Lightbulb
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Professional & Consulting Services Market Research | Blitz Insights',
  description: 'Expert professional services and consulting market research solutions. Navigate the consulting landscape with data-driven insights on management consulting, legal services, and professional advisory.',
};

const coreServices = [
  {
    title: 'Management Consulting Analysis',
    description: 'Comprehensive research on consulting strategies, organizational transformation, and business optimization',
    icon: Lightbulb
  },
  {
    title: 'Legal Services Market',
    description: 'In-depth analysis of legal service providers, practice areas, and legal technology solutions',
    icon: Scale
  },
  {
    title: 'Accounting & Advisory Research',
    description: 'Market intelligence on accounting firms, audit services, and financial advisory practices',
    icon: Calculator
  },
  {
    title: 'Professional Services Technology',
    description: 'Research on legal tech, accounting software, and digital transformation in professional services',
    icon: Activity
  },
  {
    title: 'Consulting Industry Trends',
    description: 'Analysis of consulting methodologies, client relationships, and service delivery models',
    icon: TrendingUp
  },
  {
    title: 'Professional Services Compliance',
    description: 'Compliance research, regulatory frameworks, and professional standards across service sectors',
    icon: Shield
  }
];

const expertiseAreas = [
  'Management Consulting',
  'Strategy Consulting',
  'Legal Services',
  'Accounting & Audit',
  'Financial Advisory',
  'Human Resources Consulting',
  'IT Consulting',
  'Marketing & PR Services',
  'Risk Management',
  'Professional Training'
];

const clientTypes = [
  'Management Consulting Firms',
  'Legal Service Providers',
  'Accounting & Audit Firms',
  'Financial Advisory Services',
  'HR Consulting Companies',
  'IT Consulting Firms',
  'Marketing Agencies',
  'Professional Training Providers'
];

const whyChooseUs = [
  {
    title: 'Professional Services Expertise',
    description: 'Deep understanding of consulting methodologies, legal practices, and professional service delivery',
    icon: Briefcase
  },
  {
    title: 'Global Professional Networks',
    description: 'Access to consulting experts, legal professionals, and service providers worldwide',
    icon: Globe
  },
  {
    title: 'Industry-Specific Insights',
    description: 'Specialized knowledge across different professional service sectors and practice areas',
    icon: Building2
  },
  {
    title: 'Technology-Driven Analysis',
    description: 'Advanced analytics for professional services trends, client satisfaction, and market dynamics',
    icon: Activity
  }
];

const professionalTrends = [
  'Digital Transformation in Professional Services',
  'Remote Work and Virtual Service Delivery',
  'AI and Automation in Consulting',
  'Legal Technology and Legal Tech',
  'Sustainability Consulting and ESG',
  'Specialized Niche Consulting',
  'Client Experience and Service Design',
  'Professional Services Globalization'
];

export default function ProfessionalServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-slate-500/5 via-background to-gray-500/5">
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            Professional Services Expertise
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            PROFESSIONAL & CONSULTING SERVICES RESEARCH
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Navigate the dynamic professional services landscape with our expert market research solutions. 
            From management consulting to legal services, we provide data-driven insights for professional service success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/case-studies">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* What We Do Section */}
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">What We Do</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our professional services research helps consulting firms, legal practices, and advisory businesses 
            understand market dynamics, optimize service delivery, and navigate industry challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-slate-500/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-slate-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Expertise Areas Section */}
      <Section className="bg-muted/50">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Expertise Areas</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive coverage across all major segments of professional services
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="flex items-center space-x-2 p-3 rounded-lg bg-background border">
              <CheckCircle className="h-4 w-4 text-slate-600 flex-shrink-0" />
              <span className="text-sm font-medium">{area}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Who We Work With Section */}
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Who We Work With</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Serving diverse clients across the professional services ecosystem
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientTypes.map((client, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-lg bg-slate-500/10 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-6 w-6 text-slate-600" />
              </div>
              <h3 className="font-semibold mb-2">{client}</h3>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-muted/50">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our unique combination of professional services expertise and research excellence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyChooseUs.map((reason, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-slate-500/10 flex items-center justify-center flex-shrink-0">
                  <reason.icon className="h-6 w-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Future Trends Section */}
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Future Trends in Professional Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with insights into emerging trends shaping the professional services industry
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {professionalTrends.map((trend, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                <span className="font-medium">{trend}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-slate-500 to-gray-500 text-white">
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Transform Your Professional Services Business?</h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Partner with us to navigate the evolving professional services landscape with confidence. 
            Get the insights you need to drive innovation and growth in your consulting practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Your Research Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-600" asChild>
              <Link href="/case-studies">
                View Professional Services Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
