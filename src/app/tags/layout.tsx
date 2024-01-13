export default ({ children, tagList }: { children: React.ReactNode; tagList: React.ReactNode }) => {
  return (
    <section className="mt-[80px] dark:text-white md:flex p-2 max-w-[800px] mx-auto">
      <aside className="md:my-7 md:w-[20%]">{tagList}</aside>
      <section className="md:w-[80%]">{children}</section>
      <div></div>
    </section>
  );
};
