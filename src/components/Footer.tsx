import { REVALIDATE_TAGNAME } from "@/constants";

export default () => {
  return (
    <footer className="p-10 min-h-[200px] flex flex-col justify-center items-center [&>*]:m-2">
      <div>&copy; Ateals</div>

      <div id={REVALIDATE_TAGNAME} className="flex [&>*]:mx-2"></div>

      <div className="text-[gray]">Powered by vercel</div>
    </footer>
  );
};
