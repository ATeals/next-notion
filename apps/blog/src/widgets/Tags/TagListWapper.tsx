export const TagListWapper = ({
  children,
  navigation,
}: {
  children: React.ReactNode;
  navigation: React.ReactNode;
}) => {
  return (
    <>
      <aside className=" lg:absolute lg:h-full lg:top-20 lg:left-0 lg:translate-x-[-100%] p-5 pl-0">
        {navigation}
      </aside>
      {children}
    </>
  );
};
