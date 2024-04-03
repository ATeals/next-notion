import { generateClassName } from "@repo/utils";
import { Heading } from ".";

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
    </>
  );
};
