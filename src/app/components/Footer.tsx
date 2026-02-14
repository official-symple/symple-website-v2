import { Instagram, Mail } from 'lucide-react';
import svgPaths from '../../imports/svg-dw9fmjmrpa';

export function Footer() {
  return (
    <footer id="about" className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="-scale-y-100 rotate-180">
                <div className="relative w-[32px] h-[32px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.29 47.292">
                    <path d={svgPaths.p25b23800} fill="#00BF7F" />
                  </svg>
                </div>
              </div>
              <span className="font-bold text-[#00BF7F] text-[32px] tracking-tight leading-none font-['Raleway',sans-serif]">
                SYMPLE
              </span>
            </div>
            <p className="text-slate-400 max-w-md">
              Research-driven digital mental health company powering therapeutic platforms.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Our Team</h4>
            <div className="space-y-3">
              <a 
                href="mailto:symple.help@gmail.com" 
                className="flex items-center gap-2 text-slate-400 hover:text-[#00BF7F] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>symple.help@gmail.com</span>
              </a>
              <div className="flex gap-3 pt-2">
                <a 
                  href="https://www.instagram.com/symple.kr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <Instagram className="w-5 h-5 text-slate-400 hover:text-white" />
                </a>
                <a 
                  href="https://x.com/SYMPLE_KR" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-slate-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-500 text-sm text-center">
            © 2026 SYMPLE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
