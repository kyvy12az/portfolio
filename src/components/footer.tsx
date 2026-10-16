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
        "w-full flex items-center py-8 bg-gradient-to-r from-primary via-tertiary to-primary border-t border-t-teal-500/20 backdrop-blur-sm"
      )}
    >
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
        {/* Copyright */}
        <p className="text-secondary text-sm font-display text-center sm:text-left">
          &copy; Kỳ Vỹ {new Date().getFullYear()}. Tất cả quyền được bảo lưu.
        </p>

        {/* Social Links */}
        <ul className="list-none flex flex-row gap-6">
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
                {/* Glow effect */}
                <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-md group-hover:blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                {/* Icon */}
                <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-teal-500/20 group-hover:border-teal-500/50 bg-tertiary/50 group-hover:bg-teal-500/10 transition-all duration-300 group-hover:scale-110">
                  <img 
                    src={social.icon} 
                    alt={social.name} 
                    className="h-5 w-5 text-secondary group-hover:text-teal-400 transition-colors duration-300"
                    style={{ filter: 'invert(0.7) sepia(1) saturate(0.5) hue-rotate(140deg)' }}
                  />
                </div>
                
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-teal-500/90 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm">
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
