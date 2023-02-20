import { v4 as uuidv4 } from "uuid";
import { usePostVoteMutation } from "../features/apiSlice";
function CommentList({ data }) {
  const [updatePost, { isLoading: isUpdating }] = usePostVoteMutation();

  let content = data.comments.map((comment) => {
    return (
      <div key={uuidv4()} className="bg-slate-300 m-1 rounded-lg p-1 flex-col">
        <p className="text-cyan-900 font-bold">
          {comment.author} | {comment.votes} |
          {new Date(comment.created_at).toString().slice(0, 24)}
        </p>
        <div className="bg-slate-200 rounded-lg my-2 p-1 text-cyan-900">
          <p>{comment.body}</p>
          <span className="bg-slate-50 w-24 rounded-lg p-1">
            <span
              href=""
              onClick={() => updatePost(comment.id, { inc_votes: 123 })}
            >
              Love
            </span>
            |<a href="">Hate</a>
          </span>
        </div>
      </div>
    );
  });
  return <div>{content}</div>;
}
export default CommentList;
