import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({
  index,
  title,
  icon,
}: {
  index: number;
  title: string;
  icon: string;
}) => (
  <motion.article
    variants={fadeIn("up", "spring", index * 0.12, 0.65)}
    className="group border-t border-white/10 py-7 transition-colors hover:border-[#2dd4bf]/55"
  >
    <div className="flex items-start justify-between gap-5">
      <div>
        <span className="font-display text-[11px] tracking-[0.2em] text-white/30">
          0{index + 1}
        </span>
        <h3 className="mt-4 max-w-[230px] font-display text-xl font-medium leading-snug text-white/88 transition-colors group-hover:text-white">
          {title}
        </h3>
      </div>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025]">
        <img src={icon} alt="" className="h-7 w-7 object-contain opacity-75 grayscale transition group-hover:grayscale-0" />
      </div>
    </div>
  </motion.article>
);

export const About = () => {
  return (
    <SectionWrapper idName="about">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>01 · Giới thiệu</p>
          <h2 className={`${styles.sectionHeadText} mt-4 max-w-xl`}>
            Không chỉ là những dòng mã.
          </h2>
        </motion.div>

        <motion.div variants={fadeIn(undefined, undefined, 0.1, 0.8)}>
          <p className="max-w-2xl text-[17px] leading-8 text-white/55">
            Tôi là một lập trình viên web làm việc với TypeScript, JavaScript,
            React, Node.js và Three.js. Tôi yêu thích việc biến những ý tưởng
            phức tạp thành sản phẩm trực quan, nhanh và dễ sử dụng.
          </p>
          <p className="mt-5 max-w-2xl text-[17px] leading-8 text-white/55">
            Tôi luôn đặt trải nghiệm người dùng, chất lượng mã nguồn và khả năng
            phát triển lâu dài của sản phẩm ở vị trí trung tâm.
          </p>
        </motion.div>
      </div>

      <div className="mt-16 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
};
