import { usePostContext } from "../../hooks/usePostContext";

export const Title = () => {
  const { title } = usePostContext();
  return <h1 className="text-xl group-hover:underline cursor-pointer dark:text-white">{title}</h1>;
};
