import { DEFAULT_PAGE_WIDTH } from "src/config";
import { Header, Navigation } from "src/widgets/Layout";

const NavigationLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main className="min-h-dvh m-auto" style={{ maxWidth: DEFAULT_PAGE_WIDTH }}>
        {children}
      </main>
    </>
  );
};

export default NavigationLayout;
