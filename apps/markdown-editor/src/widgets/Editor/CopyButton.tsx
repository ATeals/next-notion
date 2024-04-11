import { generateClassName } from "@/generateClassName";

export const CopyButton = ({
  copyText,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { copyText: string }) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      console.log("URL copied to clipboard");
    } catch (err) {
      console.error("Failed to copy URL: ", err);
    }
  };

  const css = generateClassName("px-2 p-1 rounded-sm bg-white", props.className);

  return <button className={css} onClick={copyToClipboard} {...props} />;
};
