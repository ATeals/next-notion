import { DividerLine, Heading, Icon, Text } from ".";

const App = () => {
  return (
    <div className="w-full h-screen dark:bg-black-bg">
      <Page />
    </div>
  );
};

export default App;

// const Box = ({ className }: { className?: string }) => {
//   const tailwind = generateClassName(
//     "w-40 h-40 rounded-lg m-2 shadow-lg dark:shadow-zinc-900",
//     className
//   );

//   return <div className={tailwind}></div>;
// };

const Page = () => {
  return (
    <>
      <Heading size="sm">Heading</Heading>
      <Heading size="md">Heading</Heading>
      <Heading size="lg">Heading</Heading>
      <Heading size="xl">Heading</Heading>
      <Heading size="2xl">Heading</Heading>
      <DividerLine />

      <Text size="sm">Text</Text>
      <Text size="md">Text</Text>
      <Text size="lg">Text</Text>
      <Text size="xl">Text</Text>
      <Text size="2xl">Text</Text>

      <DividerLine />

      <Icon icon="house" size="sm" />
      <Icon icon="house" size="md" />
      <Icon icon="house" size="lg" />
      <Icon icon="house" size="xl" />
    </>
  );
};
