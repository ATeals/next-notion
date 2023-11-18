"use client";

import { useRouter } from "next/navigation";

export default ({ id }: { id: string }) => {
  const router = useRouter();
  const onClick = async () => {
    const secret = prompt("새로고침 하기 위한 시크릿 키를 입력하세요.", "");
    const { message } = await (
      await fetch(`/api/revalidate?tag=${id}`, {
        method: "POST",
        body: JSON.stringify({
          secret,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
    router.refresh();
    return alert(message);
  };
  return (
    <div className="text-[gray] hover:cursor-pointer" onClick={() => onClick()}>
      <i className="bi bi-arrow-clockwise mr-1"></i>
      <span>Reload Post</span>
    </div>
  );
};
