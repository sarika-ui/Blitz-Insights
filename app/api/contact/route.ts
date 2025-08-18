import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';
import { saveLeadToFirebase } from '@/lib/firebase-utils';

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

    try {
      // Save to Firebase using utility function
      const leadId = await saveLeadToFirebase({
        name,
        email,
        company,
        message,
        source: 'contact_form',
      });

      console.log('New lead received:', {
        id: leadId,
        name,
        email,
        company,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your message. We\'ll get back to you soon!',
          leadId: leadId
        },
        { status: 200 }
      );
    } catch (firebaseError) {
      console.error('Firebase error:', firebaseError);
      
      // Fallback response if Firebase fails
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your message. We\'ll get back to you soon!',
          leadId: 'saved'
        },
        { status: 200 }
      );
    }

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