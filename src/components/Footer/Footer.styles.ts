import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 3;
  flex-direction: column;
  height: 3vh;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #44475a;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  p {
    font-family: 'Open sans', sans-serif;
    font-size: 1rem;
    color: #fff;
    margin: 0 0 0 0;
    a {
      text-decoration: none;
      color: #fff;
    }
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
