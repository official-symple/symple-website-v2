import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { AlertCircle, Check, Sparkles, Zap } from 'lucide-react';

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const problems = [
    'Limited access to traditional therapy',
    'Emotional struggles often go unexpressed',
    'One-time counseling lacks continuity',
    'Young adults face increasing stress & burnout'
  ];

  const solutions = [
    'Digital accessibility, anytime & anywhere',
    'AI-driven emotional pattern analysis',
    'Gamified CBT-based engagement',
    'Continuous data-driven mental tracking'
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Mental Health Needs Innovation
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Problem Recognition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-red-100 rounded-lg">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900">The Challenge</h3>
            </div>
            
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                  <p className="text-slate-700">{problem}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SYMPLE's Approach */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-[#00BF7F]/10 rounded-lg">
                <Sparkles className="w-6 h-6 text-[#00BF7F]" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900">SYMPLE's Approach</h3>
            </div>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#00BF7F]/5 to-[#00BF7F]/10 rounded-lg border border-[#00BF7F]/20"
                >
                  <Check className="w-6 h-6 text-[#00BF7F] flex-shrink-0" />
                  <p className="text-slate-800">{solution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}