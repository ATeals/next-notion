import { generateClassName } from "@repo/utils";
import { usePostUIContext } from "./Provider";

const POST_ICON_SIZE = {
  IMG: {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-12 h-12",
  },
  ICON: {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-6xl",
  },
};

export const PostUIIcon = ({
  className,
  size = "sm",
}: {
  className?: string;
  size?: keyof (typeof POST_ICON_SIZE)["ICON"];
}) => {
  const { icon } = usePostUIContext();

  return icon?.isURL ? (
    <img
      src={icon.url}
      className={generateClassName("block no-underline ", POST_ICON_SIZE.IMG[size], className)}
    />
  ) : (
    icon && (
      <span className={generateClassName(`no-underline `, POST_ICON_SIZE.ICON[size], className)}>
        {icon.icon}
      </span>
    )
  );
};
