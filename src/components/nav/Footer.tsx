/**
 * @file        src/components/nav/Footer.tsx
 * @author      David @dvhsh (https://dvh.sh)
 * @description Footer component for the website
 */
import React from 'react';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="relative z-10 w-full bg-black border-t border-neutral-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4 col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-sky-500">
              NITROUS
            </h2>
            <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
              An open-source OSINT investigation suite with an exposed RESTful API. Driven completely by third party data sources.
            </p>
            <div className="flex space-x-5 pt-2">
              <SocialLink href="https://github.com/nitrous-oxi-de" icon={<SiGithub />} label="GitHub" />
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-white font-semibold mb-6">Platform</h3>
            <ul className="space-y-3">
              <FooterLink href="/docs">API Docs</FooterLink>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} NITROUS / dvh.sh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label}
    className="text-neutral-400 hover:text-sky-500 transition-colors duration-200 transform hover:scale-110"
  >
    <span className="text-xl">{icon}</span>
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link 
      href={href} 
      className="text-neutral-400 hover:text-white hover:underline decoration-sky-500 underline-offset-4 text-sm transition-all duration-200"
    >
      {children}
    </Link>
  </li>
);

export default Footer;