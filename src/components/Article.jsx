// :TODO I think that all I need to do here later is add interactivity, voting etc...
// not sure that it is important per se right now...
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGetArticleQuery, useGetCommentsQuery } from "../features/apiSlice";
import CommentList from "./CommentList";
import { usePostVoteMutation } from "../features/apiSlice";
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
  if (isLoading) content = <Loader />;
  else if (isError) content = error;
  else if (isSuccess && commentSuccess)
    content = (
      <div className="bg-slate-300 m-1 rounded-lg p-1 flex-col mx-5">
        <div className="bg-slate-100 m-1 rounded-lg p-1 flex-col">
          <h1 className="font-sans text-lg  font-semibold">
            <p to={`article/${article.article_id}`}>{article.title}</p>
          </h1>
          <p className="font-mono text-slate-500">{article.votes}</p>
          <Votes article={article} />
          <p className="font-mono text-slate-500">{article.author}</p>
          <a className="font-mono text-slate-500">{article.body}</a>
        </div>
        <CommentList data={comments} />
      </div>
    );
  return <div>{content}</div>;
}
export default Article;
