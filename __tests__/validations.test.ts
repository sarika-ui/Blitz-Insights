import { describe, it, expect } from 'vitest';
import { contactFormSchema } from '@/lib/validations';

describe('contactFormSchema', () => {
  it('validates correct input', () => {
    const result = contactFormSchema.safeParse({
      name: 'John Doe',
      email: 'john@example.com',
      company: 'Acme Inc',
      message: 'Looking to discuss a project about data analytics.',
    });
    expect(result.success).toBe(true);
  });

  it('rejects invalid email', () => {
    const result = contactFormSchema.safeParse({
      name: 'John Doe',
      email: 'invalid',
      company: 'Acme Inc',
      message: 'Hello there! This is at least 10 chars.',
    });
    expect(result.success).toBe(false);
  });
});


