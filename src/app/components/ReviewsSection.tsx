import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredReviews = [
    {
      text: "I never realized how much my emotions were affecting my daily routine until I saw the data visualized. It changed how I approach stress.",
      author: "24, University Student",
      rating: 5,
      type: "Emotional Testimonial"
    },
    {
      text: "As a campus counselor, I've seen students engage more consistently through the gamified CBT missions.",
      author: "Licensed Counselor",
      rating: 5,
      type: "Clinical Trust"
    },
    {
      text: "I actually stayed consistent because it didn't feel like therapy. It felt interactive and personal.",
      author: "27, Startup Employee",
      rating: 5,
      type: "Engagement-Oriented"
    }
  ];

  const additionalReviews = [
    {
      text: "SYMPLE provided measurable mental health improvement within our pilot program.",
      author: "Public Institution Partner",
      rating: 5,
      weeks: null
    },
    {
      text: "After 4 weeks, I felt more aware of my emotional triggers. The tracking helped me take control.",
      author: "Anonymous User",
      rating: 5,
      weeks: 4
    },
    {
      text: "The AI insights were surprisingly accurate. It felt like someone really understood what I was going through.",
      author: "29, Software Engineer",
      rating: 5,
      weeks: 6
    },
    {
      text: "My anxiety levels dropped significantly. The missions made CBT actually enjoyable.",
      author: "22, Graduate Student",
      rating: 5,
      weeks: 8
    },
    {
      text: "As an HR director, I'm impressed by the engagement rates among our employees using SYMPLE.",
      author: "HR Director, Tech Company",
      rating: 5,
      weeks: null
    },
    {
      text: "The video sessions felt safe and comfortable. I could open up in ways I couldn't in person.",
      author: "31, Marketing Manager",
      rating: 5,
      weeks: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredReviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredReviews.length) % featuredReviews.length);
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-slate-600">Real stories, real impact</p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">4.8</div>
            <div className="text-slate-600 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00BF7F] mb-1">12,000+</div>
            <div className="text-slate-600 text-sm">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00BF7F] mb-1">30+</div>
            <div className="text-slate-600 text-sm">Institutional Partners</div>
          </div>
        </motion.div>

        {/* Featured Review Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mb-16"
        >
          <div className="bg-gradient-to-br from-[#00BF7F]/5 to-[#00BF7F]/10 border border-[#00BF7F]/20 rounded-2xl p-8 md:p-12 min-h-[300px] flex flex-col justify-center shadow-lg">
            <Quote className="w-12 h-12 text-[#00BF7F] mb-6" />
            
            <div className="relative overflow-hidden">
              {featuredReviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    x: currentSlide === index ? 0 : 100,
                    display: currentSlide === index ? 'block' : 'none'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-2xl md:text-3xl text-slate-900 mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div>
                    <p className="text-[#00BF7F] font-medium">— {review.author}</p>
                    <p className="text-slate-500 text-sm mt-1">{review.type}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="p-3 bg-white hover:bg-slate-50 rounded-full border border-slate-200 transition-colors shadow-md"
            >
              <ChevronLeft className="w-5 h-5 text-slate-900" />
            </button>
            <div className="flex items-center gap-2">
              {featuredReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? 'bg-[#00BF7F] w-8' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 bg-white hover:bg-slate-50 rounded-full border border-slate-200 transition-colors shadow-md"
            >
              <ChevronRight className="w-5 h-5 text-slate-900" />
            </button>
          </div>
        </motion.div>

        {/* Additional Reviews Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {additionalReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="p-6 bg-white rounded-xl border border-slate-200 hover:border-green-300 transition-colors shadow-md"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-4">"{review.text}"</p>
              <p className="text-slate-600 text-sm">— {review.author}</p>
              {review.weeks && (
                <p className="text-[#00BF7F] text-xs mt-2">After {review.weeks} weeks</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}