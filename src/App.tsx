import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Nav from './components/Nav';
import Layout from './components/Layout';
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Nav />
      <Layout />
      <Footer />
    </React.Fragment>
  );
};

export default App;
