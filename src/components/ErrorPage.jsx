import { Center, Heading, Box, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  return (
    <Box marginX={"40%"} marginY={"40%"} position={""}>
      <Heading>Oh noes, an error!</Heading>
      <Text>Hopefully someone sorts this out</Text>
      <Text>{useRouteError().statusText}</Text>
    </Box>
  );
}
export default ErrorPage;
