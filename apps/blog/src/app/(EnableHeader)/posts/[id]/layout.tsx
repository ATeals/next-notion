import { BLOG_CONFIG } from "@/config";
import { RevalidatePostButton } from "@/feature/posts/RevalidatePostButton";
import { Portal } from "@repo/react";

const PostLayout = ({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  return (
    <>
      {children}
      <Portal
        component={<RevalidatePostButton id={id} />}
        elementId={BLOG_CONFIG.REVALIDATE_TAGNAME}
      />
    </>
  );
};

export default PostLayout;
