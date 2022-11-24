import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 15vh;
  p {
    font-family: 'Open sans', sans-serif;
    font-size: 3rem;
    color: #fff;
    margin: 0 0 0 0;
  }
  span {
    font-family: inherit;
    font-size: 2rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
    img {
      width: 12rem;
    }
  }
`;
