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
  CreditCard,
  Zap,
  Target,
  Clock,
  Award,
  Headphones,
  DollarSign,
  Shield,
  Building2,
  PiggyBank,
  TrendingDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Banking & Finance Market Research | Blitz Insights',
  description: 'Expert banking and finance market research solutions. Navigate the financial services landscape with data-driven insights on banking trends, fintech innovation, and market dynamics.',
};

const coreServices = [
  'Banking and financial services market analysis',
  'Fintech innovation and digital banking trends',
  'Customer behavior and financial preferences research',
  'Investment and wealth management insights',
  'Regulatory compliance and risk assessment',
  'Payment systems and digital transactions',
  'Insurance and risk management analysis',
  'Credit and lending market intelligence',
  'Financial technology adoption studies',
  'Competitive analysis in financial services',
  'Financial inclusion and accessibility research'
];

const expertiseAreas = [
  {
    category: 'Digital Banking',
    items: [
      'Mobile Banking Solutions',
      'Digital Payment Systems',
      'Online Banking Platforms',
      'Fintech Integration',
      'Digital Customer Experience'
    ]
  },
  {
    category: 'Investment & Wealth',
    items: [
      'Investment Advisory Services',
      'Wealth Management Solutions',
      'Retirement Planning',
      'Portfolio Management',
      'Financial Planning Tools'
    ]
  },
  {
    category: 'Risk & Compliance',
    items: [
      'Regulatory Compliance Analysis',
      'Risk Assessment & Management',
      'Anti-Money Laundering (AML)',
      'Cybersecurity in Finance',
      'Financial Crime Prevention'
    ]
  }
];

const clientTypes = [
  {
    name: 'Traditional Banks',
    description: 'We help traditional banks understand market trends, optimize digital transformation, and enhance customer experience in the evolving financial landscape.'
  },
  {
    name: 'Fintech Companies',
    description: 'Our research supports fintech companies with market validation, product development insights, and competitive analysis.'
  },
  {
    name: 'Investment Firms',
    description: 'We provide investment firms with market intelligence, risk assessment, and strategic planning insights.'
  },
  {
    name: 'Insurance Companies',
    description: 'Our research helps insurance companies understand customer needs, market trends, and product development opportunities.'
  }
];

const whyChooseUs = [
  {
    title: 'Financial Expertise',
    subtitle: 'Deep Industry Knowledge',
    description: 'Our team has extensive experience in financial markets, understanding the unique challenges of banking and finance.',
    icon: CreditCard
  },
  {
    title: 'Regulatory Understanding',
    subtitle: 'Compliance Focus',
    description: 'Deep understanding of financial regulations and compliance requirements across different markets.',
    icon: Shield
  },
  {
    title: 'Global Financial Network',
    subtitle: 'Worldwide Coverage',
    description: 'Access to financial institutions and professionals across global markets for comprehensive insights.',
    icon: Globe
  },
  {
    title: 'Technology-Driven',
    subtitle: 'Fintech Focus',
    description: 'Specialized expertise in financial technology and digital banking solutions.',
    icon: TrendingUp
  }
];

const financeTrends = [
  {
    title: 'Digital Transformation',
    subtitle: 'Banking Revolution',
    description: 'Rapid adoption of digital technologies transforming traditional banking and financial services.',
    icon: Zap
  },
  {
    title: 'Fintech Innovation',
    subtitle: 'Technology Disruption',
    description: 'Emerging fintech solutions disrupting traditional financial services and creating new opportunities.',
    icon: TrendingUp
  },
  {
    title: 'Cryptocurrency & Blockchain',
    subtitle: 'Digital Assets',
    description: 'Growing adoption of cryptocurrency and blockchain technology in financial services.',
    icon: DollarSign
  },
  {
    title: 'Financial Inclusion',
    subtitle: 'Access for All',
    description: 'Increasing focus on providing financial services to underserved populations globally.',
    icon: Users
  }
];

export default function BankingFinancePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-green-500/5 via-background to-blue-500/5">
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            Banking & Finance
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Banking & Finance
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The banking and finance sector is undergoing unprecedented transformation, driven by technological innovation, changing customer expectations, and evolving regulatory landscapes. Success in this dynamic environment requires deep understanding of market trends, customer behavior, and technological disruption.
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
            <h2 className="text-3xl sm:text-4xl font-bold">Blitz Insights: Financial Services Market Research Excellence</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Blitz Insights specializes in banking and finance market research, providing comprehensive analysis and strategic insights that help organizations navigate the complex financial landscape. Our expertise spans from traditional banking to fintech innovation.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Our Financial Research Covers:</h3>
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
          <h2 className="text-3xl sm:text-4xl font-bold">Comprehensive Financial Research Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our banking and finance market research covers the full spectrum of financial services, providing deep insights for strategic decision-making.
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
            At Blitz Insights, we partner with financial organizations across the entire ecosystem to deliver actionable insights and strategic guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientTypes.map((client, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                  <CreditCard className="h-6 w-6 text-green-600" />
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
          <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Blitz Insights for Financial Research?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our specialized financial expertise and deep industry knowledge make us the ideal partner for banking and finance market research.
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

      {/* Finance Trends Section */}
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Emerging Financial Trends</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with insights into the latest trends shaping the future of banking and finance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {financeTrends.map((trend, index) => (
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
            Ready to Transform Your Financial Strategy with Data-Driven Insights?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Connect with our financial research experts to discover how our insights can drive innovation, 
            optimize operations, and create competitive advantages in the banking and finance industry.
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
