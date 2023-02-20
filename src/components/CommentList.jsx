import {
  Card,
  Center,
  CardHeader,
  Stack,
  Text,
  CardBody,
  StackDivider,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { usePostVoteMutation } from "../features/apiSlice";

function CommentList({ data }) {
  const [updatePost, { isLoading: isUpdating }] = usePostVoteMutation();

  let content = data.comments.map((comment) => {
    return (
      <Card marginBottom={2} key={uuidv4()} width={"80%"}>
        <CardHeader>
          <Stack
            spacing={8}
            direction="row"
            justify={"space-around"}
            divider={<StackDivider />}
            fontFamily={"mono"}
            fontStyle={"italic"}
            color={"gray.900"}
          >
            <Text>{comment.author}</Text>
            <Text>{comment.votes}</Text>
            <Text>{new Date(comment.created_at).toString().slice(0, 16)}</Text>
          </Stack>
        </CardHeader>
        <CardBody>
          <Text>{comment.body}</Text>
        </CardBody>
      </Card>
    );
  });
  return <Center flexDir={"column"}>{content}</Center>;
}
export default CommentList;
