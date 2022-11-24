import { ColumnsContainer } from './PostContainer.styles';
import { PostData } from '../../service/api';
import { PostsColumn } from '../PostsColumn';

interface PostsContainerProps {
  postsColumnsData: PostData[][];
  postsContainerWidth: string;
}

export const PostsContainer = (props: PostsContainerProps) => {
  const { postsColumnsData, postsContainerWidth } = props;

  return (
    <ColumnsContainer width={postsContainerWidth}>
      {postsColumnsData.map((postsColumnData: PostData[], index: number) => (
        <PostsColumn key={index} postsData={postsColumnData} />
      ))}
    </ColumnsContainer>
  );
};
