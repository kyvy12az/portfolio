import { motion } from "framer-motion";

import { TESTIMONIALS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

export const Feedbacks = () => {
  return (
    <SectionWrapper>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>05 · Đánh giá</p>
        <h2 className={`${styles.sectionHeadText} mt-4`}>Mọi người nói gì.</h2>
      </motion.div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {TESTIMONIALS.map((item, index) => (
          <motion.article
            key={item.name}
            variants={fadeIn("up", "spring", index * 0.12, 0.65)}
            className="flex min-h-[290px] flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.018] p-7"
          >
            <div>
              <span className="font-display text-4xl leading-none text-[#2dd4bf]">“</span>
              <p className="mt-5 text-[15px] leading-7 text-white/60">{item.testimonial}</p>
            </div>
            <div className="mt-8 flex items-center gap-4 border-t border-white/[0.07] pt-5">
              <img src={item.image} alt={item.name} className="h-11 w-11 rounded-full object-cover grayscale" />
              <div>
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-xs text-white/35">
                  {item.designation} · {item.company}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
};
