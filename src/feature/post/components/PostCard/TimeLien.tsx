import { elapsedTime } from "@/feature/common/util/formatTime";
import { usePostContext } from "../../hooks/usePostContext";

export const TimeLine = () => {
  const { createdAt, updateAt } = usePostContext();
  return (
    <span className="text-sm text-gray-500">
      {elapsedTime(createdAt)}
      {updateAt !== createdAt && " • 수정됨"}
    </span>
  );
};
