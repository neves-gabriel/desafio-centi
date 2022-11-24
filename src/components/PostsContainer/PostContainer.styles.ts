import styled from 'styled-components';

interface ColumnsContainerProps {
  width: string;
}

export const ColumnsContainer = styled.div<ColumnsContainerProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: ${(props) => `${props.width}px` || '90%'};
  gap: 15px;
`;
