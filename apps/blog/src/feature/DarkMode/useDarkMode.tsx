import { useStorage } from "@repo/react";
import { useEffect } from "react";

export const useDarkMode = (initialValue?: boolean) => {
  const [isDarkMode, setIsDarkMode] = useStorage({
    key: "isDarkMode",
    initialValue,
  });

  const setRootClass = (isDarkMode: boolean) => {
    if (typeof window === "undefined") return;

    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const setLightMode = () => {
    setIsDarkMode(false);
  };

  const setDarkMode = () => {
    setIsDarkMode(true);
  };

  useEffect(() => {
    setRootClass(isDarkMode);
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode, setLightMode, setDarkMode };
};
