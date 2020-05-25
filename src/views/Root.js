import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import theme from 'theme/theme';

import Header from './Header';
import Sidebar from './Sidebar';
import Section from './Section';
import Footer from './Footer';

class Root extends Component {
  state = {
    showSidebar: true,
  };

  toggleSidebar = () => {
    const { showSidebar } = this.state;
    this.setState({
      showSidebar: !showSidebar,
    });
  };

  render() {
    const { showSidebar } = this.state;
    return (
      <HashRouter basename="/">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header toggle={this.toggleSidebar} sidebarStatus={showSidebar} />
          <main>
            <Sidebar sidebarStatus={showSidebar} />
            <Section />
          </main>
          <Footer />
        </ThemeProvider>
      </HashRouter>
    );
  }
}

export default Root;
