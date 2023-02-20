import {
  Spinner,
  CardBody,
  Card,
  CardHeader,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { useGetPostsQuery } from "../features/apiSlice";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Articles() {
  const { data, isLoading, isSuccess, isError, error } = useGetPostsQuery();

  let content;
  if (isLoading) content = <Spinner />;
  else if (isError) content = error;
  else if (isSuccess)
    content = data.articles.map((post) => (
      <Card key={uuidv4()} marginBottom={1} padding={0} width={"90%"}>
        <CardHeader margin={0} padding={1}>
          <Link to={`article/${post.article_id}`} as={RouteLink} size={"md"}>
            {post.title}
          </Link>
        </CardHeader>
        <CardBody paddingX={2} marginY={0}>
          <Stack
            spacing={24}
            direction="row"
            fontFamily={"mono"}
            fontStyle={"italic"}
            color={"gray.900"}
          >
            <Text key={uuidv4()}>{post.author}</Text>
            <Text key={uuidv4()}>
              {new Date(post.created_at).toString().slice(0, 16)}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    ));

  return <>{content}</>;
}

export default Articles;
