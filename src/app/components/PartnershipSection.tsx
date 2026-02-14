import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Building2, Users, GraduationCap, ArrowRight } from 'lucide-react';

export function PartnershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const partnerships = [
    {
      icon: Building2,
      title: 'B2B',
      subtitle: 'Corporate & Counseling Center Solutions',
      description: 'Scalable, evidence-informed mental health solutions for workplaces and clinical settings, delivering measurable outcomes at both the individual and organization level—powered by multimodal analytics, workflow-ready dashboards, and privacy-first reporting.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'B2C',
      subtitle: 'Consumer Digital Mental Wellness',
      description: 'Direct-to-consumer mental health platforms that empower individuals to take control of their emotional well-being through AI-driven insights.',
      color: 'green'
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      subtitle: 'Campus Emotional Support Programs',
      description: 'Comprehensive mental health support systems designed specifically for students, with real-time monitoring and intervention capabilities.',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-100',
        border: 'border-blue-200',
        icon: 'text-blue-600',
        hover: 'hover:border-blue-300'
      },
      green: {
        bg: 'bg-[#00BF7F]/10',
        border: 'border-[#00BF7F]/20',
        icon: 'text-[#00BF7F]',
        hover: 'hover:border-[#00BF7F]/30'
      },
      purple: {
        bg: 'bg-purple-100',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        hover: 'hover:border-purple-300'
      }
    };
    return colors[color as keyof typeof colors];
  };

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
            Scalable Mental Health Solutions
            <br />
            <span className="text-[#00BF7F]">for Institutions</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {partnerships.map((partnership, index) => {
            const colorClasses = getColorClasses(partnership.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`p-6 md:p-8 bg-white rounded-2xl border ${colorClasses.border} ${colorClasses.hover} transition-all group hover:transform hover:scale-[1.02] shadow-md hover:shadow-xl`}
              >
                <div className={`p-4 ${colorClasses.bg} rounded-lg w-fit mb-6`}>
                  <partnership.icon className={`w-8 h-8 ${colorClasses.icon}`} />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{partnership.title}</h3>
                <p className={`text-xs md:text-sm ${colorClasses.icon} mb-4 font-medium`}>{partnership.subtitle}</p>
                <p className="text-sm md:text-base text-slate-600">{partnership.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-slate-50 rounded-2xl border border-slate-200"
        >
          {[
            { value: '30+', label: 'Institutional Partners' },
            { value: '50K+', label: 'Active Users' },
            { value: '12', label: 'Countries' },
            { value: '95%', label: 'Partner Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00BF7F] mb-2">{stat.value}</div>
              <div className="text-slate-600 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}