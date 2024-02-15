import Link from "next/link";
import { usePostContext } from "../../hooks/usePostContext";

export const Tags = () => {
  const post = usePostContext();

  return (
    <div>
      {post.tags.map((tag) => (
        <Link
          href={`/tags/${tag.name}`}
          key={tag.id + post.id}
          className="no-underline hover:underline cursor-pointer mr-2 text-gray-500"
        >
          #{tag.name}
        </Link>
      ))}
    </div>
  );
};
