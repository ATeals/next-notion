import { Heading } from "@repo/ui";

const HomePage = () => {
  return (
    <div>
      <Heading size="sm" className=" animate-fadeIn">
        Heading
      </Heading>
      <Heading size="md">Heading</Heading>
      <Heading size="lg">Heading</Heading>
      <Heading size="xl">Heading</Heading>
      <Heading size="2xl">Heading</Heading>
    </div>
  );
};

export default HomePage;
