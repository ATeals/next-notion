import { generateClassName } from "@repo/utils";
import React from "react";

interface CircleProgressBarOptions {
  bgColor?: string;
  progressColor?: string;
  strokeWidth?: number;
}

interface CircleProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  current: number;
  max: number;
  options?: CircleProgressBarOptions;
}

export const CircleProgressBar = ({
  current,
  max,
  className,
  options: { bgColor = "text-gray-200", progressColor = "text-blue-500", strokeWidth = 5 } = {},
  ...props
}: CircleProgressBarProps) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = current > max ? 0 : ((max - current) / max) * circumference;

  const bgStyles = generateClassName("stroke-current", bgColor);
  const progressStyles = generateClassName(
    "stroke-current transition-all duration-300 ease-in-out",
    progressColor
  );

  return (
    <div className={generateClassName("relative overflow-hidden", className)} {...props}>
      <div className="w-full h-full">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
          <circle
            className={bgStyles}
            fill="transparent"
            strokeWidth={strokeWidth}
            r={radius}
            cx="60"
            cy="60"
          />
          <circle
            className={progressStyles}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={progress}
            r={radius}
            cx="60"
            cy="60"
          />
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center w-full h-full">
        {props.children}
      </div>
    </div>
  );
};
