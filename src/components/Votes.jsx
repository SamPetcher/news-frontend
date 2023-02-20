import { usePostVoteMutation } from "../features/apiSlice";
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
    <div className="inline-flex">
      <Button onClick={(e) => handleUpvoteClick(e)}>👍</Button>
      <Button onClick={(e) => handleDownvoteClick(e)}>👎</Button>
    </div>
  );
}
export default Votes;
