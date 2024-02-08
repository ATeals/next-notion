import Portal from "@/feature/common/components/Portal";
import RevalidatePost from "@/feature/post/components/RevalidatePost";
import { REVALIDATE_TAGNAME } from "@/constants";

export default ({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  return (
    <>
      {children}
      <Portal component={<RevalidatePost id={id} />} elementId={REVALIDATE_TAGNAME} />
    </>
  );
};
