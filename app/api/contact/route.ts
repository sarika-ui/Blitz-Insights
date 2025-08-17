import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
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

    // Ensure the leads directory exists
    const leadsDir = path.join(process.cwd(), 'data', 'leads');
    if (!existsSync(leadsDir)) {
      await mkdir(leadsDir, { recursive: true });
    }

    // Write lead to JSON file
    const filename = `${lead.id}.json`;
    const filepath = path.join(leadsDir, filename);
    
    await writeFile(filepath, JSON.stringify(lead, null, 2), 'utf8');

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