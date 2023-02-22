import {
  Textarea,
  Card,
  FormLabel,
  Box,
  Text,
  Button,
  FormControl,
} from "@chakra-ui/react";
import { usePostCommentMutation } from "../features/apiSlice";

export function CommentPost() {
  const [updateComment, { isLoading: isUpdating, isSuccess }] =
    usePostCommentMutation();
  const handleSubmit = (e) => {
    const comment = e.target.comments.value
    updateComment(comment)
    e.preventDefault();
    //updateComment();
  };
  let content;
  if (isUpdating) {
    content = (
      <Button
        onClick={(e) => handleSubmit(e)}
        isLoading
        my={2}
        size="sm"
        colorScheme={"blue"}
      ></Button>
    );
  } else if (isSuccess) {
    content = (
      <Button isDisabled my={2} size="sm" colorScheme={"green"}>
        Success
      </Button>
    );
  } else {
    content = (
      <Button
        my={2}
        //onClick={(e) => handleSubmit(e)}
        type={"submit"}
        size="sm"
        colorScheme={"blue"}
      >
        Submit
      </Button>
    );
  }

  return (
    <>
      Hello world
      <Box p={2}>
        <form onSubmit={handleSubmit}>
          <Card padding={6}>
            <FormLabel>Comment:</FormLabel>
            <Textarea name="comments" bg></Textarea>
            {content}
          </Card>
        </form>
      </Box>
    </>
  );
}
