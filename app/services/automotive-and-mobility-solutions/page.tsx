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
  MessageSquare,
  Bike,
  Truck,
  Bus,
  Train,
  Plane,
  Ship,
  Wifi,
  Battery,
  Gauge,
  Eye,
  Home,
  MapPin,
  Cog,
  Wrench,
  Palette,
  Music,
  Lock,
  Star,
  Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Automotive & Mobility Market Research | Blitz Insights',
  description: 'Expert automotive and mobility market research solutions. Navigate the future of transportation with data-driven insights on EVs, autonomous vehicles, and mobility trends.',
};

const coreServices = [
  'Strategically position their brand in the automotive and mobility sectors',
  'Explore the evolving EV landscape',
  'Leverage emerging market and product trends',
  'Discover untapped, non-traditional markets for automotive technologies',
  'Identify key competitive differentiators to support decision-making',
  'Benchmark best practices and align internal resources accordingly',
  'Map customer journey gaps and highlight growth opportunities',
  'Enhance marketing messages, tools, and sales strategies',
  'Test and validate new concepts, ideas, or prototypes',
  'Set priorities for R&D and engineering initiatives',
  'Develop performance measurement programs to track and drive improvements'
];

const expertiseAreas = [
  {
    category: 'Mobility & Transportation Trends',
    items: [
      'Shared Mobility Solutions',
      'Autonomous Vehicles (AVs)',
      'Connected Mobility & Telematics',
      'Integrated & Multimodal Transportation Systems'
    ]
  },
  {
    category: 'Automobile Manufacturing',
    items: [
      'Two-Wheelers and Three-Wheelers: Motorbikes, Scooters, Mopeds, E-Scooters & E-Bikes',
      'Three-Wheelers: Passenger Vehicles, Commercial Vehicles'
    ]
  },
  {
    category: 'Automotive Technology & Innovation',
    items: [
      'Electric Vehicles (EVs)',
      'Connected and Automated Vehicle Technologies',
      'Telematics Systems',
      'Fuel Efficiency & Economy Technologies',
      'Advanced Driver Assistance Systems (ADAS)',
      'Human-Machine Interface (HMI)',
      'Smart Home Integration'
    ]
  },
  {
    category: 'Automobile Interiors & Accessories',
    items: [
      'Vehicle Infotainment Systems',
      'Security & Safety Products',
      'Decorative Components',
      'Fenders, Spoilers, Panels, and Consoles',
      'Seating Solutions',
      'Carpets & Flooring'
    ]
  },
  {
    category: 'Auto Components & Mechanical Systems',
    items: [
      'Engine & Chassis Components',
      'Automobile Lighting Systems',
      'Electrical Systems',
      'Tyres and Axles',
      'Braking Systems',
      'Suspension Systems',
      'Gearboxes',
      'Shock Absorbers',
      'CNG Kits'
    ]
  }
];

const strategicServices = [
  {
    title: 'IDEATION & INNOVATION',
    items: [
      'Concept & Prototype Testing',
      'Product Brainstorming & Ideation',
      'Development & Validation of New Products',
      'User Experience Simulations',
      'Feature Optimization & Enhancements'
    ]
  },
  {
    title: 'MARKET INSIGHTS & ANALYSIS',
    items: [
      'Industry Trends & Market Dynamics',
      'Identification of Emerging Segments',
      'Exploration of Growth Opportunities',
      'Analysis of Key Market Influencers',
      'Competitive Benchmarking & Positioning',
      'Brand Perception & Awareness'
    ]
  },
  {
    title: 'RELATIONSHIP & STRATEGIC MAPPING',
    items: [
      'Client Feedback & Insight Gathering',
      'Performance Metrics & KPIs',
      'Ongoing Benchmarking & Progress Tracking',
      'Product/Service Optimization',
      'Targeted Marketing Strategy',
      'Market Expansion Opportunities'
    ]
  }
];

const clientTypes = [
  {
    name: 'Automobile Manufacturers',
    description: 'We deliver deep market insights that help automotive manufacturers stay ahead of industry trends, streamline decision-making, and drive innovation in a fast-evolving landscape.'
  },
  {
    name: 'Automotive Suppliers',
    description: 'Blitz Insights provides actionable intelligence that enables suppliers to spot growth opportunities, enhance their product strategies, and stay competitive in the global marketplace.'
  },
  {
    name: 'Aftermarket Service Providers',
    description: 'We work closely with aftermarket players to offer tailored insights that align with customer expectations, fuel expansion strategies, and strengthen market positioning.'
  },
  {
    name: 'Dealerships & Distributors',
    description: 'Our research helps dealerships and distributors stay informed about customer behaviour, market dynamics, and competitor strategies—ultimately boosting operational efficiency and sales performance.'
  },
  {
    name: 'Automakers & Auto OEMs',
    description: 'We equip both automakers and Original Equipment Manufacturers with data-backed strategies to navigate industry shifts, optimize production, and refine go-to-market plans.'
  },
  {
    name: 'Automotive Software Companies',
    description: 'Blitz Insights supports tech-driven companies in the automotive space with forward-looking market research, helping them create innovative digital solutions and capture new opportunities.'
  }
];

