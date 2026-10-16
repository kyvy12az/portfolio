import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// Service Card
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full group"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-2xl transition-all duration-300"
      >
        <div className="bg-tertiary rounded-[20px] py-8 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden backdrop-blur-sm bg-opacity-90 group-hover:bg-opacity-100 transition-all duration-300">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Icon container with animation */}
          <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
            <div className="absolute inset-0 bg-accent/5 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
            <img 
              src={icon} 
              alt={title} 
              className="w-16 h-16 object-contain relative z-10 drop-shadow-2xl" 
            />
          </div>
          
          {/* Title with gradient on hover */}
          <h3 className="text-white text-[20px] font-bold text-center relative z-10 mt-4 group-hover:text-accent transition-all duration-300 font-display">
            {title}
          </h3>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500 rounded-b-[20px]" />
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Giới thiệu</p>
          <h2 className={styles.sectionHeadText}>Tổng quan.</h2>
        </motion.div>

        {/* Body */}
        <motion.p
          variants={fadeIn(undefined, undefined, 0.1, 1)}
          className="empty-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Tôi là một lập trình viên web có kinh nghiệm với TypeScript và
          Javascript, và chuyên môn về các framework như React, Node.js và
          Three.js. Tôi học nhanh và hợp tác chặt chẽ với khách hàng để
          tạo ra các giải pháp hiệu quả, dễ mở rộng và thân thiện với người dùng,
          giải quyết các vấn đề thực tế. Hãy cùng hợp tác để biến ý tưởng của bạn thành hiện thực!
        </motion.p>

        {/* Service Card */}
        <div className="mt-20 flex flex-wrap gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
