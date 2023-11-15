"use client";

import { elapsedTime } from "@/util/formatTime";

export const ElapsedTimeComponent = ({ time }: { time: string }) => (
  <span className="text-sm text-gray-500">{elapsedTime(time)}</span>
);
