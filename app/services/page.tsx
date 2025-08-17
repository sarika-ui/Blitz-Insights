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
  Building2,
  Car,
  Heart,
  ShoppingBag,
  Zap,
  ShoppingCart,
  Plane,
  CreditCard,
  Home,
  Monitor,
  Beaker,
  Briefcase,
  GraduationCap,
  Settings,
  MapPin,
  Sprout
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries - Cross-Industry Expertise | Blitz Insights',
  description: 'Explore our exceptional proficiency across various industries and markets. From IT & Telecom to Healthcare, Automotive to E-commerce, we deliver comprehensive research and insights.',
};

const industries = [
  {
    name: 'Information Technology & Telecommunications',
    icon: Monitor,
    description: 'Digital transformation, software development, cloud solutions, and telecom infrastructure',
    color: 'bg-blue-500/10 text-blue-600'
  },
  {
    name: 'Automotive and Mobility Solutions',
    icon: Car,
    description: 'Vehicle manufacturing, electric mobility, autonomous driving, and transportation services',
    color: 'bg-gray-500/10 text-gray-600'
  },
  {
    name: 'Fast-Moving Consumer Goods (FMCG)',
    icon: ShoppingBag,
    description: 'Consumer packaged goods, retail distribution, brand management, and market expansion',
    color: 'bg-green-500/10 text-green-600'
  },
  {
    name: 'Healthcare and Pharmaceutical Industries',
    icon: Heart,
    description: 'Medical devices, pharmaceuticals, healthcare services, and biotechnology',
    color: 'bg-red-500/10 text-red-600'
  },
  {
    name: 'Energy and Utility Services',
    icon: Zap,
    description: 'Renewable energy, power generation, utility management, and sustainability',
    color: 'bg-yellow-500/10 text-yellow-600'
  },
  {
    name: 'E-Commerce and Digital Retail',
    icon: ShoppingCart,
    description: 'Online retail, digital marketplaces, payment solutions, and customer experience',
    color: 'bg-purple-500/10 text-purple-600'
  },
  {
    name: 'Aviation and Aerospace',
    icon: Plane,
    description: 'Aircraft manufacturing, airline operations, aerospace technology, and aviation services',
    color: 'bg-indigo-500/10 text-indigo-600'
  },
  {
    name: 'Banking and Financial Services',
    icon: CreditCard,
    description: 'Retail banking, investment services, fintech solutions, and financial technology',
    color: 'bg-emerald-500/10 text-emerald-600'
  },
  {
    name: 'Real Estate and Property Development',
    icon: Home,
    description: 'Property development, real estate investment, construction, and property management',
    color: 'bg-orange-500/10 text-orange-600'
  },
  {
    name: 'Media and Entertainment',
    icon: Monitor,
    description: 'Content creation, broadcasting, digital media, and entertainment platforms',
    color: 'bg-pink-500/10 text-pink-600'
  },
  {
    name: 'Chemical Industry',
    icon: Beaker,
    description: 'Chemical manufacturing, industrial chemicals, specialty chemicals, and materials',
    color: 'bg-cyan-500/10 text-cyan-600'
  },
  {
    name: 'Professional and Consulting Services',
    icon: Briefcase,
    description: 'Management consulting, legal services, accounting, and professional advisory',
    color: 'bg-slate-500/10 text-slate-600'
  },
  {
    name: 'Education and Learning',
    icon: GraduationCap,
    description: 'Educational technology, online learning, training services, and academic institutions',
    color: 'bg-teal-500/10 text-teal-600'
  },
  {
    name: 'Electrical Appliances and White Goods',
    icon: Settings,
    description: 'Home appliances, consumer electronics, smart devices, and IoT solutions',
    color: 'bg-violet-500/10 text-violet-600'
  },
  {
    name: 'Travel, Tourism, and Hospitality',
    icon: MapPin,
    description: 'Hotel management, travel services, tourism development, and hospitality technology',
    color: 'bg-amber-500/10 text-amber-600'
  },
  {
    name: 'Agriculture and Agribusiness',
    icon: Sprout,
    description: 'Agricultural technology, food processing, farming solutions, and agribusiness',
    color: 'bg-lime-500/10 text-lime-600'
  }
];

