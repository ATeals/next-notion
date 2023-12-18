"use client";

import { elapsedTime } from "@/util/formatTime";

export const TimeLine = ({ createdAt, updataAt }: { createdAt: string; updataAt: string }) => (
  <span className="text-sm text-gray-500">
    {elapsedTime(createdAt)}
    {updataAt !== createdAt && " • 수정됨"}
  </span>
);
