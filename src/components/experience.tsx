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
      background: "#1a242f",
      color: "#edf2f7",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
      backdropFilter: "blur(10px)",
      border: "1px solid #2b3845",
      borderRadius: "16px",
    }}
    contentArrowStyle={{ borderRight: "7px solid #2b3845" }}
    date={experience.date}
    iconStyle={{ 
      background: experience.iconBg,
      boxShadow: "0 0 0 4px #111820",
      border: "3px solid #2b3845",
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
      <div className="absolute -left-4 top-0 w-1 h-full bg-accent rounded-full" />
      <h3 className="text-white text-[24px] font-bold font-display bg-gradient-to-r from-white to-gray-300 bg-clip-text">
        {experience.title}
      </h3>
      <p
        className="text-accent text-[16px] font-semibold mt-1 font-display"
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
          className="text-white-100 text-[14px] pl-3 tracking-wide leading-relaxed relative before:content-['▹'] before:absolute before:-left-0 before:text-accent before:font-bold before:text-lg"
        >
          {point}
        </li>
      ))}
    </ul>

    {/* Bottom gradient line */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-outline opacity-50 rounded-b-2xl" />
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
          <VerticalTimeline lineColor="#2b3845">
            {EXPERIENCES.map((experience, i) => (
              <ExperienceCard key={i} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </>
    </SectionWrapper>
  );
};
