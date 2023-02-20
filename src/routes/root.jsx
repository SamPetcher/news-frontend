import { Outlet, Link } from "react-router-dom";
import { Box, Center, Flex } from "@chakra-ui/react";
import Articles from "../components/Articles";
import Nav from "../components/Nav";
export default function Root() {
  return (
    <Center flexDir={"column"} bgColor={"gray.300"} width={"100vw"}>
      <Nav />
      <Outlet />
    </Center>
  );
}
