"use client";
import { useDarkMode } from "@/feature/common/hooks/useDarkMode";

interface LoadingProps extends React.HTMLProps<SVGSVGElement> {
  fill?: string;
}

export const LoadingIndicator = ({ fill, ...props }: LoadingProps) => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="flex justify-center">
      <svg
        version="1.1"
        id="loader-1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="40px"
        height="40px"
        viewBox="0 0 50 50"
        {...props}
      >
        <path
          fill={isDarkMode ? "white" : "black"}
          d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};
