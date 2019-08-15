import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.css";

import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import Page from "./components/Page";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="app">
          {<Navbar />}
          <main>
            {<Navigation />}
            {<Page />}
          </main>
          {<Footer />}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;