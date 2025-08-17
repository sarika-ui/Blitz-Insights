import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  TrendingUp,
  Zap,
  BarChart3,
  Settings,
  CheckCircle, 
  Globe, 
  Clock, 
  Target,
  Users,
  Building2,
  Car,
  Heart,
  ShoppingBag,
  GraduationCap,
  CreditCard,
  Monitor,
  Home,
  Plane,
  Beaker,
  Briefcase,
  MapPin,
  ShoppingCart,
  Wifi,
  Sprout,
  Factory
} from 'lucide-react';

const industries = [
  { name: 'Automotive & Transport', icon: Car },
  { name: 'Healthcare & Pharma', icon: Heart },
  { name: 'Consumer Goods (FMCG)', icon: ShoppingBag },
  { name: 'Retail & Packaged Products', icon: ShoppingCart },
  { name: 'Education & Learning', icon: GraduationCap },
  { name: 'Banking & Financial Services', icon: CreditCard },
  { name: 'Media & Digital Content', icon: Monitor },
  { name: 'Real Estate & Property', icon: Home },
  { name: 'Energy & Utility Systems', icon: Zap },
  { name: 'Aviation & Air Services', icon: Plane },
  { name: 'Chemical Industry', icon: Beaker },
  { name: 'Professional & Business Services', icon: Briefcase },
  { name: 'Travel, Hospitality & Tourism', icon: MapPin },
  { name: 'Online & Digital Commerce', icon: ShoppingCart },
  { name: 'IT & Communication Technologies', icon: Wifi },
  { name: 'Agriculture & Farming Sector', icon: Sprout },
  { name: 'Industrial & Manufacturing Systems', icon: Factory },
];

const services = [
  {
    title: 'Corporate Strategy & Market Research',
    description: 'Make smart and confident business decisions with the help of Blitz Insights\' corporate research expertise.',
    icon: Target,
    features: ['Strategic planning', 'Market analysis', 'Competitive intelligence', 'Business model innovation']
  },
  {
    title: 'Market Analysis and Industry Insights',
    description: 'Identify market opportunities and track industry trends.',
    icon: BarChart3,
    features: ['Market opportunity assessment', 'Industry trend analysis', 'Market sizing', 'Growth forecasting']
  },
  {
    title: 'Competitive Analysis',
    description: 'Assessing competitors to improve strategic positioning.',
    icon: Users,
    features: ['Competitor profiling', 'SWOT analysis', 'Market positioning', 'Competitive advantage identification']
  },
  {
    title: 'Market Entry Strategies',
    description: 'Develop customized plans for effective market entry.',
    icon: TrendingUp,
    features: ['Entry strategy development', 'Risk assessment', 'Go-to-market planning', 'Launch execution']
  },
  {
    title: 'Brand and Messaging Insights',
    description: 'Improve brand visibility and communication effectiveness.',
    icon: Building2,
    features: ['Brand performance tracking', 'Communication review', 'Audience analysis', 'Message optimization']
  },
  {
    title: 'Fast Research Assistance',
    description: 'Quick decisions need quick facts. Get fast research support for urgent projects.',
    icon: Clock,
    features: ['Rapid analysis', 'Quick-turnaround research', 'Urgent project support', 'Timely insights']
  }
];

const whyChooseUs = [
  {
    title: 'Technology-Driven Solutions',
    description: 'We use AI tools and data models to give you clear, accurate insights',
    icon: Zap
  },
  {
    title: 'Tailored Support',
    description: 'We customize every solution to fit your business goals',
    icon: Target
  },
  {
    title: 'Worldwide Experience',
    description: 'We work with many industries and offer a global view',
    icon: Globe
  },
  {
    title: 'Results That Matter',
    description: 'Our insights help you grow, improve efficiency, and stay ahead',
    icon: TrendingUp
  }
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="mb-4 animate-fade-in">
              Your Reliable Partner in Market Research
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in">
              WELCOME TO
              <span className="text-primary block">BLITZ INSIGHTS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-up">
              Blitz Insights is a leading market research firm committed to providing clear, practical insights that help businesses grow. 
              Our team of skilled consultants uses data-driven strategies tailored to your specific goals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" asChild>
              <Link href="/contact">
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Why Partner with Blitz Insights?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choosing the right market research partner is key to making informed business decisions. 
              At Blitz Insights, we go beyond basic research by focusing on your unique goals and delivering 
              high-quality, accurate insights that support strategic growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Tailored Research Services</h3>
                  <p className="text-muted-foreground">We design research solutions customized to your specific objectives—ensuring you receive relevant and actionable insights.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Insights with a Global Perspective</h3>
                  <p className="text-muted-foreground">Deep knowledge of global markets, helping you understand regional trends and dynamics across various geographies.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Advanced Technology for Smarter Research</h3>
                  <p className="text-muted-foreground">Latest innovations in research technology to deliver faster, more precise, and deeper insights.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Fast-Track Research Assistance</h3>
                  <p className="text-muted-foreground">Prompt yet comprehensive analysis to support urgent projects with reliable data when you need it.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Sector-Specific Knowledge</h3>
            <p className="text-muted-foreground mb-6">
              Blitz Insights' team brings rich expertise across industries, offering insights that are fine-tuned 
              to meet the unique challenges and opportunities within your sector.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {industries.slice(0, 8).map((industry, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <industry.icon className="h-4 w-4 text-primary" />
                  <span>{industry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-muted/50">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Range of Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Blitz Insights, we combine strong industry knowledge with smart research methods to offer 
            solutions that help businesses grow and make better decisions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
          ))}
        </div>
      </Section>

      {/* Industries Section */}
      <Section>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Blitz provides smart solutions for many sectors, with deep understanding of each industry's unique needs.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <industry.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">{industry.name}</h3>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-muted/50">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Blitz Insights?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Make smarter business decisions with Blitz's research experience and proven methodologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Proven Results</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our data-driven approach delivers measurable impact for organizations across industries.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Projects Completed' },
            { value: '150+', label: 'Happy Clients' },
            { value: '95%', label: 'Success Rate' },
            { value: '10+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2 group">
              <div className="text-4xl lg:text-5xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl text-white p-8 lg:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.1)_2px,transparent_2px)] opacity-30"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Partner with Blitz Insights
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Take your business to the next level with Blitz Insights. We offer research and consulting services 
              to help you reach your goals. Let Blitz turn your challenges into growth opportunities and smart decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Talk to Us Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-slate-900 transition-all duration-300">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}