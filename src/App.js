import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './components/Navbar';
import Navigation from './components/Navigation';
import Page from './components/Page';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header className='sticky-top'>
            {<Navbar />}
          </header>
          <main>
            <div className="container-fluid">
              <div className="row">
                <div className='col-2'>
                  <aside>
                    {<Navigation />}
                  </aside>
                </div>
                <div className="col-10">
                  <section className='text-center'>
                    {<Page />}
                  </section>
                </div>
              </div>
            </div>
            <footer className='fixed-bottom text-center'>
              {<Footer />}
            </footer>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
