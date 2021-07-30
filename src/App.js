import React from "react";

import NavBar from "./NavBar";
import StartBootstrap from "./StartBootstrap";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <StartBootstrap />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
