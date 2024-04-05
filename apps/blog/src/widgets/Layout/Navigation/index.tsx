"use client";

import { Flex, Icon } from "@/atom";
import Image from "next/image";
import Link from "next/link";
import { BLOG_CONFIG } from "src/config";
import { DarkmodeButton } from "src/feature/DarkMode/DarkmodeButton";

const SOCIAL_LINK_ITEMS = [
  { title: "Github", link: "https://github.com/ATeals", icon: <Icon icon="github" size="sm" /> },
  { title: "Velog", link: "https://velog.io/@ateals_12", icon: <Icon icon="mailbox2" size="sm" /> },
  {
    title: "Instagram",
    link: "https://www.instagram.com/turquoise_0o0/",
    icon: <Icon icon="instagram" size="sm" />,
  },
];

export const Navigation = () => {
  return (
    <Flex className="w-full py-2 text-sm md:text-md" style={{ justify: "space-between" }}>
      <nav className="[&>*]:mx-1 md:[&>*]:mx-3 flex items-center">
        <Link href={"/"}>
          <Image src={BLOG_CONFIG.LOGO} alt="logo" width={30} height={30} />
        </Link>

        <div className="hidden md:flex">
          <Link href={BLOG_CONFIG.PATH.HOME}>
            <span className="text-sm md:text-md">Home</span>
          </Link>
        </div>
        <Link href={BLOG_CONFIG.PATH.TAGS}>
          <span className="text-sm md:text-md">TAGS</span>
        </Link>
        <Link href={BLOG_CONFIG.PATH.SNIPPETS}>
          <span className="text-sm md:text-md">SNIPPETS</span>
        </Link>
      </nav>

      <ul className="[&>*]:mx-3 md:[&>*]:mx-3 flex items-center">
        {SOCIAL_LINK_ITEMS.map((i) => (
          <li key={i.title}>
            <Link href={i.link}>{i.icon}</Link>
          </li>
        ))}
        <li>
          <DarkmodeButton />
        </li>
      </ul>
    </Flex>
  );
};
