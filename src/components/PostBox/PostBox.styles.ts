import styled from 'styled-components';

export const PostBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: auto;
`;

export const PostVideo = styled.video`
  max-width: 100%;
  max-height: 100%;
  display: block;
  border-radius: 10px 10px 0 0;
`;

export const PostImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  border-radius: 10px 10px 0 0;
`;

export const PostDescription = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  padding: 5px;
  background-color: #282a36;
  margin: 0;
  color: #fff;
  border-radius: 0 0 10px 10px;
`;

export const PostMetadata = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 5px 0 0 0;
  padding: 3px;
  span {
    font-size: 0.8rem;
    font-weight: 400;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    gap: 5px;
  }
`;
