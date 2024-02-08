import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = (initialValue?: string) => {
  const [isDarkMode, setDarkMode] = useLocalStorage("isDarkMode", initialValue === "dark");

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((isDarkMode) => !isDarkMode);
  };

  return { isDarkMode, toggleDarkMode };
};
