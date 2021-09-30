import styled from 'styled-components';

export const StyledRoomCard = styled.div`
  height: 300px;
  min-width: 300px;

  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background-color: #bcd9ea;

  .subject {
    height: 150px;
    background-color: var(--blue);
    padding: 20px;
    color: var(--white);

    h3 {
      font-size: 15px;
    }
  }

  .class-info {
    padding: 20px;
    color: #094c72;
  }

  .button-link {
    height: 40px;
    width: 100%;
    background-color: var(--blue);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);

    :hover {
      background-color: #5ba4cf;
    }
  }

  a {
    margin: 0 15px 15px 15px;
    color: var(--white);

    :hover {
      color: var(--white);
    }
  }
`;
