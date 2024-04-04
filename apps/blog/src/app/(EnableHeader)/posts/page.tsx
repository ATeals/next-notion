"use client";

import { useStorage } from "@repo/react";

const PostPage = () => {
  const [store, setStore] = useStorage<{ string: string }>({
    key: "key",
    initialValue: { string: "" },
  });

  return (
    <div className="h-full pt-10">
      <input
        type="text"
        value={store?.string}
        onChange={(e) => setStore((prev) => ({ ...prev, string: e.target.value }))}
      />
      hello
      <button onClick={() => setStore(undefined)}>clear</button>
    </div>
  );
};

export default PostPage;
