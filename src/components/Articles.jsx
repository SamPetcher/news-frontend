import {
  Spinner,
  CardBody,
  Card,
  CardHeader,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouteLink, useParams } from "react-router-dom";
import { useGetPostsQuery } from "../features/apiSlice";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Articles() {
  const params = useParams();
  const { data, isLoading, isSuccess, isError, error } = useGetPostsQuery();

  let content;
  if (isLoading) content = <Spinner />;
  else if (isError) content = error;
  else if (isSuccess) {
    let filteredTopics;
    if (!params.topic) filteredTopics = data.articles;
    else {
      filteredTopics = [...data.articles].filter((article) => {
        return article.topic === params.topic;
      });
    }

    content = filteredTopics.map((post) => (
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
  }
  /* const topicFilter = data.articles.filter(
    (article) => article.topic === params
  ); */
  if (isSuccess) {
  }
  return <>{content}</>;
}

export default Articles;
