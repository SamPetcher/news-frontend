import {
  Spinner,
  Center,
  Flex,
  Badge,
  CardHeader,
  Card,
  Text,
  Heading,
  CardBody,
  Divider,
  CardFooter,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { useGetArticleQuery, useGetCommentsQuery } from "../features/apiSlice";
import CommentList from "./CommentList";
import Votes from "./Votes";

function Article() {
  const params = useParams();
  const {
    data: article,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetArticleQuery(params.articleId);

  const { data: comments, isSuccess: commentSuccess } = useGetCommentsQuery(
    params.articleId
  );

  let content;
  if (isLoading) content = <Spinner />;
  else if (isError) content = error;
  else if (isSuccess && commentSuccess)
    content = (
      // <Center flexDir={"column"}>
      <Center flexDir={"column"} width={"70%"}>
        <Card color={"grey.900"} margin={10}>
          <CardHeader>
            <Heading as="h1" size="xl">
              {article.title}
            </Heading>
            <Divider />
          </CardHeader>
          <CardBody>
            <Text>{article.body}</Text>
          </CardBody>
          <Center>
            <CardFooter>
              <Flex direction={"column"} align="center">
                <Votes article={article} />
                <Badge colorScheme={"default"} fontSize={16}>
                  {article.votes}
                </Badge>
              </Flex>
            </CardFooter>
          </Center>
        </Card>
        <CommentList data={comments} />
      </Center>
      // </Center>
    );
  return <>{content}</>;
}
export default Article;
