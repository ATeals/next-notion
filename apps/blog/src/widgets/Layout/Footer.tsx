import { DividerLine } from "@/atom";
import { DEFAULT_PAGE_WIDTH } from "src/config";

export const Footer = () => {
  return (
    <footer className="min-h-[200px] w-full">
      <DividerLine />
      <div
        className={`flex flex-col justify-start items-center p-5 m-auto h-full`}
        style={{ maxWidth: DEFAULT_PAGE_WIDTH }}
      >
        <div className="dark:text-white">&copy; Ateals</div>

        {/* <div id={REVALIDATE_TAGNAME} className="flex [&>*]:mx-2"></div> */}

        <div className="text-[gray]">Powered by vercel</div>
      </div>
    </footer>
  );
};
