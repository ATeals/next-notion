import { REVALIDATE_TAGNAME } from "@/feature/common/constants";

export default () => {
  return (
    <footer className="p-10 min-h-[400px] flex flex-col justify-center items-center [&>*]:m-2 background">
      <div className="dark:text-white">&copy; Ateals</div>

      <div id={REVALIDATE_TAGNAME} className="flex [&>*]:mx-2"></div>

      <div className="text-[gray]">Powered by vercel</div>
    </footer>
  );
};
