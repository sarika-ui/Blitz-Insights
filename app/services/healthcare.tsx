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
  Heart,
  Zap,
  Target,
  Clock,
  Award,
  Headphones,
  Pill,
  Stethoscope,
  Microscope,
  Shield,
  Activity
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Healthcare & Pharmaceutical Market Research | Blitz Insights',
  description: 'Expert healthcare and pharmaceutical market research solutions. Navigate the complex healthcare landscape with data-driven insights on medical devices, pharmaceuticals, and healthcare services.',
};

const coreServices = [
  'Pharmaceutical market analysis and drug development insights',
  'Medical device market research and regulatory compliance',
  'Healthcare provider and patient behavior analysis',
  'Biotechnology and life sciences market intelligence',
  'Healthcare technology and digital health solutions',
  'Clinical trial optimization and patient recruitment',
  'Healthcare policy and regulatory landscape analysis',
  'Market access and reimbursement strategy development',
  'Competitive intelligence in healthcare sectors',
  'Healthcare consumer insights and patient journey mapping',
  'Healthcare provider network analysis and optimization'
];

const expertiseAreas = [
  {
    category: 'Pharmaceutical Research',
    items: [
      'Drug Development & Clinical Trials',
      'Market Access & Pricing Strategies',
      'Regulatory Compliance & Approval Processes',
      'Patient Recruitment & Retention',
      'Post-Market Surveillance & Safety'
    ]
  },
  {
    category: 'Medical Devices',
    items: [
      'Device Innovation & Development',
      'Regulatory Pathways & Compliance',
      'Market Penetration Strategies',
      'Clinical Validation & Efficacy Studies',
      'Reimbursement & Market Access'
    ]
  },
  {
    category: 'Healthcare Services',
    items: [
      'Provider Network Analysis',
      'Patient Experience & Satisfaction',
      'Healthcare Technology Integration',
      'Quality Metrics & Performance',
      'Operational Efficiency Optimization'
    ]
  }
];

const clientTypes = [
  {
    name: 'Pharmaceutical Companies',
    description: 'We provide comprehensive market research to help pharmaceutical companies navigate complex regulatory environments, optimize drug development, and maximize market access.'
  },
  {
    name: 'Medical Device Manufacturers',
    description: 'Our research helps medical device companies understand market dynamics, regulatory requirements, and competitive landscapes to drive innovation and market success.'
  },
  {
    name: 'Healthcare Providers',
    description: 'We support healthcare providers with insights on patient behavior, operational efficiency, and strategic planning to improve care delivery and outcomes.'
  },
  {
    name: 'Biotechnology Firms',
    description: 'Our research empowers biotech companies with market intelligence, competitive analysis, and strategic insights to accelerate innovation and commercialization.'
  }
];

const whyChooseUs = [
  {
    title: 'Healthcare Expertise',
    subtitle: 'Deep Industry Knowledge',
    description: 'Our team has extensive experience in healthcare and pharmaceutical markets, understanding the unique challenges and regulatory complexities.',
    icon: Heart
  },
  {
    title: 'Regulatory Compliance',
    subtitle: 'Navigating Complex Requirements',
    description: 'We understand healthcare regulations and help clients navigate complex compliance requirements across different markets.',
    icon: Shield
  },
  {
    title: 'Global Healthcare Network',
    subtitle: 'Worldwide Coverage',
    description: 'Access to healthcare professionals, patients, and stakeholders across global markets for comprehensive insights.',
    icon: Globe
  },
  {
    title: 'Rapid Insights',
    subtitle: 'Time-Sensitive Research',
    description: 'Quick turnaround times for healthcare research, crucial for time-sensitive decisions in this fast-evolving industry.',
    icon: Clock
  }
];

const healthcareTrends = [
  {
    title: 'Digital Health Revolution',
    subtitle: 'Technology Transforming Healthcare',
    description: 'Telemedicine, AI diagnostics, and digital health platforms are revolutionizing patient care and healthcare delivery.',
    icon: Activity
  },
  {
    title: 'Personalized Medicine',
    subtitle: 'Precision Healthcare',
    description: 'Advances in genomics and biotechnology are enabling personalized treatment approaches and targeted therapies.',
    icon: Microscope
  },
  {
    title: 'Value-Based Care',
    subtitle: 'Outcomes Over Volume',
    description: 'Shift towards value-based care models focusing on patient outcomes and quality rather than service volume.',
    icon: Target
  },
  {
    title: 'Patient-Centric Approach',
    subtitle: 'Empowering Patients',
    description: 'Increasing focus on patient experience, engagement, and shared decision-making in healthcare delivery.',
    icon: Users
  }
];

export default function HealthcarePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-red-500/5 via-background to-pink-500/5">
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            Healthcare & Pharmaceutical
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Healthcare & Pharmaceutical Industries
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The healthcare and pharmaceutical industries are at the forefront of innovation, facing unprecedented challenges and opportunities. From breakthrough drug discoveries to revolutionary medical technologies, these sectors require deep market intelligence to navigate complex regulatory environments and deliver life-changing solutions.
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
            <h2 className="text-3xl sm:text-4xl font-bold">Blitz Insights: Healthcare Market Research Excellence</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Blitz Insights specializes in healthcare and pharmaceutical market research, providing comprehensive analysis and strategic insights that help organizations navigate the complex healthcare landscape. Our expertise spans from drug development to medical devices, from patient care to regulatory compliance.
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Our Healthcare Research Covers:</h3>
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
          <h2 className="text-3xl sm:text-4xl font-bold">Comprehensive Healthcare Research Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our healthcare market research covers the full spectrum of medical and pharmaceutical sectors, providing deep insights for strategic decision-making.
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
            At Blitz Insights, we partner with healthcare organizations across the entire ecosystem to deliver actionable insights and strategic guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientTypes.map((client, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 group-hover:scale-110 transition-all duration-300">
                  <Heart className="h-6 w-6 text-red-600" />
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
          <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Blitz Insights for Healthcare Research?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our specialized healthcare expertise and deep industry knowledge make us the ideal partner for healthcare market research.
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

      {/* Healthcare Trends Section */}
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Emerging Healthcare Trends</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with insights into the latest trends shaping the future of healthcare and pharmaceutical industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {healthcareTrends.map((trend, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 group-hover:scale-110 transition-all duration-300">
                  <trend.icon className="h-6 w-6 text-red-600" />
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
        <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl text-white p-8 lg:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Healthcare with Data-Driven Insights?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Connect with our healthcare research experts to discover how our insights can drive innovation, 
            improve patient outcomes, and create competitive advantages in the healthcare industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-red-600 transition-all duration-300">
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
