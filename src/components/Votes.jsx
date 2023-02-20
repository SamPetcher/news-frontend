import { Button, ButtonGroup } from "@chakra-ui/react";
import { usePostVoteMutation } from "../features/apiSlice";
import { v4 as uuidv4 } from "uuid";

function Votes({ article }) {
  const [updatePost, { isLoading: isUpdating }] = usePostVoteMutation();
  const handleUpvoteClick = (e) => {
    if (!isUpdating) {
      e.currentTarget.disabled = true;
      updatePost({ id: article.article_id, inc_votes: 1 });
    }
  };

  const handleDownvoteClick = (e) => {
    if (!isUpdating) {
      e.currentTarget.disabled = true;
      updatePost({ id: article.article_id, inc_votes: -1 });
    }
  };
  // ? I just have very little idea of what is going on here. It's really difficult to use. Or maybe I'm stupid. Dunno
  return (
    <div key={uuidv4()} className="inline-flex">
      <ButtonGroup isAttached>
        <Button colorScheme={"green"} size={'xs'} onClick={(e) => handleUpvoteClick(e)}>
          Great
        </Button>
        <Button colorScheme={"red"} size={'xs'} onClick={(e) => handleDownvoteClick(e)}>
          Terrible
        </Button>
      </ButtonGroup>
    </div>
  );
}
export default Votes;
