import styled from 'styled-components';

interface ButtonContainerProps {
  selected: boolean;
}

export const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  min-width: 6rem;
  height: ${(props) => (props.selected ? '3rem' : '2.5rem')};
  background: ${(props) => props.color || '#5e5df0'};
  border-radius: 999px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-family: 'Open sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.5rem;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  word-break: break-word;
  border: ${(props) => (props.selected ? '3px solid #282a36' : 'none')};
  p {
    display: flex;
    gap: 0.3rem;
  }
`;
