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
  Plane,
  Zap,
  Target,
  Clock,
  Award,
  Headphones,
  MapPin,
  Shield,
  Navigation,
  Cloud,
  Compass
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Aviation Market Research | Blitz Insights',
  description: 'Expert aviation market research solutions. Navigate the aviation landscape with data-driven insights on airlines, aerospace, and aviation technology trends.',
};

const coreServices = [
  'Airlines and aviation market analysis',
  'Aerospace and defense industry research',
  'Airport operations and infrastructure analysis',
  'Aviation technology and innovation trends',
  'Passenger behavior and travel preferences',
  'Cargo and logistics aviation insights',
  'Regulatory compliance and safety analysis',
  'Sustainable aviation and fuel efficiency',
  'Air traffic management and navigation',
  'Aviation maintenance and MRO services',
  'Commercial and private aviation markets'
];

const expertiseAreas = [
  {
    category: 'Commercial Aviation',
    items: [
      'Airline Operations Analysis',
      'Passenger Experience Research',
      'Route Planning & Optimization',
      'Fleet Management Strategies',
      'Revenue Management Insights'
    ]
  },
  {
    category: 'Aerospace & Defense',
    items: [
      'Aircraft Manufacturing',
      'Defense Systems Analysis',
      'Space Technology Research',
      'Avionics & Electronics',
      'Maintenance & Support'
    ]
  },
  {
    category: 'Aviation Technology',
    items: [
      'Digital Aviation Solutions',
      'Air Traffic Management',
      'Sustainable Aviation Tech',
      'Drone & UAV Systems',
      'Smart Airport Technology'
    ]
  }
];

const clientTypes = [
  {
    name: 'Airlines',
    description: 'We help airlines understand market trends, optimize operations, and enhance passenger experience in the competitive aviation landscape.'
  },
  {
    name: 'Aerospace Manufacturers',
    description: 'Our research supports aerospace manufacturers with market intelligence, technology trends, and competitive analysis.'
  },
  {
    name: 'Airports & Authorities',
    description: 'We provide airports and aviation authorities with operational insights, infrastructure planning, and passenger flow analysis.'
  },
  {
    name: 'Aviation Technology Companies',
    description: 'Our research helps aviation tech companies understand market needs and develop innovative solutions.'
  }
];

const whyChooseUs = [
  {
    title: 'Aviation Expertise',
    subtitle: 'Deep Industry Knowledge',
    description: 'Our team has extensive experience in aviation markets, understanding the unique challenges of airlines and aerospace.',
    icon: Plane
  },
  {
    title: 'Global Aviation Network',
    subtitle: 'Worldwide Coverage',
    description: 'Access to aviation markets and professionals across global markets for comprehensive insights.',
    icon: Globe
  },
  {
    title: 'Regulatory Understanding',
    subtitle: 'Safety & Compliance',
    description: 'Deep understanding of aviation regulations, safety requirements, and compliance standards.',
    icon: Shield
  },
  {
    title: 'Technology-Driven',
    subtitle: 'Innovation Focus',
    description: 'Specialized expertise in aviation technology trends and digital transformation.',
    icon: TrendingUp
  }
];

const aviationTrends = [
  {
    title: 'Sustainable Aviation',
    subtitle: 'Green Technology',
    description: 'Growing focus on sustainable aviation fuels, electric aircraft, and carbon reduction initiatives.',
    icon: Cloud
  },
  {
    title: 'Digital Transformation',
    subtitle: 'Smart Aviation',
    description: 'Adoption of digital technologies, AI, and IoT in aviation operations and passenger services.',
    icon: Zap
  },
  {
    title: 'Urban Air Mobility',
    subtitle: 'Flying Taxis',
    description: 'Emerging market for electric vertical takeoff and landing (eVTOL) aircraft and urban air transportation.',
    icon: Navigation
  },
  {
    title: 'Autonomous Systems',
    subtitle: 'Pilot Assistance',
    description: 'Advancements in autonomous flight systems and pilot assistance technologies.',
    icon: Compass
  }
];

export default function AviationPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-blue-500/5 via-background to-sky-500/5">
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            Aviation
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Aviation
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The aviation industry is soaring into a new era of innovation, sustainability, and digital transformation. From commercial airlines to aerospace manufacturing, from airport operations to emerging technologies, this dynamic sector requires deep market intelligence to navigate complex challenges and capitalize on opportunities.
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
            <h2 className="text-3xl sm:text-4xl font-bold">Blitz Insights: Aviation Market Research Excellence</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Blitz Insights specializes in aviation market research, providing comprehensive analysis and strategic insights that help organizations navigate the complex aviation landscape. Our expertise spans from commercial airlines to aerospace manufacturing, from airport operations to emerging aviation technologies.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-sky-500/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Our Aviation Research Covers:</h3>
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
          <h2 className="text-3xl sm:text-4xl font-bold">Comprehensive Aviation Research Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our aviation market research covers the full spectrum of aviation sectors, providing deep insights for strategic decision-making.
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
            At Blitz Insights, we partner with aviation organizations across the entire ecosystem to deliver actionable insights and strategic guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientTypes.map((client, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                  <Plane className="h-6 w-6 text-blue-600" />
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
          <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Blitz Insights for Aviation Research?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our specialized aviation expertise and deep industry knowledge make us the ideal partner for aviation market research.
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

      {/* Aviation Trends Section */}
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Emerging Aviation Trends</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with insights into the latest trends shaping the future of aviation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aviationTrends.map((trend, index) => (
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
        <div className="bg-gradient-to-r from-blue-600 to-sky-600 rounded-2xl text-white p-8 lg:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Soar with Data-Driven Aviation Insights?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Connect with our aviation research experts to discover how our insights can drive innovation, 
            optimize operations, and create competitive advantages in the aviation industry.
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
