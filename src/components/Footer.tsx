import React from 'react';
import { StyledFooter } from '../styles/componentStyles/FooterStyles';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <a href='https://zomer.xyz' target='_blank' rel='noreferrer'>
        <p>Designed and built by Zomer Gregorio.</p>
        <p>&copy; 2021 - Zomer Gregorio. All rights reserved.</p>
      </a>
    </StyledFooter>
  );
};

export default Footer;
