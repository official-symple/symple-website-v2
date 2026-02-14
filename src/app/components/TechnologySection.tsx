import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Brain, Activity, Gamepad2, Award } from 'lucide-react';

export function TechnologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const technologies = [
    {
      icon: Brain,
      title: 'AI Emotion Analysis',
      description: 'Natural language processing to analyze user conversation patterns and emotional shifts in real time.'
    },
    {
      icon: Activity,
      title: 'Digital Phenotyping',
      description: 'Behavioral data such as sleep, activity, and usage patterns are analyzed to predict emotional states.'
    },
    {
      icon: Gamepad2,
      title: 'CBT Gamification',
      description: 'Evidence-based cognitive behavioral therapy integrated into interactive systems.'
    }
  ];

  const stats = [
    { value: 78, label: 'reduction in anxiety symptoms', suffix: '%' },
    { value: 83, label: 'improvement in emotional stability', suffix: '%' },
    { value: 65, label: 'decrease in stress levels', suffix: '%' },
    { value: 91, label: 'user satisfaction rate', suffix: '%' }
  ];

  return (
    <section id="technology" ref={ref} className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Built on Research.
            <br />
            <span className="text-[#00BF7F]">Powered by Technology.</span>
          </h2>
        </motion.div>

        {/* Technology Blocks */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-green-300 hover:shadow-lg transition-all"
            >
              <div className="p-3 bg-[#00BF7F]/10 rounded-lg w-fit mb-6">
                <tech.icon className="w-8 h-8 text-[#00BF7F]" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{tech.title}</h3>
              <p className="text-slate-600">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Clinical Validation Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Award className="w-8 h-8 text-[#00BF7F]" />
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">Clinical Validation</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <AnimatedCounter 
                  target={stat.value} 
                  suffix={stat.suffix}
                  isInView={isInView}
                />
                <p className="text-slate-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-slate-500 text-sm mt-8">
            Based on 12-week clinical study | N=1,247 participants | Published Feb 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedCounter({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [target, isInView]);

  return (
    <div className="text-5xl md:text-6xl font-bold text-[#00BF7F]">
      {count}{suffix}
    </div>
  );
}