"use client";

import { useRouter } from "next/navigation";

export const RevalidatePostButton = ({ id }: { id: string }) => {
  const router = useRouter();

  const onClick = async () => {
    const secret = prompt("새로고침 하기 위한 시크릿 키를 입력하세요.", "");
    const res = await fetch(`/api/revalidate?tag=${id}`, {
      method: "POST",
      body: JSON.stringify({
        secret,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { message } = await res.json();

    if (res.ok) router.refresh();

    alert(message);
  };

  return (
    <div className="text-[gray] hover:cursor-pointer" onClick={() => onClick()}>
      <i className="bi bi-arrow-clockwise mr-1"></i>
      <span>Reload Post</span>
    </div>
  );
};
