import React from 'react';
import { HashRouter } from 'react-router-dom';
import './styles/style.css';

import Navbar from './views/Navbar';
import Page from './views/Page';
import Footer from './views/Footer';

const App = () => (
  <HashRouter basename="/">
    <div className="app">
      <Navbar />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  </HashRouter>
);

export default App;
