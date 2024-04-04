const NavigationLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <header className={`fixed w-full bg-red-300 h-6 inset-0`}></header>
      {children}
    </>
  );
};

export default NavigationLayout;
