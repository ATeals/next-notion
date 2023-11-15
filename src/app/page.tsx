import Link from "next/link";

export const runtime = "edge";

export default () => {
  return (
    <main>
      <Link href={`/posts/${"859dbd28f36f4296a0c506cf5810ebbd"}`}>Post</Link>
    </main>
  );
};
