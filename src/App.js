import React from "react";
import { HashRouter } from "react-router-dom";
import "./styles/style.css";

import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import Page from "./components/Page";
import Footer from "./components/Footer";

const App = () => (
  <HashRouter basename="/">
    <div className="app">
      {<Navbar />}
      <main>
        {<Navigation />}
        {<Page />}
      </main>
      {<Footer />}
    </div>
  </HashRouter>
);

export default App;
