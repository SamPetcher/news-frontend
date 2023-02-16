import Nav from "../components/Nav";
import Articles from "../components/Articles";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}
export default Layout;
