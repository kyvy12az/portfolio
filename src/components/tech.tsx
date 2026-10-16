import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

export const Tech = () => {
  return (
    <SectionWrapper>
      <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <p className={styles.sectionSubText}>03 · Công nghệ</p>
          <h2 className="mt-4 max-w-sm font-display text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Công cụ tôi sử dụng để xây dựng sản phẩm.
          </h2>
        </div>

        <div className="grid grid-cols-2 border-l border-t border-white/[0.07] sm:grid-cols-3 lg:grid-cols-4">
          {TECHNOLOGIES.map((technology) => (
            <div
              key={technology.name}
              className="group flex min-h-[120px] items-center gap-3 border-b border-r border-white/[0.07] px-4 py-5 transition-colors hover:bg-white/[0.025]"
            >
              <img
                src={technology.icon}
                alt=""
                className="h-9 w-9 object-contain opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
              />
              <span className="text-sm font-medium text-white/50 transition-colors group-hover:text-white/85">
                {technology.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
