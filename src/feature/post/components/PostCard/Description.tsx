import { usePostContext } from "../../hooks/usePostContext";

export const Description = () => {
  const { description } = usePostContext();

  return <p className="text-sm my-5 text-gray-500 dark:text-gray-400"> {description}</p>;
};
