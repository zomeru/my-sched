import React from 'react';
import { StyledLayout } from '../styles/componentStyles/LayoutStyles';
import Rooms from './Rooms';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <StyledLayout>
      <main>
        <Rooms />
      </main>
    </StyledLayout>
  );
};

export default Layout;
