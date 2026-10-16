import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { menu, close } from "../assets";
import { NAV_LINKS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Navbar
export const Navbar = () => {
  // state variables
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center py-4 fixed top-10 z-20 backdrop-blur-md bg-primary/80 border-b border-outline transition-all duration-300",
        isAtBottom ? "shadow-lg shadow-black/10" : ""
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent/5 rounded-full blur-md group-hover:blur-lg transition-all" />
            <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain relative z-10 group-hover:scale-110 transition-transform duration-200" />
          </div>
          <p className="text-white text-[18px] font-bold cursor-pointer flex font-display group-hover:text-accent transition-all duration-200">
            Kỳ Vỹ&nbsp;<span className="sm:block hidden">| Developer</span>
          </p>
        </Link>

        {/* Nav Links (Desktop) */}
        <ul className="list-none hidden sm:flex flex-row gap-6">
          {NAV_LINKS
            .filter((link) => link.id !== "source-code")
            .map((link) => (
              <li
                key={link.id}
                className="relative group"
                onClick={() => setActive(link.title)}
              >
                <a
                  href={`#${link.id}`}
                  className={cn(
                    active === link.title
                      ? "text-accent"
                      : "text-secondary",
                    "hover:text-accent text-[14px] font-medium cursor-pointer font-display transition-colors duration-200 block pb-1",
                  )}
                >
                  {link.title}
                </a>

                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 rounded-full",
                    active === link.title
                      ? "w-full"
                      : "w-0 group-hover:w-full",
                  )}
                />
              </li>
            ))}
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={cn(
              !toggle ? "hidden" : "flex",
              "p-6 backdrop-blur-md bg-tertiary/95 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border border-outline shadow-xl shadow-black/20"
            )}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {NAV_LINKS
                .filter((link) => link.id !== "source-code")
                .map((link) => (
                  <li
                    key={link.id}
                    className="relative group"
                    onClick={() => {
                      setToggle(false);
                      setActive(link.title);
                    }}
                  >
                    <a
                      href={`#${link.id}`}
                      className={cn(
                        active === link.title
                          ? "text-accent"
                          : "text-secondary",
                        "font-display font-medium cursor-pointer text-[16px] hover:text-accent transition-colors duration-200 pb-1 inline-block",
                      )}
                    >
                      {link.title}
                    </a>

                    <span
                      className={cn(
                        "absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 rounded-full",
                        active === link.title
                          ? "w-full"
                          : "w-0 group-hover:w-full",
                      )}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
