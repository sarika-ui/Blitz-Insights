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
  Monitor,
  Wifi,
  Zap,
  Shield,
  Target,
  Clock,
  Award,
  Lightbulb,
  Network,
  Server,
  Smartphone,
  Cloud,
  Database,
  Settings,
  Headphones,
  Phone,
  Mail,
  MessageSquare
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'IT and Telecom Market Research | Blitz Insights',
  description: 'Expert IT and telecom market research solutions. Stay ahead with data-driven insights on global IT trends, emerging technologies, and telecom innovations.',
};

const coreServices = [
  'Identifying Business Opportunities',
  'Providing Market Intelligence',
  'Forecasting Industry Trends',
  'Analysing Vendor Gaps',
  'Delivering Sales Intelligence',
  'Conducting Thought Leadership Research',
  'Gathering CIO/CTO Think Tank Insights',
  'Assessing Emerging Tech Trends',
  'Analysing Customer Churn',
  'Evaluating Security & Risk',
  'Running Voice of Customer Programs',
  'Developing Product Strategy & Insights',
  'Offering Digital Marketing Analysis',
  'Uncovering Customer Intelligence',
  'Managing Brand Portfolios'
];

const expertiseAreas = [
  {
    name: 'Networking Solutions & Equipment',
    icon: Network,
    description: 'Comprehensive analysis of networking infrastructure and equipment markets'
  },
  {
    name: 'Network Infrastructure and Managed Services',
    icon: Server,
    description: 'Deep insights into network infrastructure and managed service providers'
  },
  {
    name: 'IT & Telecom Software Applications',
    icon: Monitor,
    description: 'Analysis of software applications and digital solutions in IT & telecom'
  },
  {
    name: 'Machine-to-Machine (M2M) and Internet of Things (IoT)',
    icon: Smartphone,
    description: 'Expert research on M2M communications and IoT ecosystem development'
  },
  {
    name: 'Value-Added Telecom Services',
    icon: Cloud,
    description: 'Insights into value-added services and innovative telecom offerings'
  },
  {
    name: 'Enterprise & Business Solutions',
    icon: Building2,
    description: 'Comprehensive analysis of enterprise IT solutions and business applications'
  }
];

const clientTypes = [
  'Hardware Manufacturers',
  'IT Enterprise Solution Providers',
  'Enterprise Service Companies',
  'Digital Technology Leaders',
  'Original Equipment Manufacturers (OEMs)',
  'Internet Service Providers (ISPs)',
  'IoT & Machine-to-Machine (M2M) Companies',
  'Value-Added Resellers (VARs)',
  'Telecom Service Providers',
  'Telecom Equipment Manufacturers (TEMs)'
];

const whyChooseUs = [
  {
    title: 'Expertise in Telephonic & Online Surveys',
    description: 'End-to-end global custom research services with advanced quantitative and qualitative methodologies. High-level interviews with business decision-makers.',
    icon: Headphones
  },
  {
    title: 'ISO 27001 & ISO 9001 Certified',
    description: 'Adheres to global best practices in data security and quality management. High-integrity data beyond standard compliance.',
    icon: Award
  },
  {
    title: 'Global Coverage',
    description: 'Operations spanning key markets across Asia, Europe, and the Americas. Localized expertise with broad international understanding.',
    icon: Globe
  },
  {
    title: 'Fast Turnaround Times',
    description: 'Committed to delivering high-quality research with quick turnaround times. Agile service model for time-sensitive insights.',
    icon: Clock
  }
];

