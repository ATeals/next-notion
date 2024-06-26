"use client";

import { generateClassName } from "@repo/utils";
import { Tag } from "../types";
import { Text } from "@/atom";

export const TagUI = ({ tag, enable }: { tag: Tag | string; enable?: boolean }) => {
  const css = generateClassName(
    "p-2 px-4 rounded-lg hover:cursor-pointer",
    enable
      ? "shadow-inner text-primary-sm dark:text-primary-lg dark:text-primary-sm dark:shadow-black"
      : "shadow-md text-gray-500 dark:text-gray-200 dark:shadow-zinc-900"
  );

  return (
    <Text as="span" className={css}>
      {typeof tag === "string" ? tag : tag.name}
    </Text>
  );
};
