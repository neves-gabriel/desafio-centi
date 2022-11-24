import styled from 'styled-components';

interface TopContainerProps {
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
`;

export const SectionButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
`;

export const TopContainer = styled.div<TopContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: ${(props) => `${props.width}px` || '90%'};
  margin: 1rem 0 1rem 0;
`;