const faqs = [
  {
    question: 'What is IT industry analysis, and why is it important for businesses?',
    answer: 'IT industry analysis focuses on evaluating trends, challenges, and opportunities within the information technology sector. It is essential because it equips businesses with practical insights that aid in strategic decision-making, managing risks, and fostering innovation.'
  },
  {
    question: 'How can telecom market research add value to my business?',
    answer: 'Telecom market research offers in-depth data on market dynamics, consumer behaviour, and the competitive environment. This valuable information helps businesses make informed decisions, streamline operations, and gain a competitive edge in the telecom sector.'
  },
  {
    question: 'What are the core components of telecom industry market research?',
    answer: 'Telecom industry market research typically examines factors such as market trends, competitive forces, consumer preferences, technological advancements, and regulatory changes. These insights guide companies in navigating the complexities of the telecom landscape.'
  },
  {
    question: 'How does Blitz Insights conduct IT and telecom market research?',
    answer: 'Blitz Insights utilizes a range of research techniques, including surveys, interviews, and data analysis, to provide thorough IT and telecom market research. By leveraging industry-specific reports and advanced methodologies, we deliver precise and actionable insights.'
  },
  {
    question: 'What sets Blitz Insights apart as a top IT market research provider?',
    answer: 'Blitz Insights stands out due to its global presence, extensive industry knowledge, and dedication to delivering tailored research solutions. Our commitment to accuracy and efficiency ensures clients receive timely insights that drive successful business outcomes.'
  },
  {
    question: 'Can telecom market research reports help identify new business opportunities?',
    answer: 'Yes, telecom market research reports play a key role in uncovering new opportunities by analysing market trends, emerging technologies, and changing consumer demands. This information helps businesses tap into new markets and stay ahead of the competition.'
  },
  {
    question: 'Which industries does Blitz Insights serve through its IT industry market research?',
    answer: 'Blitz Insights provides specialized market research services to a wide array of industries, including hardware and software providers, IT enterprise solutions, fintech companies, digital innovators, and telecom service providers, tailoring our research to meet each industry\'s unique needs.'
  },
  {
    question: 'How can IT market research support product development?',
    answer: 'IT market research provides insights into customer needs, market gaps, and emerging trends, all of which are essential for guiding the product development process. This ensures that new products align with current market demands and have a higher probability of success.'
  },
  {
    question: 'What advantages does working with a telecom market research firm like Blitz Insights offer?',
    answer: 'Partnering with Blitz Insights grants businesses access to expert analysis, up-to-date market data, and customized research solutions. This helps companies make strategic decisions backed by reliable and accurate data.'
  },
  {
    question: 'How fast can Blitz Insights deliver IT and telecom market research findings?',
    answer: 'Blitz Insights is known for its quick turnaround, delivering IT and telecom market research results on-demand. This ensures that our clients receive timely insights, enabling them to make well-informed decisions in a rapidly changing industry.'
  }
];

export default function ITTelecomPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-blue-500/5 via-background to-purple-500/5">
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            IT & Telecommunications
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Blitz Insights: IT and Telecom
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            In the ever-evolving IT and telecom industries, staying competitive isn't just about following the latest tech—it's about understanding the trends that shape the future. At Blitz Insights, we empower businesses to seize new opportunities and make well-informed decisions through customized research solutions.
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
            <h2 className="text-3xl sm:text-4xl font-bold">WHAT WE DO</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When you partner with Blitz Insights for IT and telecom analysis, you're teaming up with forward-thinkers who stay on the pulse of industry shifts. We are agile, driven, and well-versed in the challenges your business faces in the tech and telecom arenas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Blitz Insights, we don't settle for surface-level analysis. We dig deep to provide tailored solutions that address your unique goals. Whether it's discovering new opportunities in IT or exploring breakthrough telecom technologies, our research puts your business ahead of the curve.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a global perspective and local expertise, our insights are always relevant—whether tackling niche markets or industry-wide trends.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Our Expertise</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                  <Target className="h-4 w-4" />
                </div>
                <span className="text-sm">Customized research solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <span className="text-sm">Industry trend analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                  <Users className="h-4 w-4" />
                </div>
                <span className="text-sm">Decision-maker connections</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                  <Globe className="h-4 w-4" />
                </div>
                <span className="text-sm">Global market insights</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Services Section */}
      <Section className="bg-muted/50" id="services">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Core Services Include:</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive research solutions designed to drive innovation and strategic growth in the IT and telecom sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Expertise Areas Section */}
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">End-to-End Expertise for Complete Industry Coverage</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive analysis across all major IT and telecom segments to provide complete market intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                  <area.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{area.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Who We Work With Section */}
      <Section className="bg-muted/50">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Who We Work With</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Blitz Insights, our IT and telecom research solutions are crafted to address the diverse needs of organizations across the technology and telecommunications landscape. We understand that every segment—whether it's hardware manufacturers or telecom service providers—faces unique challenges and opportunities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our research delivers actionable intelligence that empowers strategic decisions for a broad spectrum of stakeholders, including software developers, ITES companies, and fintech innovators. By partnering with us, businesses gain critical market insights to stay ahead in an ever-evolving digital world.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">We proudly serve a wide range of industries and service providers, including:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {clientTypes.map((client, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Us?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Blitz Insights is a trusted market research partner in the IT and Telecom sectors, transforming complex data into actionable intelligence. We empower our global clients to make informed, timely, and strategic decisions that drive growth and help them exceed their business goals.
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

      {/* Customized Solutions Section */}
      <Section className="bg-muted/50">
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Customized Solutions for Exceptional Value and Impact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Blitz Insights delivers fully tailored research solutions—never one-size-fits-all. Each project is built from the ground up to meet your specific needs and objectives. With deep experience across diverse industry verticals—including semiconductors, consumer electronics, and wireless communication devices—we understand the unique challenges faced by IT and Telecom market leaders and craft solutions that drive meaningful results.
          </p>
        </div>
      </Section>

      {/* FAQs Section */}
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">FAQs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Common questions about our IT and telecom market research services.
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg flex items-start gap-3">
                  <span className="text-primary font-bold">{index + 1}.</span>
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8 lg:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your IT & Telecom Strategy?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Connect with our IT and telecom experts to discover how our research insights can drive innovation, 
            optimize operations, and create competitive advantages for your business.
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
