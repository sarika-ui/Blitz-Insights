'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Lightweight pageview tracker stub. Replace with Plausible/GA as needed.
export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Minimal, privacy-friendly pageview event
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-console
      console.debug('[analytics] pageview', { path: pathname, ts: Date.now() });
    }
  }, [pathname]);

  return null;
}


