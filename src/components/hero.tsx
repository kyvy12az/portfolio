import { motion } from "framer-motion";

import { ComputersCanvas } from "./canvas";

const stats = [
  { value: "React", label: "Giao diện hiện đại" },
  { value: "Three.js", label: "Trải nghiệm web 3D" },
  { value: "Việt Nam", label: "Sẵn sàng hợp tác" },
] as const;

export const Hero = () => {
  return (
    <section className="relative min-h-[860px] overflow-hidden border-b border-white/[0.06] bg-[#071014] lg:min-h-screen">
      <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-r from-[#071014] via-[#071014]/88 to-transparent lg:w-[64%]" />
      <div className="pointer-events-none absolute left-[12%] top-[24%] z-[1] h-72 w-72 rounded-full bg-[#2dd4bf]/[0.045] blur-[110px]" />

      <div className="absolute inset-0 z-[2] opacity-55 sm:opacity-75 lg:left-[32%] lg:opacity-100">
        <ComputersCanvas />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center px-6 pb-52 pt-40 sm:px-10 lg:min-h-[850px] lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-[680px]"
        >
          <div className="mb-7 flex items-center gap-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
              Software developer
            </span>
            <span className="h-px w-16 bg-white/20" />
          </div>

          <h1 className="font-display text-[46px] font-semibold leading-[1.04] tracking-[-0.05em] text-white sm:text-[64px] lg:text-[76px]">
            Xin chào, tôi là
            <span className="block">Kỳ Vỹ.</span>
          </h1>

          <h2 className="mt-5 max-w-[650px] font-display text-[32px] font-medium leading-[1.12] tracking-[-0.04em] text-white/78 sm:text-[44px] lg:text-[52px]">
            Tôi xây dựng những{" "}
            <span className="text-[#5eead4]">trải nghiệm số</span> có ý nghĩa.
          </h2>

          <p className="mt-7 max-w-[570px] text-base leading-8 text-white/52 sm:text-lg">
            Tôi tập trung vào giao diện người dùng, trải nghiệm web 3D và những
            sản phẩm có thiết kế rõ ràng, hiệu quả, dễ sử dụng.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex min-h-[54px] items-center gap-4 rounded-lg bg-[#2dd4bf] px-7 text-sm font-semibold text-[#041113] transition-all hover:-translate-y-0.5 hover:bg-[#5eead4]"
            >
              Xem dự án
              <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[54px] items-center rounded-lg border border-white/20 bg-white/[0.02] px-7 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-[#2dd4bf]/60 hover:text-[#5eead4]"
            >
              Liên hệ với tôi
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/[0.07] bg-[#071014]/88 backdrop-blur-lg">
        <div className="mx-auto grid max-w-7xl grid-cols-1 px-6 sm:grid-cols-3 sm:px-10 lg:px-16">
          {stats.map((stat, index) => (
            <div
              key={stat.value}
              className={`flex min-h-[96px] items-center gap-4 border-white/[0.07] py-5 sm:px-7 ${
                index < stats.length - 1 ? "border-b sm:border-b-0 sm:border-r" : ""
              } ${index === 0 ? "sm:pl-0" : ""}`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#2dd4bf]/25 bg-[#2dd4bf]/[0.04]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf]" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-white">{stat.value}</p>
                <p className="mt-0.5 text-xs text-white/40">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
