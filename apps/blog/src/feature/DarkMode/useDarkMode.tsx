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
    setRootClass(!isDarkMode);
  };

  const setLightMode = () => {
    setIsDarkMode(false);
    setRootClass(false);
  };

  const setDarkMode = () => {
    setIsDarkMode(true);
    setRootClass(true);
  };

  useEffect(() => {
    if (isDarkMode === undefined) return;

    setIsDarkMode(isDarkMode);
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode, setLightMode, setDarkMode };
};
