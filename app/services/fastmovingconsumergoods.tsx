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
  BarChart3, 
  Users,
  ShoppingBag,
  Zap,
  Target,
  Clock,
  Award,
  Headphones,
  Package,
  Store,
  Truck,
  ShoppingCart,
  Tag,
  Star
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'FMCG Market Research | Blitz Insights',
  description: 'Expert FMCG market research solutions. Navigate the fast-moving consumer goods landscape with data-driven insights on consumer behavior, retail trends, and brand performance.',
};

const coreServices = [
  'Consumer behavior analysis and preference mapping',
  'Brand performance and market share analysis',
  'Retail channel optimization and distribution strategies',
  'Product innovation and concept testing',
  'Pricing strategy and competitive analysis',
  'Supply chain optimization and logistics research',
  'Digital commerce and e-commerce insights',
  'Sustainability and ethical consumer trends',
  'Market entry and expansion strategies',
  'Customer loyalty and retention analysis',
  'Promotional effectiveness and ROI measurement'
];

const expertiseAreas = [
  {
    category: 'Consumer Insights',
    items: [
      'Consumer Behavior Analysis',
      'Purchase Decision Mapping',
      'Brand Perception Studies',
      'Customer Journey Mapping',
      'Loyalty Program Optimization'
    ]
  },
  {
    category: 'Retail & Distribution',
    items: [
      'Retail Channel Analysis',
      'Supply Chain Optimization',
      'Distribution Network Planning',
      'Store Performance Analysis',
      'Omnichannel Strategy Development'
    ]
  },
  {
    category: 'Product & Innovation',
    items: [
      'Product Concept Testing',
      'Packaging Design Research',
      'New Product Development',
      'Product Portfolio Optimization',
      'Innovation Pipeline Analysis'
    ]
  }
];

const clientTypes = [
  {
    name: 'FMCG Manufacturers',
    description: 'We help FMCG manufacturers understand consumer needs, optimize product portfolios, and develop effective go-to-market strategies.'
  },
  {
    name: 'Retail Chains',
    description: 'Our research supports retail chains with consumer insights, store optimization, and competitive positioning strategies.'
  },
  {
    name: 'Brand Managers',
    description: 'We provide brand managers with deep consumer insights, brand performance analysis, and marketing effectiveness measurement.'
  },
  {
    name: 'E-commerce Platforms',
    description: 'Our research helps e-commerce platforms understand online consumer behavior and optimize digital shopping experiences.'
  }
];

const whyChooseUs = [
  {
    title: 'FMCG Expertise',
    subtitle: 'Deep Industry Knowledge',
    description: 'Our team has extensive experience in FMCG markets, understanding the unique challenges of fast-moving consumer goods.',
    icon: ShoppingBag
  },
  {
    title: 'Global Consumer Network',
    subtitle: 'Worldwide Coverage',
    description: 'Access to consumers and retail networks across global markets for comprehensive FMCG insights.',
    icon: Globe
  },
  {
    title: 'Real-time Insights',
    subtitle: 'Fast-Paced Industry',
    description: 'Quick turnaround times for FMCG research, crucial for time-sensitive decisions in this fast-evolving industry.',
    icon: Clock
  },
  {
    title: 'Technology-Driven',
    subtitle: 'Advanced Analytics',
    description: 'Leveraging advanced analytics and AI to provide deeper insights into consumer behavior and market trends.',
    icon: TrendingUp
  }
];

const fmcgTrends = [
  {
    title: 'Digital Transformation',
    subtitle: 'E-commerce Revolution',
    description: 'Rapid growth in online shopping and digital commerce is transforming how consumers discover and purchase FMCG products.',
    icon: ShoppingCart
  },
  {
    title: 'Sustainability Focus',
    subtitle: 'Eco-Conscious Consumers',
    description: 'Increasing consumer demand for sustainable, eco-friendly products and packaging solutions.',
    icon: Package
  },
  {
    title: 'Personalization',
    subtitle: 'Tailored Experiences',
    description: 'Growing demand for personalized products and shopping experiences driven by data and technology.',
    icon: Users
  },
  {
    title: 'Health & Wellness',
    subtitle: 'Healthy Living Trends',
    description: 'Rising consumer focus on health, wellness, and clean label products across all FMCG categories.',
    icon: Star
  }
];

export default function FMCGPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-green-500/5 via-background to-blue-500/5">
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            Fast-Moving Consumer Goods (FMCG)
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Fast-Moving Consumer Goods (FMCG)
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The FMCG sector is one of the most dynamic and competitive industries, characterized by rapid product turnover, changing consumer preferences, and intense competition. Success in this fast-paced environment requires deep understanding of consumer behavior, market trends, and retail dynamics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* What We Do Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Blitz Insights: FMCG Market Research Excellence</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Blitz Insights specializes in FMCG market research, providing comprehensive analysis and strategic insights that help organizations navigate the complex consumer goods landscape. Our expertise spans from consumer behavior to retail optimization, from product innovation to supply chain efficiency.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Our FMCG Research Covers:</h3>
            <div className="space-y-4">
              {coreServices.slice(0, 6).map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-3 w-3" />
                  </div>
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Expertise Areas Section */}
      <Section className="bg-muted/50" id="services">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Comprehensive FMCG Research Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our FMCG market research covers the full spectrum of consumer goods sectors, providing deep insights for strategic decision-making.
          </p>
        </div>
        
        <div className="space-y-12">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-bold text-center">{area.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {area.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Who We Work With Section */}
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Who We Work With</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Blitz Insights, we partner with FMCG organizations across the entire value chain to deliver actionable insights and strategic guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientTypes.map((client, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                  <ShoppingBag className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">{client.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {client.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-muted/50">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Blitz Insights for FMCG Research?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our specialized FMCG expertise and deep industry knowledge make us the ideal partner for consumer goods market research.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyChooseUs.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-lg font-semibold">{item.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* FMCG Trends Section */}
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Emerging FMCG Trends</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with insights into the latest trends shaping the future of the FMCG industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fmcgTrends.map((trend, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                  <trend.icon className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">{trend.title}</CardTitle>
                <CardDescription className="text-lg font-semibold">{trend.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{trend.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl text-white p-8 lg:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your FMCG Strategy with Data-Driven Insights?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Connect with our FMCG research experts to discover how our insights can drive innovation, 
            optimize operations, and create competitive advantages in the consumer goods industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-green-600 transition-all duration-300">
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
