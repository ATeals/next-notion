import { PATH } from "@/router";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="w-[700px] min-h-dvh m-auto flex flex-col items-center justify-center">
      <h1 className="font-semibold text-3xl">MD EDITOR</h1>

      <Link to={PATH.EDITOR} className="mt-4">
        EDIT
      </Link>
    </div>
  );
};
