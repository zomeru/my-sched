import styled from 'styled-components';

export const StyledFooter = styled.footer`
  height: var(--nav-height);
  width: 100vw;
  background-color: var(--blue);
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  a {
    color: var(--white);

    :hover {
      color: var(--white);
    }
  }
`;
