import { usePostContext } from "../../hooks/usePostContext";
import { PostIcon } from "../PostIcon";

export const Title = () => {
  const { title, icon } = usePostContext();
  return (
    <h1 className="text-xl group-hover:underline cursor-pointer dark:text-white">
      {icon && <PostIcon icon={icon} size="sm" />}
      <span className="vertical-align: middle">{title}</span>
    </h1>
  );
};
