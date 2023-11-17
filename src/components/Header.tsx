"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SocialItem = [
  { title: "Github", link: "https://github.com/ATeals", icon: <i className="bi bi-github" /> },
  { title: "Velog", link: "https://velog.io/@ateals_12", icon: <i className="bi bi-mailbox2"></i> },
  {
    title: "Instagram",
    link: "https://www.instagram.com/turquoise_0o0/",
    icon: <i className="bi bi-instagram"></i>,
  },
];

export const Header = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    console.log(scrollHeight);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrolled = scrollHeight > 0;

  return (
    <header
      className={"fixed h-12 z-50 w-screen p-2 md:px-10 flex justify-between top-0 left-0"}
      style={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.3)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        color: isScrolled ? "black" : "white",
        transition: "background-color 0.5s ease-in-out, backdrop-filter 0.5s ease-in-out",
        WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
    >
      <nav className="[&>*]:mx-1 [&>*]:text-md md:[&>*]:mx-3 flex items-center">
        <Link href={"/"}>
          <img src={"/images/logo.webp"} alt="logo" width={40} height={40} />
        </Link>

        <Link href={"/"}>Home</Link>
        <Link href={"/tags"}>Tags</Link>
      </nav>

      <ul className="[&>*]:mx-3 [&>*]:text-md md:[&>*]:mx-3 flex items-center">
        {SocialItem.map((i) => (
          <li key={i.title}>
            <Link href={i.link}>{i.icon}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
