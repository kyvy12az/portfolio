import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github, preview } from "../assets";
import { PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type ProjectCardProps = (typeof PROJECTS)[number] & {
  index: number;
};

// Project Card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
}: ProjectCardProps) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="flex">
    <Tilt
      options={{
        max: 25,
        scale: 1.02,
        speed: 400,
      }}
      className="bg-tertiary border border-outline hover:border-accent/40 transition-colors p-5 rounded-2xl w-full group will-change-transform flex flex-col"
    >
      <div className="relative w-full h-[230px] overflow-hidden rounded-2xl flex-shrink-0">
        {/* Work image with overlay */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl will-change-transform"
          style={{ transform: 'translateZ(0)' }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-tertiary/80 via-tertiary/30 to-transparent" />

        {/* Action buttons */}
        <div className="absolute inset-0 flex justify-end items-start m-3 gap-2">
          {/* Live Site */}
          <div
            onClick={() => window.open(live_site_link, "_blank", "noreferrer")}
            className="bg-primary/90 border border-outline hover:border-accent w-11 h-11 rounded-full flex justify-center items-center cursor-pointer shadow-lg will-change-transform hover:scale-110 transition-transform duration-150"
            title="Trang Web Trực Tiếp"
          >
            <img
              src={preview}
              alt="Trang Web Trực Tiếp"
              className="w-2/3 h-2/3 object-contain filter brightness-0 invert"
            />
          </div>

          {/* Github */}
          <div
            onClick={() =>
              window.open(source_code_link, "_blank", "noreferrer")
            }
            className="bg-primary/90 border border-outline hover:border-accent w-11 h-11 rounded-full flex justify-center items-center cursor-pointer shadow-lg will-change-transform hover:scale-110 transition-transform duration-150"
            title="Mã Nguồn Github"
          >
            <img
              src={github}
              alt="Github"
              className="w-1/2 h-1/2 object-contain filter brightness-0 invert"
            />
          </div>
        </div>
      </div>

      {/* Work Info */}
      <div className="mt-5 flex-grow flex flex-col">
        <h3 className="text-white font-bold text-[24px] font-display">
          {name}
        </h3>
        <p className="mt-2 text-secondary text-[14px] leading-relaxed flex-grow">
          {description}
        </p>
      </div>

      {/* Work Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, tagIdx) => (
          <span 
            key={`Tag-${tagIdx}`} 
            className={cn(
              "text-secondary",
              "text-[12px] px-3 py-1 rounded-full bg-accent/10 border border-outline font-semibold"
            )}
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

// Works
export const Works = () => {
  return (
    <SectionWrapper>
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Công việc của tôi</p>
          <h2 className={styles.sectionHeadText}>Dự Án.</h2>
        </motion.div>

        {/* About */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn(undefined, "tween", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Các dự án sau đây thể hiện kỹ năng và kinh nghiệm của tôi thông qua
            các ví dụ thực tế về công việc của tôi. Mỗi dự án được mô tả ngắn gọn
            với các liên kết đến kho mã nguồn và bản demo trực tiếp. Nó phản ánh
            khả năng giải quyết vấn đề phức tạp, làm việc với nhiều công nghệ khác nhau
            và quản lý dự án hiệu quả của tôi.
          </motion.p>
        </div>

        {/* Project Card */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 auto-rows-fr">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} index={i} {...project} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
