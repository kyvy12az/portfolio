import { motion } from "framer-motion";

import { EXPERIENCES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

export const Experience = () => {
  return (
    <div className="border-y border-white/[0.06] bg-[#091318]">
      <SectionWrapper idName="work">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <motion.div variants={textVariant()} className="lg:sticky lg:top-36 lg:self-start">
            <p className={styles.sectionSubText}>02 · Hành trình</p>
            <h2 className={`${styles.sectionHeadText} mt-4`}>Kinh nghiệm làm việc.</h2>
            <p className="mt-6 max-w-md text-base leading-8 text-white/45">
              Những dấu mốc giúp tôi phát triển tư duy sản phẩm, kỹ năng kỹ thuật
              và cách cộng tác trong một dự án thực tế.
            </p>
          </motion.div>

          <div className="border-l border-white/10">
            {EXPERIENCES.map((experience, index) => (
              <motion.article
                key={`${experience.title}-${experience.date}`}
                variants={fadeIn("left", "spring", index * 0.1, 0.7)}
                className="relative border-b border-white/[0.07] pb-10 pl-8 pt-1 first:pt-0 last:border-b-0 last:pb-0 sm:pl-12"
              >
                <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border-2 border-[#091318] bg-[#2dd4bf] ring-1 ring-[#2dd4bf]/50" />
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#5eead4]">
                  {experience.date}
                </p>
                <div className="mt-4 flex items-start gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/10"
                    style={{ backgroundColor: experience.iconBg }}
                  >
                    <img src={experience.icon} alt="" className="h-7 w-7 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {experience.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/45">{experience.company_name}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3">
                  {experience.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-white/48">
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#2dd4bf]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};
