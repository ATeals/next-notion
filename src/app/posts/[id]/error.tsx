"use client";

import { useRouter } from "next/navigation";

export default () => {
  const router = useRouter();

  const handleClick = () => {
    router.refresh();
  };
  return (
    <section className="flex justify-center items-center flex-col pt-[100px]">
      <h2>포스트를 불러오던 중 오류가 발생했습니다.</h2>
      <button onClick={handleClick}>새로고침</button>
    </section>
  );
};
