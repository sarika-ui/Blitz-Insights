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
  Users,
  MapPin,
  Plane,
  Hotel,
  Shield,
  Activity,
  Compass,
  Utensils
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Travel, Tourism & Hospitality Market Research | Blitz Insights',
  description: 'Expert travel, tourism, and hospitality market research solutions. Navigate the hospitality landscape with data-driven insights on hotels, travel services, and tourism development.',
};

const coreServices = [
  {
    title: 'Hotel & Hospitality Analysis',
    description: 'Comprehensive research on hotel operations, guest experience, and hospitality management',
    icon: Hotel
  },
  {
    title: 'Travel Services Market',
    description: 'In-depth analysis of travel agencies, tour operators, and travel technology platforms',
    icon: Plane
  },
  {
    title: 'Tourism Development Research',
    description: 'Market intelligence on destination marketing, tourism trends, and visitor behavior',
    icon: Compass
  },
  {
    title: 'Hospitality Technology',
    description: 'Research on hotel tech, booking platforms, and digital transformation in hospitality',
    icon: Activity
  },
  {
    title: 'Food & Beverage Services',
    description: 'Analysis of restaurant operations, culinary trends, and food service management',
    icon: Utensils
  },
  {
    title: 'Hospitality Compliance',
    description: 'Compliance research, safety standards, and regulatory frameworks in hospitality',
    icon: Shield
  }
];

const expertiseAreas = [
  'Hotel Management',
  'Travel Agencies',
  'Tour Operators',
  'Destination Marketing',
  'Restaurant Services',
  'Event Management',
  'Cruise Lines',
  'Airline Services',
  'Car Rental Services',
  'Hospitality Technology'
];

const clientTypes = [
  'Hotel Chains & Resorts',
  'Travel Agencies',
  'Tour Operators',
  'Restaurant Groups',
  'Event Management Companies',
  'Cruise Lines',
  'Airlines',
  'Hospitality Technology Providers'
];

const whyChooseUs = [
  {
    title: 'Hospitality Industry Expertise',
    description: 'Deep understanding of hotel operations, travel services, and tourism market dynamics',
    icon: Hotel
  },
  {
    title: 'Global Tourism Networks',
    description: 'Access to hospitality experts, travel professionals, and tourism stakeholders worldwide',
    icon: Globe
  },
  {
    title: 'Customer Experience Focus',
    description: 'Specialized knowledge in guest satisfaction, service quality, and hospitality excellence',
    icon: Users
  },
  {
    title: 'Technology-Driven Insights',
    description: 'Advanced analytics for hospitality trends, booking patterns, and customer preferences',
    icon: Activity
  }
];

const hospitalityTrends = [
  'Digital Transformation in Hospitality',
  'Sustainable Tourism and Eco-Travel',
  'Personalization and Guest Experience',
  'Contactless Services and Technology',
  'Local and Authentic Travel Experiences',
  'Health and Wellness Tourism',
  'Business Travel Evolution',
  'Hospitality Workforce Development'
];

export default function TravelTourismHospitalityPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-amber-500/5 via-background to-orange-500/5">
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            Travel & Hospitality Expertise
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            TRAVEL, TOURISM & HOSPITALITY RESEARCH
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Navigate the dynamic hospitality and tourism landscape with our expert market research solutions. 
            From hotels to travel services, we provide data-driven insights for hospitality industry success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/case-studies">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* What We Do Section */}
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">What We Do</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our hospitality and tourism research helps hotels, travel companies, and tourism organizations 
            understand market dynamics, optimize guest experiences, and navigate industry challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Expertise Areas Section */}
      <Section className="bg-muted/50">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Expertise Areas</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive coverage across all major segments of travel and hospitality
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="flex items-center space-x-2 p-3 rounded-lg bg-background border">
              <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0" />
              <span className="text-sm font-medium">{area}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Who We Work With Section */}
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Who We Work With</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Serving diverse clients across the travel and hospitality ecosystem
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientTypes.map((client, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-lg bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                <Hotel className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold mb-2">{client}</h3>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-muted/50">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our unique combination of hospitality expertise and research excellence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyChooseUs.map((reason, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <reason.icon className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Future Trends Section */}
      <Section>
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Future Trends in Travel & Hospitality</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with insights into emerging trends shaping the hospitality and tourism industry
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hospitalityTrends.map((trend, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <span className="font-medium">{trend}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Transform Your Hospitality Business?</h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Partner with us to navigate the evolving travel and hospitality landscape with confidence. 
            Get the insights you need to drive innovation and growth in your hospitality operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Your Research Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600" asChild>
              <Link href="/case-studies">
                View Hospitality Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
