import styled from 'styled-components';

interface TopContainerProps {
  width: string;
}

interface SectionButtonsContainerProps {
  width: string;
}

export const HomePage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #44475a;
  height: 100%;
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 3rem;
`;

export const SectionButtonsContainer = styled.div<SectionButtonsContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (Number(props.width) < 1045 ? 'column' : 'row')};
  gap: 1rem;
`;

export const TopContainer = styled.div<TopContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-direction: ${(props) => (Number(props.width) < 520 ? 'column' : 'row')};
  width: ${(props) => `${props.width}px` || '90%'};
  margin: 1rem 0 1rem 0;
`;

export const LoadMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6272a4;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;
  margin: 2rem 0 1rem 0;
  &:hover {
    background-color: #44475a;
  }
`;
