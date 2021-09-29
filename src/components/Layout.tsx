import React from 'react';
import { StyledLayout } from '../styles/componentStyles/LayoutStyles';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <main>{children}</main>
    </StyledLayout>
  );
};

export default Layout;
