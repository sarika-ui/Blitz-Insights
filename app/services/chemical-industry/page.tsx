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
  Beaker,
  TestTube,
  Shield,
  Activity,
  Factory,
  Leaf,
  Atom
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Chemical Industry Market Research | Blitz Insights',
  description: 'Expert chemical industry market research solutions. Navigate the complex chemical manufacturing landscape with data-driven insights on industrial chemicals, specialty chemicals, and materials.',
};

const coreServices = [
  {
    title: 'Chemical Manufacturing Analysis',
    description: 'Comprehensive research on chemical production processes, capacity utilization, and manufacturing efficiency',
    icon: Factory
  },
  {
    title: 'Specialty Chemicals Market',
    description: 'In-depth analysis of specialty chemicals, performance materials, and advanced chemical solutions',
    icon: Beaker
  },
  {
    title: 'Industrial Chemicals Research',
    description: 'Market intelligence on bulk chemicals, petrochemicals, and industrial chemical applications',
    icon: TestTube
  },
  {
    title: 'Materials Science Insights',
    description: 'Research on advanced materials, polymers, composites, and innovative chemical formulations',
    icon: Atom
  },
  {
    title: 'Sustainability & Green Chemistry',
    description: 'Analysis of eco-friendly chemical processes, renewable materials, and environmental compliance',
    icon: Leaf
  },
  {
    title: 'Chemical Safety & Regulations',
    description: 'Compliance research, safety standards, regulatory frameworks, and risk assessment',
    icon: Shield
  }
];

const expertiseAreas = [
  'Petrochemicals and Refining',
  'Polymers and Plastics',
  'Agrochemicals and Fertilizers',
  'Pharmaceutical Intermediates',
  'Coatings and Adhesives',
  'Specialty Chemicals',
  'Industrial Gases',
  'Chemical Distribution',
  'Green Chemistry Solutions',
  'Chemical Process Technology'
];

const clientTypes = [
  'Chemical Manufacturers',
  'Specialty Chemical Companies',
  'Petrochemical Producers',
  'Chemical Distributors',
  'Materials Science Companies',
  'Industrial Chemical Suppliers',
  'Chemical Technology Providers',
  'Environmental Chemical Firms'
];

const whyChooseUs = [
  {
    title: 'Chemical Industry Expertise',
    description: 'Deep understanding of chemical processes, market dynamics, and industry regulations',
    icon: Beaker
  },
  {
    title: 'Global Chemical Networks',
    description: 'Access to chemical industry experts, manufacturers, and supply chain partners worldwide',
    icon: Globe
  },
  {
    title: 'Regulatory Compliance Focus',
    description: 'Expertise in chemical safety standards, environmental regulations, and compliance requirements',
    icon: Shield
  },
  {
    title: 'Technology-Driven Insights',
    description: 'Advanced analytics for chemical market trends, process optimization, and innovation tracking',
    icon: Activity
  }
];

const chemicalTrends = [
  'Green Chemistry and Sustainability',
  'Digital Transformation in Chemical Manufacturing',
  'Circular Economy and Chemical Recycling',
  'Advanced Materials and Nanotechnology',
  'Bio-based Chemicals and Renewable Feedstocks',
  'Chemical Process Automation and Industry 4.0',
  'Supply Chain Resilience and Localization',
  'Chemical Safety and Regulatory Evolution'
];

export default function ChemicalIndustryPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-cyan-500/5 via-background to-blue-500/5">
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            Chemical Industry Expertise
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            CHEMICAL INDUSTRY MARKET RESEARCH
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Navigate the complex chemical manufacturing landscape with our expert market research solutions. 
            From industrial chemicals to specialty materials, we provide data-driven insights for chemical industry success.
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
            Our chemical industry research services help companies understand market dynamics, 
            optimize processes, and navigate regulatory challenges in the evolving chemical landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-cyan-600" />
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
            Comprehensive coverage across all major segments of the chemical industry
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="flex items-center space-x-2 p-3 rounded-lg bg-background border">
              <CheckCircle className="h-4 w-4 text-cyan-600 flex-shrink-0" />
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
            Serving diverse clients across the chemical industry value chain
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientTypes.map((client, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                <Factory className="h-6 w-6 text-cyan-600" />
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
            Our unique combination of chemical industry expertise and research excellence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyChooseUs.map((reason, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <reason.icon className="h-6 w-6 text-cyan-600" />
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
          <h2 className="text-3xl sm:text-4xl font-bold">Future Trends in Chemical Industry</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with insights into emerging trends shaping the chemical industry
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chemicalTrends.map((trend, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                <span className="font-medium">{trend}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Transform Your Chemical Business?</h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Partner with us to navigate the complex chemical industry landscape with confidence. 
            Get the insights you need to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Your Research Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600" asChild>
              <Link href="/case-studies">
                View Chemical Industry Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