const whyChooseUs = [
  {
    title: 'Expertise in Surveys & Stakeholder Interviews',
    subtitle: 'Mastering Telephonic & Online Research',
    description: 'Blitz Insights brings full-spectrum research capabilities to the table, utilizing advanced quantitative and qualitative approaches. Our seasoned interviewers specialize in engaging high-level business decision-makers, capturing valuable insights that drive real results.',
    icon: Headphones
  },
  {
    title: 'Certified for Excellence',
    subtitle: 'ISO 27001 & ISO 9001 Accreditation',
    description: 'Blitz Insights is ISO 27001 & ISO 9001 certified, ensuring strict adherence to international standards in data security and quality management. We go beyond compliance to provide trustworthy, high-value data that supports critical business decisions.',
    icon: Award
  },
  {
    title: 'Global Research Reach',
    subtitle: 'Local Knowledge. Global Perspective.',
    description: 'Blitz Insights combines deep regional expertise with a global viewpoint to deliver rich, reliable FMCG and automotive market research. Whether you\'re expanding into Asia, exploring trends in Europe, or adapting to market shifts in the Americas, our insights help you stay ahead of the curve.',
    icon: Globe
  },
  {
    title: 'Speed When It Matters Most',
    subtitle: 'Fast, Insightful Turnarounds',
    description: 'In the high-speed FMCG and automotive industries, timing is everything. Blitz Insights is equipped to deliver rapid research results—whether you\'re gearing up for a product launch or responding to market changes. Our quick turnaround services ensure you get the insights you need, exactly when you need them.',
    icon: Clock
  }
];

const futureTrends = [
  {
    title: 'EV Market Trends',
    subtitle: 'Electric Vehicles: Shaping Tomorrow\'s Roads',
    description: 'The EV sector is evolving at an extraordinary pace, fuelled by innovation in technology and rising sustainability demands. As automakers ramp up R&D efforts in electrification, the journey toward mainstream EV adoption must tackle challenges like cost barriers, battery limitations, infrastructure gaps, and renewable energy integration.',
    icon: Battery
  },
  {
    title: 'The Autonomous Leap',
    subtitle: 'AI-Driven Vehicles: A New Era',
    description: 'The emergence of artificial intelligence, machine learning, and neural networks is propelling autonomous vehicle technology forward. These self-driving solutions represent a paradigm shift in transportation, redefining safety, convenience, and mobility.',
    icon: Eye
  },
  {
    title: 'Shared Mobility in a Changed World',
    subtitle: 'Mobility-as-a-Service: The Post-Pandemic Evolution',
    description: 'Changing consumer habits and environmental concerns are boosting demand for shared mobility solutions. Blitz Insights explores the growing role of Mobility-as-a-Service (Maas) in reducing individual ownership and promoting efficient, sustainable transport models.',
    icon: Users
  },
  {
    title: 'Always Connected',
    subtitle: 'Smart Cars, Smarter Experiences',
    description: 'Connectivity is now a core element of modern vehicles. Today\'s cars are integrated ecosystems, enabled by real-time sensors and internet connectivity. This seamless integration is redefining how drivers interact with vehicles and the world around them.',
    icon: Wifi
  }
];

