import { Outlet, Link } from "react-router-dom";
import Articles from "../components/Articles";
import Nav from "../components/Nav";
export default function Root() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
