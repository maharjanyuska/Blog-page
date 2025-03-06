import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: 'About Us' },
    { id: 'pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <span className="text-2xl font-bold text-primary cursor-pointer">BlogGen AI</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <span
                key={item.id || item.href}
                onClick={() => item.id ? scrollToSection(item.id) : null}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                  location === (item.href || `/#${item.id}`) ? "text-primary" : "text-gray-600"
                )}
              >
                {item.href ? (
                  <Link href={item.href}>
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  item.label
                )}
              </span>
            ))}
          </div>

          <span
            onClick={() => scrollToSection('pricing')}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Get Started
          </span>
        </div>
      </div>
    </motion.nav>
  );
}