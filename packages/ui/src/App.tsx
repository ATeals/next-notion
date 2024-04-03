import { generateClassName } from "@repo/utils";

const App = () => {
  return (
    <div className="w-full h-screen dark:bg-black-bg">
      <Page />
    </div>
  );
};

export default App;

const Box = ({ className }: { className: string }) => {
  const tailwind = generateClassName(
    "w-40 h-40 rounded-lg m-2 shadow-lg dark:shadow-zinc-900",
    className
  );

  return <div className={tailwind}></div>;
};

const Page = () => {
  return (
    <>
      <h1>hello</h1>
      <div className="flex animate-fadeInDown">
        <Box className="bg-primary-xl" />
        <Box className="bg-primary-lg" />
        <Box className="bg-primary-md" />
        <Box className="bg-primary-sm" />
      </div>

      <div className="flex animate-[fadeIn_1s_200ms]">
        <Box className="bg-secondary-xl" />
        <Box className="bg-secondary-lg" />
        <Box className="bg-secondary-md" />
        <Box className="bg-secondary-sm" />
      </div>
    </>
  );
};
