import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
];
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });
  const NavContent = () => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => setMobileMenuOpen(false)}
          className="font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          {link.name}
        </a>
      ))}
    </>
  );
  return (
    <motion.header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2">
            <Rocket className="h-7 w-7 text-blue-600" />
            <span className="font-bold text-2xl font-display text-gray-900 dark:text-gray-100">
              ApexLaunch
            </span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <NavContent />
          </nav>
          <div className="flex items-center space-x-4">
            <a href="#cta">
              <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                Get Started
              </Button>
            </a>
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-xs">
                  <div className="flex flex-col space-y-6 pt-10">
                    <NavContent />
                    <a href="#cta" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                        Get Started
                      </Button>
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}