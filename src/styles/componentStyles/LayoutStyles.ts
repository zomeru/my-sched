import styled from 'styled-components';

export const StyledLayout = styled.div`
  min-height: 100vh - (var(--nav-height) * 2);

  main {
    max-width: var(--max-width);
    background-color: red;
    margin: 0 auto;
  }
`;