const faqs = [
  {
    question: 'What does automotive market research involve, and why is it essential?',
    answer: 'Automotive market research focuses on studying consumer behaviour, technological advancements, competitive trends, and regulatory developments within the auto industry. It plays a key role in helping companies make smarter decisions, uncover growth opportunities, and stay aligned with shifting market dynamics.'
  },
  {
    question: 'How does Blitz Insights add value to businesses through automotive market research?',
    answer: 'Blitz Insights delivers in-depth, data-driven insights into the automotive landscape—ranging from trend forecasting to competitor analysis. Our customized research empowers businesses to refine their strategies, adapt to market changes, and lead with innovation in an increasingly competitive environment.'
  },
  {
    question: 'What are the key components of a thorough automotive market study?',
    answer: 'A detailed automotive market study includes analysis of consumer preferences, market segmentation, product trends, technology evolution, and the competitive landscape. It also factors in government policies and sustainability goals, offering a complete picture to support strategic planning.'
  },
  {
    question: 'How can automotive research help Original Equipment Manufacturers (OEMs)?',
    answer: 'OEMs can use automotive research to better understand customer needs, forecast demand, analyse competitors, and guide product development. This information supports more efficient production planning, stronger market positioning, and long-term business growth.'
  },
  {
    question: 'Who can benefit from automotive industry research insights?',
    answer: 'A wide range of stakeholders can benefit—including automakers, OEMs, parts suppliers, electric vehicle startups, tech solution providers, and aftermarket service companies. These insights help each player tackle specific challenges and make the most of emerging trends in mobility.'
  },
  {
    question: 'How do automotive research reports support the electric vehicle (EV) sector?',
    answer: 'Research reports offer valuable guidance for the EV sector by highlighting trends in battery innovation, infrastructure expansion, government incentives, and consumer adoption. These insights help companies build competitive EV strategies and speed up the transition to sustainable mobility.'
  },
  {
    question: 'What can businesses learn about autonomous vehicles from automotive research?',
    answer: 'Through automotive research, businesses gain clarity on the evolving landscape of self-driving technology—including advancements in AI, sensor systems, market acceptance, and regulations. This helps companies assess investment opportunities and position themselves for the future of autonomous mobility.'
  },
  {
    question: 'What makes Blitz Insights the right partner for automotive market research?',
    answer: 'Blitz Insights stands out for its industry-specific expertise, global reach, and commitment to delivering actionable insights. Our tailored research solutions help clients confidently navigate complex markets, adapt to new trends, and drive success in the fast-changing automotive world.'
  }
];

export default function AutomotiveMobilityPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gray-500/5 via-background to-blue-500/5">
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            Automotive & Mobility
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Automotive & Mobility
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The automotive and mobility sector is actively redefining what mobility means in the 21st century. The traditional concept of a vehicle—and its usage—is undergoing a major shift. This global industry faces intense competition, evolving customer expectations, financial constraints, and environmental pressures.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            As a result, market research becomes essential for making strategic and future-ready decisions. With emerging trends like automotive subscription services, omnichannel sales approaches, and increasing demands from both consumers and regulators for sustainability, fuel efficiency, and alternative energy sources, the industry is experiencing a wave of disruption. Blitz Insights plays a pivotal role in navigating this transformation.
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
            <h2 className="text-3xl sm:text-4xl font-bold">Blitz Insights: Leading Automotive Market Research</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Blitz Insights is a leading name in automotive market research, offering comprehensive analysis and insights built on years of global industry experience. Our research empowers clients to make strategic decisions and drive innovation in the rapidly evolving automotive landscape.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-500/10 to-blue-500/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Our Research Empowers Clients to:</h3>
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
          <h2 className="text-3xl sm:text-4xl font-bold">End-to-End Expertise for Complete Industry Insights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our Automotive Market Research Solutions Cover comprehensive analysis across all major automotive and mobility segments.
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

      {/* Strategic Challenges Section */}
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Strategic Challenges We Help Overcome</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Blitz Insights, we leverage deep domain expertise in the automotive industry and a strong foundation in operational excellence to provide top-tier research solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strategicServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Who We Work With Section */}
      <Section className="bg-muted/50">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Who We Work With</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Blitz Insights, we partner with a broad spectrum of clients across the Automotive and Mobility ecosystem. Our research-driven insights are designed to empower strategic decisions, foster innovation, and support sustainable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientTypes.map((client, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gray-500/10 flex items-center justify-center mb-4 group-hover:bg-gray-500/20 group-hover:scale-110 transition-all duration-300">
                  <Car className="h-6 w-6 text-gray-600" />
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
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Why Blitz Insights?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving Smart Decisions with Data. Blitz Insights is a trusted leader in automotive and mobility market research, leveraging data to deliver actionable insights that empower global clients to make informed, timely, and accurate decisions.
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

      {/* Future Trends Section */}
      <Section className="bg-muted/50">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Future-Focused Vehicle Design</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Blitz Insights: Navigating Innovation. At Blitz Insights, we help clients understand and anticipate future trends in vehicle design and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {futureTrends.map((trend, index) => (
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

      {/* FAQs Section */}
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions (FAQs)</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Common questions about our automotive and mobility market research services.
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
        <div className="bg-gradient-to-r from-gray-600 to-blue-600 rounded-2xl text-white p-8 lg:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Navigate the Future of Automotive & Mobility?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Connect with our automotive and mobility experts to discover how our research insights can drive innovation, 
            optimize operations, and create competitive advantages for your business in the rapidly evolving transportation landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-gray-600 transition-all duration-300">
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
