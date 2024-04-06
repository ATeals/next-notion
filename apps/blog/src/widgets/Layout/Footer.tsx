import { DividerLine } from "@/atom";
import { BLOG_CONFIG, DEFAULT_PAGE_WIDTH } from "src/config";

export const Footer = () => {
  return (
    <footer className="min-h-[200px] w-full bg-white dark:bg-dark-bg">
      <DividerLine className="border-gray-500" />
      <div
        className={`flex flex-col justify-start items-center p-5 m-auto h-full`}
        style={{ maxWidth: DEFAULT_PAGE_WIDTH }}
      >
        <div className="dark:text-white">&copy; Ateals</div>

        <div id={BLOG_CONFIG.REVALIDATE_TAGNAME} className="flex [&>*]:m-2"></div>

        <div className="text-[gray]">Powered by vercel</div>
      </div>
    </footer>
  );
};
