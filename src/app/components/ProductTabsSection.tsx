import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { MessageCircle, TrendingUp, Target, RefreshCw, Video, Shield, Award, Heart } from 'lucide-react';
import { Button } from './ui/button';
import imgDucksDream1 from "figma:asset/0b96305b9fd83d991e5971d434c3dd4579a1e269.png";
import imgDucksDream2 from "figma:asset/6546d88ce6af6a166e6018d1640df659f735ad24.png";
import imgKkebi1 from "figma:asset/cadb6a1a6919158d25dea028eb8937ef729319a1.png";
import imgKkebi2 from "figma:asset/f8ff72a23b7738b34983a62011bf56bb07e318be.png";

export function ProductTabsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState<'ducks-dream' | 'kkebi'>('ducks-dream');

  const ctaBase =
    "w-full sm:w-auto justify-center px-6 py-3 text-base font-semibold rounded-xl shadow-lg";

  return (
    <section id="solutions" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Digital Mental Health Platforms
          </h2>
          <p className="text-lg sm:text-xl text-slate-600">
            Two distinct solutions. One mission: Emotional well-being.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-slate-100 p-2 rounded-full border border-slate-200">
            <button
              onClick={() => setActiveTab('ducks-dream')}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'ducks-dream'
                  ? 'bg-[#00BF7F] text-white shadow-lg shadow-[#00BF7F]/20'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Duck's Dream
            </button>
            <button
              onClick={() => setActiveTab('kkebi')}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'kkebi'
                  ? 'bg-[#00BF7F] text-white shadow-lg shadow-[#00BF7F]/20'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              KKEBI
            </button>
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="relative min-h-[600px]">
          {/* Duck's Dream */}
          {activeTab === 'ducks-dream' && (
            <motion.div
              key="ducks-dream"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* ✅ Images FIRST on mobile */}
              <div className="relative order-1 md:order-2">
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-200"
                  >
                    <img
                      src={imgDucksDream1}
                      alt="Duck's Dream App Screen 1"
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-200"
                  >
                    <img
                      src={imgDucksDream2}
                      alt="Duck's Dream App Screen 2"
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                </div>
              </div>

              {/* ✅ Text/CTA SECOND on mobile */}
              <div className="space-y-8 order-2 md:order-1">
                <div>
                  <div className="inline-block px-4 py-2 bg-[#00BF7F]/10 border border-[#00BF7F]/20 rounded-full text-[#00BF7F] text-sm mb-4">
                    Gamified CBT Mental Wellness Companion
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Duck's Dream</h3>
                </div>

                <div className="space-y-6">
                  <FeatureItem
                    icon={MessageCircle}
                    title="Conversational Emotional Analysis"
                    description="Users express thoughts through guided dialogue with an interactive character."
                  />
                  <FeatureItem
                    icon={TrendingUp}
                    title="Mood & Behavioral Visualization"
                    description="Emotion trends, sleep, activity, and habit tracking displayed in intuitive dashboards."
                  />
                  <FeatureItem
                    icon={Target}
                    title="Game-Based Progression System"
                    description="CBT missions integrated into a leveling system to sustain engagement."
                  />
                  <FeatureItem
                    icon={RefreshCw}
                    title="Personalized Feedback Loop"
                    description="Behavioral patterns analyzed to deliver tailored guidance."
                  />
                </div>

                {/* ✅ CTA size unified on mobile */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    className="w-full sm:w-auto"
                    href="https://apps.apple.com/kr/app/%EC%98%A4%EB%A6%AC%EC%9D%98-%EA%BF%88/id6746451155"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className={`${ctaBase} bg-[#00BF7F] hover:bg-[#00a66d] shadow-[#00BF7F]/20`}>
                      Download Duck's Dream
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* KKEBI */}
          {activeTab === 'kkebi' && (
            <motion.div
              key="kkebi"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* ✅ Images FIRST on mobile */}
              <div className="relative order-1 md:order-2">
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-200"
                  >
                    <img
                      src={imgKkebi1}
                      alt="KKEBI App Screen 1"
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-200"
                  >
                    <img
                      src={imgKkebi2}
                      alt="KKEBI App Screen 2"
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                </div>
              </div>

              {/* ✅ Text/CTA SECOND on mobile */}
              <div className="space-y-8 order-2 md:order-1">
                <div>
                  <div className="inline-block px-4 py-2 bg-[#FA5454]/10 border border-[#FA5454]/20 rounded-full text-[#FA5454] text-sm mb-4">
                    Video-Based Emotional Care Platform
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">KKEBI</h3>
                </div>

                <div className="space-y-6">
                  <FeatureItem
                    icon={Shield}
                    title="Guided Therapeutic Conversations"
                    description="Structured, safe, private video sessions."
                  />
                  <FeatureItem
                    icon={Award}
                    title="Mission-Based CBT Reinforcement"
                    description="Follow-up behavioral missions to encourage cognitive restructuring."
                  />
                  <FeatureItem
                    icon={Heart}
                    title="Character-Based Retention System"
                    description="Gamified engagement to sustain long-term use."
                  />
                  <FeatureItem
                    icon={Video}
                    title="Real-Time Emotional Insight"
                    description="Video interaction combined with emotional recognition support."
                  />
                </div>

                {/* ✅ CTA size unified on mobile */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    className="w-full sm:w-auto"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSckDJbucjBnFVnC5rqkf12UMknoeCOK0tYfzKP6wUWCpB1cSw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className={`${ctaBase} bg-[#FA5454] hover:bg-[#e13f3f] shadow-[#FA5454]/20 text-white`}>
                      Pre-registration
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 p-2 bg-slate-100 rounded-lg h-fit">
        <Icon className="w-5 h-5 text-[#00BF7F]" />
      </div>
      <div>
        <h4 className="text-slate-900 font-semibold mb-1">{title}</h4>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
