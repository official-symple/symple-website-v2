import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import imgAsanNanumFoundation from "figma:asset/b275de7dfab9fc411916fb65957ae9bcea40aa99.png";
import imgImage29 from "figma:asset/c56e2ede50f08f3979a70535923fa6dd3718d035.png";
import img202510291516281 from "figma:asset/a54db57541ad162250b6eb5671bc6d6f5af0869c.png";
import imgYonseiUniversity from "figma:asset/79c99c81cfaeca24daca4db04fe201808e2879f0.png";
import imgHanaPowerOn from "figma:asset/a0a45be6cf8dad42f8f4c06be012a03a025425b8.png";
import imgMentalhealthKorea from "figma:asset/0ad58cd53534b1dbc5e679a2a4fd00d9d9c75733.png";
import imgMinistryOfHealthWelfare1 from "figma:asset/a5282daa0842db9f55e0448414706587ac617cda.png";
import img1Photoroom1 from "figma:asset/ea64946b84617340afd3b584c77960936989aded.png";
import img3Photoroom1 from "figma:asset/7c4ccb1a3b48ae4f49a10d83d02a24022cda3376.png";

export function PartnerLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const partners = [
    { img: imgAsanNanumFoundation, name: 'Asan Nanum Foundation', width: 'w-[123px]', height: 'h-[50px]' },
    { img: imgImage29, name: 'Stanford', width: 'w-[198px]', height: 'h-[35px]' },
    { img: img202510291516281, name: 'DMH Lab', width: 'w-[112px]', height: 'h-[35px]' },
    { img: imgYonseiUniversity, name: 'Yonsei University', width: 'w-[143px]', height: 'h-[40px]' },
    { img: imgHanaPowerOn, name: 'Hana Power On', width: 'w-[82px]', height: 'h-[30px]' },
    { img: imgMentalhealthKorea, name: 'Mental Health Korea', width: 'w-[44px]', height: 'h-[40px]' },
    { img: imgMinistryOfHealthWelfare1, name: 'Ministry of Health & Welfare', width: 'w-[145px]', height: 'h-[40px]' },
    { img: img1Photoroom1, name: 'IFEC', width: 'w-[81px]', height: 'h-[56px]' },
    { img: img3Photoroom1, name: 'Partner', width: 'w-[58px]', height: 'h-[54px]' }
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partners" ref={ref} className="py-16 bg-[#00BF7F]/5 border-y border-[#00BF7F]/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-slate-700 uppercase text-sm tracking-wider font-semibold">Trusted By Leading Organizations</p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 lg:gap-16 items-center"
            animate={{
              x: [0, -1 * (duplicatedPartners.length / 2) * 200],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 hover:scale-110 transition-all cursor-pointer"
              >
                <div className={`relative ${partner.width} ${partner.height} flex items-center justify-center`}>
                  <img 
                    src={partner.img} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
            
            {/* U300+ Badge repeated */}
            {[0, 1].map((idx) => (
              <div
                key={`u300-${idx}`}
                className="flex-shrink-0 flex items-center justify-center hover:scale-110 transition-all cursor-pointer w-[100px]"
              >
                <div className="font-['Pretendard',sans-serif] font-bold text-[#ff7300] text-[22px] text-center whitespace-nowrap">
                  U300+
                </div>
              </div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#00BF7F]/5 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#00BF7F]/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}