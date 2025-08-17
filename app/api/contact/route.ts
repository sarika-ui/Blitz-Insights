import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';
import type { Lead } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validationResult = contactFormSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid form data',
          details: validationResult.error.errors 
        },
        { status: 400 }
      );
    }

    const { name, email, company, message } = validationResult.data;

    // Create lead object
    const lead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString(),
      source: 'contact_form',
    };

    // For Vercel deployment, we'll log the lead instead of writing to file system
    // since serverless functions have read-only file system
    console.log('New lead received:', JSON.stringify(lead, null, 2));
    
    // In production, you might want to send this to a database or external service
    // For now, we'll just log it for demonstration purposes

    // Log to console for debugging
    console.log('New lead received:', {
      id: lead.id,
      name: lead.name,
      email: lead.email,
      company: lead.company,
      timestamp: lead.timestamp,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We\'ll get back to you soon!',
        leadId: lead.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form API error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}