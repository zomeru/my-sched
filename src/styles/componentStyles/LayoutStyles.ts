import styled from 'styled-components';

export const StyledLayout = styled.div`
  main {
    max-width: var(--max-width);
    min-height: calc(100vh - (var(--nav-height) * 2));
    margin: 0 auto;
  }
`;
