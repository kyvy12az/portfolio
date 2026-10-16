import { motion } from "framer-motion";

import { github, preview } from "../assets";
import { PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
}: (typeof PROJECTS)[number] & { index: number }) => (
  <motion.article
    variants={fadeIn("up", "spring", index * 0.12, 0.7)}
    className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a1419] transition-all duration-300 hover:-translate-y-1 hover:border-[#2dd4bf]/30 hover:shadow-[0_28px_80px_-40px_rgba(0,0,0,0.9)]"
  >
    <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.07]">
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.025] group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071014]/55 to-transparent" />
      <div className="absolute right-4 top-4 flex gap-2">
        <button
          type="button"
          onClick={() => window.open(live_site_link, "_blank", "noreferrer")}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#071014]/85 backdrop-blur-md transition hover:border-[#2dd4bf]/50"
          title="Xem trang trực tiếp"
        >
          <img src={preview} alt="" className="h-5 w-5 object-contain invert" />
        </button>
        <button
          type="button"
          onClick={() => window.open(source_code_link, "_blank", "noreferrer")}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#071014]/85 backdrop-blur-md transition hover:border-[#2dd4bf]/50"
          title="Xem mã nguồn"
        >
          <img src={github} alt="" className="h-5 w-5 object-contain invert" />
        </button>
      </div>
    </div>

    <div className="p-6 sm:p-7">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl font-semibold text-white">{name}</h3>
        <span className="text-xs tracking-[0.16em] text-white/25">0{index + 1}</span>
      </div>
      <p className="mt-4 text-sm leading-7 text-white/48">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.name}
            className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-white/48"
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

export const Works = () => {
  return (
    <div className="border-y border-white/[0.06] bg-[#091318]">
      <SectionWrapper idName="projects">
        <motion.div variants={textVariant()} className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <p className={styles.sectionSubText}>04 · Dự án</p>
            <h2 className={`${styles.sectionHeadText} mt-4`}>Những sản phẩm nổi bật.</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-white/45">
            Một số dự án thể hiện cách tôi kết hợp thiết kế, công nghệ và tư duy
            giải quyết vấn đề để tạo ra sản phẩm hữu ích.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-7 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.name} index={index} {...project} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};
