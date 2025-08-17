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
  ShoppingCart,
  Zap,
  Target,
  Clock,
  Award,
  Headphones,
  Store,
  Package,
  Truck,
  ShoppingBag,
  Tag,
  Star
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Retail & Consumer Products Market Research | Blitz Insights',
  description: 'Expert retail and consumer products market research solutions. Navigate the retail landscape with data-driven insights on consumer behavior, store performance, and market trends.',
};

const coreServices = [
  'Retail store performance analysis and optimization',
  'Consumer shopping behavior and preference mapping',
  'E-commerce and omnichannel retail strategies',
  'Product assortment and inventory optimization',
  'Pricing strategy and competitive analysis',
  'Supply chain and logistics optimization',
  'Customer experience and satisfaction research',
  'Market entry and expansion strategies',
  'Brand positioning and competitive intelligence',
  'Digital transformation and technology adoption',
  'Sustainability and ethical retail trends'
];

const expertiseAreas = [
  {
    category: 'Retail Operations',
    items: [
      'Store Performance Analysis',
      'Inventory Management Optimization',
      'Supply Chain Efficiency',
      'Customer Service Excellence',
      'Operational Cost Reduction'
    ]
  },
  {
    category: 'Consumer Insights',
    items: [
      'Shopping Behavior Analysis',
      'Customer Journey Mapping',
      'Brand Perception Studies',
      'Purchase Decision Research',
      'Customer Loyalty Programs'
    ]
  },
  {
    category: 'Digital Retail',
    items: [
      'E-commerce Strategy',
      'Omnichannel Integration',
      'Digital Marketing Effectiveness',
      'Mobile Commerce Optimization',
      'Technology Adoption Analysis'
    ]
  }
];

const clientTypes = [
  {
    name: 'Retail Chains',
    description: 'We help retail chains optimize store performance, understand customer behavior, and develop effective omnichannel strategies.'
  },
  {
    name: 'E-commerce Platforms',
    description: 'Our research supports e-commerce platforms with consumer insights, digital experience optimization, and competitive analysis.'
  },
  {
    name: 'Consumer Product Brands',
    description: 'We provide consumer product brands with retail insights, channel optimization, and market penetration strategies.'
  },
  {
    name: 'Retail Technology Providers',
    description: 'Our research helps retail technology providers understand market needs and develop innovative solutions.'
  }
];

const whyChooseUs = [
  {
    title: 'Retail Expertise',
    subtitle: 'Deep Industry Knowledge',
    description: 'Our team has extensive experience in retail markets, understanding the unique challenges of consumer products and retail operations.',
    icon: Store
  },
  {
    title: 'Global Retail Network',
    subtitle: 'Worldwide Coverage',
    description: 'Access to retail networks and consumers across global markets for comprehensive retail insights.',
    icon: Globe
  },
  {
    title: 'Real-time Insights',
    subtitle: 'Fast-Paced Industry',
    description: 'Quick turnaround times for retail research, crucial for time-sensitive decisions in this fast-evolving industry.',
    icon: Clock
  },
  {
    title: 'Technology-Driven',
    subtitle: 'Advanced Analytics',
    description: 'Leveraging advanced analytics and AI to provide deeper insights into retail performance and consumer behavior.',
    icon: TrendingUp
  }
];

const retailTrends = [
  {
    title: 'Omnichannel Retail',
    subtitle: 'Seamless Shopping Experience',
    description: 'Integration of online and offline channels to provide seamless shopping experiences across all touchpoints.',
    icon: ShoppingCart
  },
  {
    title: 'Personalization',
    subtitle: 'Tailored Experiences',
    description: 'Data-driven personalization to deliver customized shopping experiences and product recommendations.',
    icon: Users
  },
  {
    title: 'Sustainability',
    subtitle: 'Eco-Conscious Retail',
    description: 'Growing focus on sustainable retail practices and environmentally conscious consumer products.',
    icon: Package
  },
  {
    title: 'Digital Transformation',
    subtitle: 'Technology Integration',
    description: 'Rapid adoption of digital technologies to enhance retail operations and customer experiences.',
    icon: Zap
  }
];

export default function RetailConsumerProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-blue-500/5 via-background to-purple-500/5">
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            Retail & Consumer Products
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Retail & Consumer Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The retail and consumer products industry is undergoing unprecedented transformation, driven by digital innovation, changing consumer preferences, and evolving market dynamics. Success in this competitive landscape requires deep understanding of consumer behavior, retail operations, and market trends.
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
            <h2 className="text-3xl sm:text-4xl font-bold">Blitz Insights: Retail Market Research Excellence</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Blitz Insights specializes in retail and consumer products market research, providing comprehensive analysis and strategic insights that help organizations navigate the complex retail landscape. Our expertise spans from store operations to digital commerce, from consumer behavior to supply chain optimization.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Our Retail Research Covers:</h3>
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
          <h2 className="text-3xl sm:text-4xl font-bold">Comprehensive Retail Research Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our retail market research covers the full spectrum of consumer products and retail sectors, providing deep insights for strategic decision-making.
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
            At Blitz Insights, we partner with retail organizations across the entire value chain to deliver actionable insights and strategic guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientTypes.map((client, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                  <ShoppingCart className="h-6 w-6 text-blue-600" />
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
          <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Blitz Insights for Retail Research?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our specialized retail expertise and deep industry knowledge make us the ideal partner for retail and consumer products market research.
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

      {/* Retail Trends Section */}
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Emerging Retail Trends</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with insights into the latest trends shaping the future of retail and consumer products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {retailTrends.map((trend, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                  <trend.icon className="h-6 w-6 text-blue-600" />
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
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8 lg:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Retail Strategy with Data-Driven Insights?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Connect with our retail research experts to discover how our insights can drive innovation, 
            optimize operations, and create competitive advantages in the retail industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300">
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
