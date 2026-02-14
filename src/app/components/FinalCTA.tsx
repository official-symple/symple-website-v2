import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-[#00BF7F] via-[#00a66d] to-[#008c63] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6">
            Build the Future of
            <br />
            Digital Mental Health
            <br />
            <span className="text-green-100">With Us</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-green-50 mb-12 max-w-2xl mx-auto"
        >
          Join leading institutions and innovators in transforming mental healthcare through technology and data-driven insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <a href="mailto:symple.help@gmail.com">
            <Button 
              size="lg" 
              className="bg-white text-[#00BF7F] hover:bg-slate-50 px-8 py-6 text-lg font-semibold shadow-xl"
            >
              <Mail className="mr-2 w-5 h-5" />
              Contact Our Team
            </Button>
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-white/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div>
              <div className="text-3xl font-bold mb-1">ISO 27001</div>
              <div className="text-green-100 text-sm">Certified</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">HIPAA</div>
              <div className="text-green-100 text-sm">Compliant</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">99.9%</div>
              <div className="text-green-100 text-sm">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-green-100 text-sm">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}