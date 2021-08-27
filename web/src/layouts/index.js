import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import Header from "../components/header";
import { TransitionWrapper } from "../components/transition";

const Layout = ({ children, location }) => {
  return (
    <React.Fragment>
      <Helmet title="Primary VC" />
      <div>
        <Header />
        <TransitionWrapper trigger={location.pathname}>
          {children}
        </TransitionWrapper>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;