import { Flex, Heading, Text } from "@repo/ui";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="h-dvh w-full p-2 block md:flex">
      <Flex
        className="p-10 md:h-full md:w-1/2"
        style={{ direction: "column", gap: 10, justify: "start" }}
      >
        <Image
          className="shadow-2xl rounded-[50%]"
          src={"/images/logo.webp"}
          alt="logo"
          width={150}
          height={150}
        />
        <Heading className="drop-shadow-lg">Ateals Blog</Heading>
      </Flex>
      <div className="bg-red-200 h-full w-full"></div>
    </div>
  );
};

export default HomePage;
