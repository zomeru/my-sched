import React from 'react';
import { StyledFooter } from '../styles/componentStyles/FooterStyles';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <StyledFooter>
      <p>Designed and build by Zomer Gregorio.</p>
    </StyledFooter>
  );
};

export default Footer;
