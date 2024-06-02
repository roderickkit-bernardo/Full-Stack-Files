// Developer: Roderick Bernardo
// Purpose: React router demo

import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <>
      <Header version={props.version} />
      {/* This a dynamic component place holder */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
