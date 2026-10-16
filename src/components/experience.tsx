import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { EXPERIENCES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
  experience: (typeof EXPERIENCES)[number];
};

// Experience Card
const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <VerticalTimelineElement
    contentStyle={{ 
      background: "linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)",
      color: "#fff",
      boxShadow: "0 8px 32px 0 rgba(20, 184, 166, 0.2)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(20, 184, 166, 0.2)",
      borderRadius: "16px",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgba(20, 184, 166, 0.3)" }}
    date={experience.date}
    iconStyle={{ 
      background: `linear-gradient(135deg, ${experience.iconBg} 0%, #0d5f8a 100%)`,
      boxShadow: "0 0 20px rgba(20, 184, 166, 0.4)",
      border: "3px solid rgba(20, 184, 166, 0.3)",
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain drop-shadow-lg"
        />
      </div>
    }
  >
    {/* Title with gradient accent */}
    <div className="relative">
      <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-400 to-cyan-500 rounded-full" />
      <h3 className="text-white text-[24px] font-bold font-display bg-gradient-to-r from-white to-gray-300 bg-clip-text">
        {experience.title}
      </h3>
      <p
        className="text-[#64ffda] text-[16px] font-semibold mt-1 font-display"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    {/* Experience Points with custom bullets */}
    <ul className="mt-5 ml-5 space-y-3">
      {experience.points.map((point, i) => (
        <li
          key={`experience-point-${i}`}
          className="text-white-100 text-[14px] pl-3 tracking-wide leading-relaxed relative before:content-['▹'] before:absolute before:-left-0 before:text-teal-400 before:font-bold before:text-lg"
        >
          {point}
        </li>
      ))}
    </ul>

    {/* Bottom gradient line */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-50 rounded-b-2xl" />
  </VerticalTimelineElement>
);

// Experience
export const Experience = () => {
  return (
    <SectionWrapper idName="work">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Những gì tôi đã làm cho đến nay</p>
          <h2 className={styles.sectionHeadText}>Kinh Nghiệm Làm Việc.</h2>
        </motion.div>

        {/* Experience Card */}
        <div className="empty-20 flex flex-col">
          <VerticalTimeline>
            {EXPERIENCES.map((experience, i) => (
              <ExperienceCard key={i} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </SectionWrapper>
  );
};
