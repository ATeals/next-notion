import { generateClassName } from "@repo/utils";
import { usePostUIContext } from "./Provider";

export const PostUIIcon = ({ className }: { className?: string }) => {
  const { icon } = usePostUIContext();

  return icon?.isURL ? (
    <img src={icon.url} className={generateClassName("block no-underline w-6 h-6", className)} />
  ) : (
    icon && (
      <span className={generateClassName(`no-underline text-xl`, className)}>{icon.icon}</span>
    )
  );
};
