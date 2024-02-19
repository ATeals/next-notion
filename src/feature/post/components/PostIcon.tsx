import { generateClassName } from "@/feature/common/util/generateClassName";
import { Icon } from "../type";

type Size = "lg" | "sm";

const IconSizeMap = {
  lg: {
    length: 60,
    text: "3rem",
  },
  sm: {
    length: 20,
    text: "1rem",
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
      <span style={{ fontSize: text }} className={generateClassName(`no-underline`, className)}>
        {icon.icon}
      </span>
    )
  );
};
