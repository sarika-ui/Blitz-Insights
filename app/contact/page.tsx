import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from '@/components/forms/contact-form';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Blitz-Insights for strategic consulting, digital transformation, and business optimization services.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss how our strategic insights 
            and proven methodologies can drive your success.
          </p>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section>
        <ContactForm />
      </Section>

      {/* Contact Info Section */}
      <Section className="bg-muted/50">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold">Other Ways to Reach Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help and answer any questions you might have about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: MapPin,
              title: 'Our Office',
              details: ['123 Business District', 'San Francisco, CA 94105', 'United States'],
            },
            {
              icon: Phone,
              title: 'Phone',
              details: ['+1 (555) 123-4567', 'Mon-Fri 9AM-6PM PST'],
            },
            {
              icon: Mail,
              title: 'Email',
              details: ['hello@blitz-insights.com', 'Response within 24 hours'],
            },
            {
              icon: Clock,
              title: 'Business Hours',
              details: ['Monday - Friday', '9:00 AM - 6:00 PM PST'],
            },
          ].map((contact, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="space-y-4 p-0">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <contact.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{contact.title}</h3>
                  {contact.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quick answers to common questions about our services and process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              question: 'What types of organizations do you work with?',
              answer: 'We work with organizations of all sizes, from startups to Fortune 500 companies, across various industries including technology, retail, manufacturing, healthcare, and financial services.',
            },
            {
              question: 'How long do typical engagements last?',
              answer: 'Project duration varies based on scope and complexity. Strategic assessments typically take 4-8 weeks, while comprehensive transformations can span 6-18 months with ongoing support.',
            },
            {
              question: 'What makes your approach different?',
              answer: 'We combine deep industry expertise with data-driven methodologies and hands-on implementation support. Our collaborative approach ensures knowledge transfer and sustainable results.',
            },
            {
              question: 'Do you offer ongoing support after project completion?',
              answer: 'Yes, we provide various support options including quarterly reviews, performance monitoring, and additional consulting as needed to ensure long-term success.',
            },
          ].map((faq, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}