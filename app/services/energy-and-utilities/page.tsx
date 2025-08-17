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
  Zap,
  Target,
  Clock,
  Award,
  Headphones,
  Battery,
  Sun,
  Wind,
  Droplets,
  Leaf,
  Gauge
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Energy & Utilities Market Research | Blitz Insights',
  description: 'Expert energy and utilities market research solutions. Navigate the energy landscape with data-driven insights on renewable energy, utilities, and sustainability trends.',
};

const coreServices = [
  'Energy market analysis and renewable energy trends',
  'Utilities and infrastructure market research',
  'Smart grid and energy technology adoption',
  'Sustainability and environmental impact analysis',
  'Energy efficiency and conservation strategies',
  'Regulatory compliance and policy analysis',
  'Energy storage and battery technology insights',
  'Electric vehicle and charging infrastructure',
  'Carbon footprint and emissions reduction',
  'Energy trading and market dynamics',
  'Grid modernization and digital transformation'
];

const expertiseAreas = [
  {
    category: 'Renewable Energy',
    items: [
      'Solar Energy Solutions',
      'Wind Power Systems',
      'Hydroelectric Power',
      'Biomass & Bioenergy',
      'Geothermal Energy'
    ]
  },
  {
    category: 'Energy Infrastructure',
    items: [
      'Smart Grid Technology',
      'Energy Storage Systems',
      'Transmission Networks',
      'Distribution Systems',
      'Microgrid Solutions'
    ]
  },
  {
    category: 'Sustainability',
    items: [
      'Carbon Reduction Strategies',
      'Energy Efficiency Programs',
      'Green Building Solutions',
      'Environmental Impact Assessment',
      'Circular Economy Initiatives'
    ]
  }
];

const clientTypes = [
  {
    name: 'Energy Companies',
    description: 'We help energy companies understand market trends, optimize operations, and develop sustainable energy solutions.'
  },
  {
    name: 'Utility Providers',
    description: 'Our research supports utility providers with infrastructure planning, customer insights, and regulatory compliance.'
  },
  {
    name: 'Renewable Energy Firms',
    description: 'We provide renewable energy firms with market intelligence, technology trends, and competitive analysis.'
  },
  {
    name: 'Energy Technology Companies',
    description: 'Our research helps energy tech companies understand market needs and develop innovative solutions.'
  }
];

const whyChooseUs = [
  {
    title: 'Energy Expertise',
    subtitle: 'Deep Industry Knowledge',
    description: 'Our team has extensive experience in energy markets, understanding the unique challenges of utilities and renewable energy.',
    icon: Zap
  },
  {
    title: 'Sustainability Focus',
    subtitle: 'Environmental Impact',
    description: 'Specialized expertise in sustainability, renewable energy, and environmental impact assessment.',
    icon: Leaf
  },
  {
    title: 'Global Energy Network',
    subtitle: 'Worldwide Coverage',
    description: 'Access to energy markets and professionals across global markets for comprehensive insights.',
    icon: Globe
  },
  {
    title: 'Technology-Driven',
    subtitle: 'Innovation Focus',
    description: 'Deep understanding of energy technology trends and digital transformation in utilities.',
    icon: TrendingUp
  }
];

const energyTrends = [
  {
    title: 'Renewable Energy Growth',
    subtitle: 'Clean Energy Revolution',
    description: 'Rapid expansion of renewable energy sources and declining costs of clean energy technologies.',
    icon: Sun
  },
  {
    title: 'Energy Storage',
    subtitle: 'Battery Technology',
    description: 'Advancements in energy storage solutions enabling grid stability and renewable integration.',
    icon: Battery
  },
  {
    title: 'Smart Grids',
    subtitle: 'Digital Infrastructure',
    description: 'Modernization of energy infrastructure with smart grid technology and IoT integration.',
    icon: Gauge
  },
  {
    title: 'Electrification',
    subtitle: 'Transportation & Buildings',
    description: 'Growing electrification of transportation and buildings driving energy demand changes.',
    icon: Zap
  }
];

export default function EnergyUtilitiesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-yellow-500/5 via-background to-green-500/5">
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            Energy & Utilities
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Energy & Utilities
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The energy and utilities sector is at the forefront of global transformation, driven by the urgent need for sustainability, technological innovation, and changing consumer demands. Success in this critical industry requires deep understanding of renewable energy trends, infrastructure modernization, and regulatory evolution.
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
            <h2 className="text-3xl sm:text-4xl font-bold">Blitz Insights: Energy Market Research Excellence</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Blitz Insights specializes in energy and utilities market research, providing comprehensive analysis and strategic insights that help organizations navigate the complex energy landscape. Our expertise spans from renewable energy to smart grids, from sustainability to infrastructure modernization.
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500/10 to-green-500/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Our Energy Research Covers:</h3>
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
          <h2 className="text-3xl sm:text-4xl font-bold">Comprehensive Energy Research Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our energy and utilities market research covers the full spectrum of energy sectors, providing deep insights for strategic decision-making.
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
            At Blitz Insights, we partner with energy organizations across the entire ecosystem to deliver actionable insights and strategic guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientTypes.map((client, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 group-hover:scale-110 transition-all duration-300">
                  <Zap className="h-6 w-6 text-yellow-600" />
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
          <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Blitz Insights for Energy Research?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our specialized energy expertise and deep industry knowledge make us the ideal partner for energy and utilities market research.
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

      {/* Energy Trends Section */}
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Emerging Energy Trends</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with insights into the latest trends shaping the future of energy and utilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {energyTrends.map((trend, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 group-hover:scale-110 transition-all duration-300">
                  <trend.icon className="h-6 w-6 text-yellow-600" />
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
        <div className="bg-gradient-to-r from-yellow-600 to-green-600 rounded-2xl text-white p-8 lg:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Energy Strategy with Data-Driven Insights?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Connect with our energy research experts to discover how our insights can drive innovation, 
            optimize operations, and create competitive advantages in the energy and utilities industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-yellow-600 transition-all duration-300">
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
