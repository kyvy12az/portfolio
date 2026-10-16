import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { close, menu } from "../assets";
import { NAV_LINKS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

export const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = NAV_LINKS.filter((link) => link.id !== "source-code");

  return (
    <nav
      className={cn(
        styles.paddingX,
        "fixed left-0 right-0 top-10 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-white/[0.08] bg-[#071014]/92 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl"
          : "border-white/[0.05] bg-[#071014]/72 py-4 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] font-display text-sm font-semibold text-[#5eead4] transition-colors group-hover:border-[#2dd4bf]/40">
            KV
          </span>
          <span className="font-display text-base font-semibold tracking-[0.14em] text-white">
            KỲ VỸ
          </span>
        </Link>

        <ul className="hidden items-center gap-9 sm:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.title)}
                className={cn(
                  "relative block py-2 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#2dd4bf] after:transition-all",
                  active === link.title
                    ? "text-white after:w-full"
                    : "text-white/55 after:w-0 hover:text-white after:hover:w-full",
                )}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] sm:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
        >
          <img src={open ? close : menu} alt="" className="h-5 w-5 object-contain" />
        </button>

        <div
          className={cn(
            "absolute left-4 right-4 top-[66px] rounded-xl border border-white/10 bg-[#0a1419]/98 p-3 shadow-2xl backdrop-blur-xl sm:hidden",
            open ? "block" : "hidden",
          )}
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setOpen(false);
                setActive(link.title);
              }}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-white/65 transition-colors hover:bg-white/[0.04] hover:text-white"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
