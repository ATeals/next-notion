"use client";

import { useEffect, useRef } from "react";
import { useDarkMode } from "../DarkMode";

export default function Giscus() {
  const ref = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useDarkMode();

  const theme = isDarkMode ? "dark" : "light";

  const setTheme = (theme: string) => {
    const iframe = document.querySelector<HTMLIFrameElement>("iframe.giscus-frame");
    iframe?.contentWindow?.postMessage({ giscus: { setConfig: { theme } } }, "https://giscus.app");
  };

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElem = document.createElement("script");
    scriptElem.src = "https://giscus.app/client.js";
    scriptElem.async = true;
    scriptElem.crossOrigin = "anonymous";

    scriptElem.setAttribute("data-repo", "ATeals/comments");
    scriptElem.setAttribute("data-repo-id", "R_kgDOKEaPrQ");
    scriptElem.setAttribute("data-category", "General");
    scriptElem.setAttribute("data-category-id", "DIC_kwDOKEaPrc4CYaX_");
    scriptElem.setAttribute("data-mapping", "og:title");
    scriptElem.setAttribute("data-strict", "0");
    scriptElem.setAttribute("data-reactions-enabled", "1");
    scriptElem.setAttribute("data-emit-metadata", "0");
    scriptElem.setAttribute("data-input-position", "top");
    scriptElem.setAttribute("data-theme", theme);
    scriptElem.setAttribute("data-lang", "ko");
    // scriptElem.setAttribute("data-loading", "lazy");
    scriptElem.setAttribute("async", "");
    ref.current.appendChild(scriptElem);
  }, []);

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  useEffect(() => {
    const root = document.querySelector("html");

    if (root?.classList.contains("dark")) setTheme(theme);
  }, []);

  return <section className="m-5 shadow-inner  p-5 rounded-xl" ref={ref} />;
}
