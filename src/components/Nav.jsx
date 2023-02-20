import { Link as RouteLink } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <Flex
      // marginX={'20%'}
      width={"90%"}
      padding={2}
      marginBottom={10}
      paddingBottom={5}
      paddingTop={5}
      bgGradient="linear(to-b, blue.200, gray.600)"
      boxShadow={"2xl"}
      borderTopRadius={0}
      borderBottomRadius={"0.5em"}
      justify={"space-around"}
      color={"gray.100"}
    >
      <Link as={RouteLink} to={"/"}>
        Climbing
      </Link>
      <Link as={RouteLink} to={"/"}>
        Cooking
      </Link>
      <Link as={RouteLink} to={"/"}>
        Fun
      </Link>
      <Link as={RouteLink} to={"/"}>
        Coding
      </Link>
    </Flex>
  );
}
