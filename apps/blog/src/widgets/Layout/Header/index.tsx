"use client";

import { useScroll } from "@repo/react";
import { DEFAULT_PAGE_WIDTH } from "src/config";
import { useDarkMode } from "src/feature/DarkMode/useDarkMode";

export const Header = ({ children }: { children: React.ReactNode }) => {
  const scrollHeight = useScroll();
  const { isDarkMode } = useDarkMode();

  const isScrolled = scrollHeight > 0;

  const backgroundColor = isScrolled
    ? isDarkMode
      ? "rgba(25, 27, 31, 0.3)"
      : "rgba(255, 255, 255, 0.3)"
    : "transparent";

  return (
    <header
      className={`fixed w-full top-0 z-50`}
      style={{
        backgroundColor: isScrolled
          ? isDarkMode
            ? "rgba(25, 27, 31, 0.3)"
            : "rgba(255, 255, 255, 0.3)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        transition: "background-color 0.5s ease-in-out, backdrop-filter 0.5s ease-in-out",
        WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
    >
      <div className="m-auto" style={{ maxWidth: DEFAULT_PAGE_WIDTH }}>
        {children}
      </div>
    </header>
  );
};
