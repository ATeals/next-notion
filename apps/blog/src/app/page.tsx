import { BLOG_CONFIG } from "@/config";
import { DarkmodeButton } from "@/feature/DarkMode";
import { Box } from "@/widgets/Home";
import { Flex, Heading } from "@repo/ui";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-dvh w-full p-2 block lg:flex items-start md:p-20">
      <Flex
        className="p-10 lg:h-full lg:w-1/2 w-full"
        style={{ direction: "column", gap: 10, justify: "start" }}
      >
        <Image
          className="shadow-2xl rounded-[50%]"
          src={"/images/logo.webp"}
          alt="logo"
          width={150}
          height={150}
        />

        <Heading className="drop-shadow-lg">Ateals Blog</Heading>
      </Flex>
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full h-auto gap-5 lg:gap-10 justify-items-center align-items-center">
        <Link href={BLOG_CONFIG.PATH.POSTS}>
          <Box className="h-40 w-40">POSTS</Box>
        </Link>

        <Link href={BLOG_CONFIG.PATH.TAGS}>
          <Box className="h-40 w-40">TAGS</Box>
        </Link>

        <Link href={BLOG_CONFIG.PATH.SNIPPETS}>
          <Box className="h-40 w-40">SNIPPETS</Box>
        </Link>

        <Link href={BLOG_CONFIG.URL.DOCS}>
          <Box className="h-40 w-40">DOCS</Box>
        </Link>

        <Box className="col-span-2  md:col-span-4">
          <img src="https://ghchart.rshah.org/219138/ATeals" className="object-contain" />
        </Box>

        <Box className="col-span-2 h-auto">
          <img
            src="https://github-readme-stats.vercel.app/api?username=ATeals&theme=shadow_blue&show_icons=true"
            width="100%"
          />
        </Box>
        <Box className="col-span-2 h-auto">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ATeals&hide=mdx&layout=donut"
            width="100%"
          />
        </Box>
      </div>
    </div>
  );
};

export default HomePage;