const expertiseFeatures = [
  'In-depth understanding of clients\' industries and sectors',
  'A wider perspective on data analysis and interpretation',
  'Research covering complex and challenging segments',
  'Global reach for multi-country research initiatives'
];

const getServiceLink = (industryName: string): string => {
  const serviceMap: { [key: string]: string } = {
    'Information Technology & Telecommunications': '/services/information-technology-and-telecommunications',
    'Automotive and Mobility Solutions': '/services/automotive-and-mobility-solutions',
    'Fast-Moving Consumer Goods (FMCG)': '/services/fast-moving-consumer-goods',
    'Healthcare and Pharmaceutical Industries': '/services/healthcare-and-pharmaceutical',
    'Energy and Utility Services': '/services/energy-and-utilities',
    'E-Commerce and Digital Retail': '/services/retail-and-consumer-products',
    'Aviation and Aerospace': '/services/aviation-and-aerospace',
    'Banking and Financial Services': '/services/banking-and-financial-services',
    'Education and Learning': '/services/education-and-learning',
    'Chemical Industry': '/services/chemical-industry',
    'Professional and Consulting Services': '/services/professional-and-consulting-services',
    'Travel, Tourism, and Hospitality': '/services/travel-tourism-and-hospitality'
  };
  
  return serviceMap[industryName] || '/services';
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            Industry Expertise
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            CROSS-INDUSTRY EXPERTISE
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our exceptional proficiency across various industries and markets empowers us to make a substantial impact 
            on the growth of our clients within these sectors.
          </p>
        </div>
      </Section>

      {/* Expertise Features */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseFeatures.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                {index === 0 && <Users className="h-6 w-6 text-primary" />}
                {index === 1 && <BarChart3 className="h-6 w-6 text-primary" />}
                {index === 2 && <TrendingUp className="h-6 w-6 text-primary" />}
                {index === 3 && <Globe className="h-6 w-6 text-primary" />}
                  </div>
              <p className="text-muted-foreground">{feature}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Industry Coverage Section */}
      <Section className="bg-muted/50">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Industry Coverage</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive research and insights across diverse sectors, 
            helping businesses navigate complex market dynamics and achieve sustainable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className={`h-12 w-12 rounded-lg ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg leading-tight">{industry.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed mb-4">
                  {industry.description}
                </CardDescription>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                  <Link href={getServiceLink(industry.name)}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Blitz Insights for Industry Research?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our cross-industry expertise enables us to provide unique perspectives and comprehensive insights 
              that drive strategic decision-making and business growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Global Market Understanding</h3>
                  <p className="text-muted-foreground">Deep insights into international markets and cross-border business dynamics.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart3 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Data-Driven Insights</h3>
                  <p className="text-muted-foreground">Advanced analytics and research methodologies for accurate market intelligence.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Industry-Specific Expertise</h3>
                  <p className="text-muted-foreground">Specialized knowledge and experience across diverse industry verticals.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Strategic Growth Focus</h3>
                  <p className="text-muted-foreground">Actionable recommendations that drive measurable business outcomes.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Our Research Approach</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">1</div>
                <span className="text-sm">Comprehensive market analysis and competitive intelligence</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">2</div>
                <span className="text-sm">Industry-specific trend identification and forecasting</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">3</div>
                <span className="text-sm">Stakeholder interviews and expert consultations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">4</div>
                <span className="text-sm">Data validation and quality assurance processes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">5</div>
                <span className="text-sm">Strategic recommendations and implementation guidance</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl text-white p-8 lg:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Explore Industry Insights?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Connect with our industry experts to discover how our cross-sector expertise 
            can drive growth and competitive advantage for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300">
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}