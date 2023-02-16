import { useRouteError } from "react-router-dom";

function ErrorPage() {
  return (
    <div id="error">
      <h1>Oh noes, an error!</h1>
      <i>Hopefully someone sorts this out :(</i>
      <br />
      <i>{useRouteError().statusText}</i>
    </div>
  );
}
export default ErrorPage;
