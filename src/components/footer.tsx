import { Link } from "react-router-dom";

import { SOCIALS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Footer
const Footer = () => {
  return (
    <footer
      className={cn(
        styles.paddingX,
        "flex w-full items-center border-t border-white/[0.07] bg-[#050b0e] py-8"
      )}
    >
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
        {/* Copyright */}
        <p className="text-center font-display text-xs tracking-wide text-white/35 sm:text-left">
          &copy; Kỳ Vỹ {new Date().getFullYear()}. Tất cả quyền được bảo lưu.
        </p>

        {/* Social Links */}
        <ul className="flex list-none flex-row gap-3">
          {SOCIALS.map((social) => (
            <li
              key={social.name}
              className="group relative"
            >
              <Link 
                to={social.link} 
                target="_blank" 
                rel="noreferrer noopener"
                className="block"
              >
                <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-[#2dd4bf]/40">
                  <img 
                    src={social.icon} 
                    alt={social.name} 
                    className="h-4 w-4 opacity-55 invert transition-opacity group-hover:opacity-100"
                  />
                </div>
                
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#0a1419] px-2 py-1 text-[10px] text-white/70 opacity-0 transition group-hover:opacity-100">
                  {social.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
