import { usePostVoteMutation } from "../features/apiSlice";
function Votes({ article }) {
  const [updatePost, { isLoading: isUpdating }] = usePostVoteMutation();
  const handleUpvoteClick = () => {
    if (!isUpdating) {
      updatePost(article.article_id, { inc_votes: 1 });
    }
  };

  const handleDownvoteClick = () => {
    if (!isUpdating) {
      updatePost(article.article_id, { inc_votes: -1 });
    }
  };
  // ? I just have very little idea of what is going on here. It's really difficult to use. Or maybe I'm stupid. Dunno
  return (
    <div className="inline-flex">
      <button onClick={handleUpvoteClick}>👍</button>
      <button onClick={handleDownvoteClick}>👎</button>
    </div>
  );
}
export default Votes;
