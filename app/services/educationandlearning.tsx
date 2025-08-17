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
  GraduationCap,
  Zap,
  Target,
  Clock,
  Award,
  Headphones,
  BookOpen,
  Monitor,
  Smartphone,
  Brain,
  Lightbulb
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Education & Learning Market Research | Blitz Insights',
  description: 'Expert education and learning market research solutions. Navigate the education landscape with data-driven insights on EdTech, learning outcomes, and educational trends.',
};

const coreServices = [
  'Educational technology market analysis and adoption trends',
  'Student and teacher behavior research and preferences',
  'Learning outcomes and educational effectiveness studies',
  'EdTech product development and market validation',
  'Institutional decision-making and procurement processes',
  'Online learning and digital education platforms',
  'Educational content and curriculum development',
  'Student recruitment and enrollment strategies',
  'Educational policy and regulatory compliance',
  'Competitive analysis in education markets',
  'Educational ROI and investment analysis'
];

const expertiseAreas = [
  {
    category: 'Educational Technology',
    items: [
      'EdTech Market Analysis',
      'Digital Learning Platforms',
      'Educational Software Solutions',
      'Mobile Learning Applications',
      'Virtual Reality in Education'
    ]
  },
  {
    category: 'Learning Analytics',
    items: [
      'Student Performance Tracking',
      'Learning Outcome Measurement',
      'Educational Data Analytics',
      'Predictive Learning Models',
      'Personalized Learning Insights'
    ]
  },
  {
    category: 'Institutional Research',
    items: [
      'Higher Education Market Analysis',
      'K-12 Education Insights',
      'Corporate Training Solutions',
      'Professional Development Programs',
      'Educational Policy Research'
    ]
  }
];

const clientTypes = [
  {
    name: 'Educational Institutions',
    description: 'We help universities, schools, and training organizations understand market trends, optimize learning outcomes, and develop effective educational strategies.'
  },
  {
    name: 'EdTech Companies',
    description: 'Our research supports EdTech companies with market validation, product development insights, and competitive analysis.'
  },
  {
    name: 'Educational Publishers',
    description: 'We provide educational publishers with content development insights, market trends, and digital transformation strategies.'
  },
  {
    name: 'Corporate Training Providers',
    description: 'Our research helps corporate training providers understand learning needs and develop effective training solutions.'
  }
];

const whyChooseUs = [
  {
    title: 'Education Expertise',
    subtitle: 'Deep Industry Knowledge',
    description: 'Our team has extensive experience in education markets, understanding the unique challenges of learning and development.',
    icon: GraduationCap
  },
  {
    title: 'Global Education Network',
    subtitle: 'Worldwide Coverage',
    description: 'Access to educational institutions and learners across global markets for comprehensive education insights.',
    icon: Globe
  },
  {
    title: 'Technology-Driven',
    subtitle: 'EdTech Focus',
    description: 'Specialized expertise in educational technology and digital learning solutions.',
    icon: Monitor
  },
  {
    title: 'Data-Driven Insights',
    subtitle: 'Learning Analytics',
    description: 'Advanced analytics to provide deeper insights into learning outcomes and educational effectiveness.',
    icon: TrendingUp
  }
];

const educationTrends = [
  {
    title: 'Digital Transformation',
    subtitle: 'EdTech Revolution',
    description: 'Rapid adoption of digital technologies and online learning platforms transforming education delivery.',
    icon: Monitor
  },
  {
    title: 'Personalized Learning',
    subtitle: 'Adaptive Education',
    description: 'AI-driven personalized learning experiences tailored to individual student needs and learning styles.',
    icon: Brain
  },
  {
    title: 'Microlearning',
    subtitle: 'Bite-Sized Education',
    description: 'Growing demand for short, focused learning modules and micro-credentials.',
    icon: Lightbulb
  },
  {
    title: 'Lifelong Learning',
    subtitle: 'Continuous Education',
    description: 'Increasing focus on continuous learning and professional development across all age groups.',
    icon: BookOpen
  }
];

export default function EducationLearningPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-purple-500/5 via-background to-blue-500/5">
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            Education & Learning
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Education & Learning
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The education and learning sector is experiencing unprecedented transformation, driven by technological innovation, changing learning preferences, and evolving educational needs. Success in this dynamic landscape requires deep understanding of learning outcomes, educational technology adoption, and market trends.
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
            <h2 className="text-3xl sm:text-4xl font-bold">Blitz Insights: Education Market Research Excellence</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Blitz Insights specializes in education and learning market research, providing comprehensive analysis and strategic insights that help organizations navigate the complex education landscape. Our expertise spans from K-12 to higher education, from EdTech to corporate training.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Our Education Research Covers:</h3>
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
          <h2 className="text-3xl sm:text-4xl font-bold">Comprehensive Education Research Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our education market research covers the full spectrum of learning and development sectors, providing deep insights for strategic decision-making.
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
            At Blitz Insights, we partner with education organizations across the entire learning ecosystem to deliver actionable insights and strategic guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientTypes.map((client, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                  <GraduationCap className="h-6 w-6 text-purple-600" />
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
          <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Blitz Insights for Education Research?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our specialized education expertise and deep industry knowledge make us the ideal partner for education and learning market research.
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

      {/* Education Trends Section */}
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Emerging Education Trends</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with insights into the latest trends shaping the future of education and learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationTrends.map((trend, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                  <trend.icon className="h-6 w-6 text-purple-600" />
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
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl text-white p-8 lg:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Education with Data-Driven Insights?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Connect with our education research experts to discover how our insights can drive innovation, 
            improve learning outcomes, and create competitive advantages in the education industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300">
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
