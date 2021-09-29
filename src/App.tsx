import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Nav from './components/Nav';
import Layout from './components/Layout';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Nav />
      <Layout />
    </React.Fragment>
  );
};

export default App;
