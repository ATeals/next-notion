import { RetrieveDatabase } from "@/api/notion";
import { ElapsedTimeComponent } from "@/components/ElapsedTimeComponent";
import { elapsedTime } from "@/util/formatTime";
import { notionPostList, notionTagsList } from "@/util/notion";
import Link from "next/link";

export default async () => {
  const list = await notionPostList();

  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 text-[1rem] m-[20px] px-[1em] flex-col">
        {list.map((post) => (
          <Link href={`/posts/${post.id}`}>
            <div key={post.id} className="group">
              <div className="overflow-hidden rounded-lg mb-5">
                <div
                  className="w-full h-[200px] bg-cover rounded-lg group-hover:scale-110 transition duration-300 ease-in-out"
                  style={{
                    backgroundImage: `url(${
                      post.coverImg ||
                      "https://i.pinimg.com/564x/67/47/c8/6747c89d587400867c55c8be6bce52c3.jpg"
                    })`,
                  }}
                />
              </div>
              <>
                {post.tags.map((tag) => (
                  <span key={tag} className="mr-2 text-gray-500">
                    #{tag}
                  </span>
                ))}
              </>
              <h1 className="text-xl group-hover:underline"> {post.title}</h1>
              <p className="text-md text-gray-500"> {post.description}</p>
              <ElapsedTimeComponent time={post.created_at} />
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};
