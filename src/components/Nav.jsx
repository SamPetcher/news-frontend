import { Link as RouteLink } from "react-router-dom";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { Link } from "react-router-dom";
import { useGetTopicsQuery } from "../features/apiSlice";
export default function Nav() {
  const { data, isLoading, isSuccess, isError, error } = useGetTopicsQuery();
  let content;
  if (isLoading) content = <Spinner />;
  else if (isError) content = error;
  else if (isSuccess) {
    content = data.topics.map((topic) => (
      <Link key={uuidv4()} as={RouteLink} to={`/topic/${topic.slug}`}>
        {topic.slug[0].toUpperCase() + topic.slug.slice(1)}
      </Link>
    ));
    content.splice(
      0,
      0,
      <Link key={uuidv4()} as={RouteLink} to={`/`}>
        Home
      </Link>
    );
  }
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
      {content}
    </Flex>
  );
}
