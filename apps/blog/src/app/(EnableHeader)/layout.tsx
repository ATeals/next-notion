import { DEFAULT_HEADER_HEIGHT, DEFAULT_PAGE_WIDTH } from "src/config";
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
      <main
        className="min-h-dvh m-auto relative"
        style={{ maxWidth: DEFAULT_PAGE_WIDTH, marginTop: DEFAULT_HEADER_HEIGHT }}
      >
        {children}
      </main>
    </>
  );
};

export default NavigationLayout;
