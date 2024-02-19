import { generateClassName } from "@/feature/common/util/generateClassName";
import { Icon } from "../type";

type Size = "lg" | "sm";

const IconSizeMap = {
  lg: {
    length: 60,
    text: "5xl",
  },
  sm: {
    length: 20,
    text: "sm",
  },
};

export const PostIcon = ({
  icon,
  className,
  size,
}: {
  icon: Icon;
  className?: string;
  size: Size;
}) => {
  const { length, text } = IconSizeMap[size];

  return icon?.isURL ? (
    <img
      src={icon.url}
      width={length}
      height={length}
      className={generateClassName("inline no-underline my-0", className)}
    />
  ) : (
    icon && (
      <span className={generateClassName(`no-underline text-${text}`, className)}>{icon.icon}</span>
    )
  );
};
