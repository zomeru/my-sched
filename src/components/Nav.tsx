import React from 'react';
import { StyledNav } from '../styles/componentStyles/NavStyles';

interface navProps {}

const nav: React.FC<navProps> = () => {
  return (
    <StyledNav>
      <nav>
        <h1>Link Class</h1>
        <p>A place for all your online class rooms.</p>
      </nav>
    </StyledNav>
  );
};

export default nav;
