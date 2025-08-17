import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { Linkedin, Twitter, ArrowRight, Users, Target, Lightbulb, Award } from 'lucide-react';
import teamData from '@/data/team.json';
import type { TeamMember } from '@/types';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Blitz-Insights team, our mission, values, and commitment to transforming businesses through strategic consulting.',
};

const team = teamData as TeamMember[];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            About Blitz-Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're a team of experienced strategists, analysts, and transformation experts 
            dedicated to helping businesses unlock their full potential through data-driven insights 
            and innovative solutions.
          </p>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower organizations with strategic insights and practical solutions 
                that drive sustainable growth, operational excellence, and competitive advantage 
                in today's rapidly evolving business landscape.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the trusted partner of choice for businesses seeking transformation, 
                recognized for our innovative approach, measurable results, and commitment 
                to long-term client success.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Target className="h-16 w-16 text-primary mx-auto" />
                <p className="text-lg font-semibold">Strategic Excellence</p>
                <p className="text-muted-foreground">
                  Delivering measurable impact through proven methodologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-muted/50">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Core Values</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide our approach to every client engagement 
            and drive our commitment to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Target,
              title: 'Results-Driven',
              description: 'We focus on measurable outcomes that directly impact your business performance and growth.',
            },
            {
              icon: Users,
              title: 'Collaborative',
              description: 'We work as an extension of your team, fostering knowledge transfer and sustainable capabilities.',
            },
            {
              icon: Lightbulb,
              title: 'Innovative',
              description: 'We leverage cutting-edge methodologies and technologies to solve complex business challenges.',
            },
            {
              icon: Award,
              title: 'Excellence',
              description: 'We maintain the highest standards in everything we do, from analysis to implementation.',
            },
          ].map((value, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="space-y-4 p-0">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section id="team">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals with diverse backgrounds in strategy, 
            technology, and business transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <Card key={member.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="relative aspect-square rounded-full overflow-hidden mx-auto max-w-32">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl text-white p-8 lg:p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Work Together?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Let's discuss how our team's expertise can help accelerate your business transformation 
            and achieve your strategic objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/case-studies">
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}