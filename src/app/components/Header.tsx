import { motion } from 'motion/react';
import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import svgPaths from '../../imports/svg-dw9fmjmrpa';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Technology', href: '#technology' },
    { label: 'Research', href: '#research' },
    { label: 'Partners', href: '#partners' },
    { label: 'About', href: '#about' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="-scale-y-100 rotate-180">
              {/* 🔥 모바일 작게 / 데스크탑 원래 크기 */}
              <div className="relative w-[30px] h-[30px] lg:w-[38px] lg:h-[38px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 47.29 47.292"
                >
                  <path d={svgPaths.p25b23800} fill="#00BF7F" />
                </svg>
              </div>
            </div>

            {/* 🔥 모바일 텍스트 작게 / 데스크탑 원래 크기 */}
            <span className="font-bold text-[#00BF7F] text-[28px] lg:text-[38px] tracking-tight leading-none font-['Raleway',sans-serif]">
              SYMPLE
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-700 hover:text-[#00BF7F] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="https://apps.apple.com/kr/app/%EC%98%A4%EB%A6%AC%EC%9D%98-%EA%BF%88/id6746451155"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#00BF7F] hover:bg-[#00a66d] text-white group shadow-lg shadow-[#00BF7F]/20">
                <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                Download Duck's Dream
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-t border-slate-200 bg-white"
        >
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-slate-700 hover:text-[#00BF7F] transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}

            <a
              href="https://apps.apple.com/kr/app/%EC%98%A4%EB%A6%AC%EC%9D%98-%EA%BF%88/id6746451155"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-[#00BF7F] hover:bg-[#00a66d] text-white shadow-lg shadow-[#00BF7F]/20">
                <Download className="mr-2 w-4 h-4" />
                Download Duck's Dream
              </Button>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
