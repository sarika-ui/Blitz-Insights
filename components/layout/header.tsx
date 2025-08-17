'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

// Updated industries with correct URL mappings
const industries = [
  { name: 'Automotive & Mobility Solutions', href: '/services/automotive-and-mobility-solutions' },
  { name: 'Healthcare & Pharmaceutical', href: '/services/healthcare-and-pharmaceutical' },
  { name: 'Fast-Moving Consumer Goods', href: '/services/fast-moving-consumer-goods' },
  { name: 'Retail & Consumer Products', href: '/services/retail-and-consumer-products' },
  { name: 'Education & Learning', href: '/services/education-and-learning' },
  { name: 'Banking & Financial Services', href: '/services/banking-and-financial-services' },
  { name: 'Energy & Utilities', href: '/services/energy-and-utilities' },
  { name: 'Aviation & Aerospace', href: '/services/aviation-and-aerospace' },
  { name: 'Chemical Industry', href: '/services/chemical-industry' },
  { name: 'Professional & Consulting Services', href: '/services/professional-and-consulting-services' },
  { name: 'Travel, Tourism & Hospitality', href: '/services/travel-tourism-and-hospitality' },
  { name: 'IT & Telecommunications', href: '/services/information-technology-and-telecommunications' }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 font-bold text-xl"
          aria-label="Blitz-Insights Home"
        >
          <motion.span whileHover={{ rotate: -10 }} whileTap={{ scale: 0.95 }} className="inline-flex">
            <Zap className="h-6 w-6 text-primary" />
          </motion.span>
          <span>Blitz-Insights</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" role="navigation">
          {NAV_ITEMS.map((item) => (
            <div key={item.name} className="relative">
              {item.name === 'Industries' ? (
                <div className="relative">
                  <button
                    onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                    onMouseEnter={() => setIsIndustriesOpen(true)}
                    onMouseLeave={() => setIsIndustriesOpen(false)}
                    className={cn(
                      'flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary',
                      pathname === item.href
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    )}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={cn(
                      'h-4 w-4 transition-transform duration-200',
                      isIndustriesOpen ? 'rotate-180' : ''
                    )} />
                  </button>
                  
                  {/* Industries Dropdown */}
                  <AnimatePresence>
                    {isIndustriesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setIsIndustriesOpen(true)}
                        onMouseLeave={() => setIsIndustriesOpen(false)}
                        className="absolute top-full left-0 mt-2 w-80 bg-background border rounded-lg shadow-lg p-3 z-50"
                      >
                        <div className="grid grid-cols-1 gap-1">
                          {industries.map((industry, index) => (
                            <Link
                              key={index}
                              href={industry.href}
                              className="text-xs text-muted-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-muted/50 whitespace-nowrap"
                            >
                              {industry.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <ThemeToggle />
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            role="navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {NAV_ITEMS.map((item) => (
                  <motion.div key={item.name} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2 }}>
                    {item.name === 'Industries' ? (
                      <div>
                        <button
                          onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                          className={cn(
                            'flex items-center justify-between w-full text-sm font-medium transition-colors hover:text-primary',
                            pathname === item.href
                              ? 'text-primary'
                              : 'text-muted-foreground'
                          )}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={cn(
                            'h-4 w-4 transition-transform duration-200',
                            isIndustriesOpen ? 'rotate-180' : ''
                          )} />
                        </button>
                        <AnimatePresence>
                          {isIndustriesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-2 ml-4 space-y-1"
                            >
                              {industries.map((industry, index) => (
                                <Link
                                  key={index}
                                  href={industry.href}
                                  className="block text-xs text-muted-foreground hover:text-primary transition-colors py-1"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {industry.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          'text-sm font-medium transition-colors hover:text-primary',
                          pathname === item.href
                            ? 'text-primary'
                            : 'text-muted-foreground'
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <Button asChild className="w-fit">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}