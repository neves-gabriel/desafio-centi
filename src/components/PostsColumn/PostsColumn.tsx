import { PostsWrapper } from './PostsColumn.styles';
import { PostData } from '../../service/api';
import { PostBox } from '../PostBox';

interface PostsColumnProps {
  postsData: PostData[];
}

export const PostsColumn = (props: PostsColumnProps) => {
  const { postsData } = props;

  return (
    <PostsWrapper>
      {postsData.map((post: PostData) => (
        <PostBox key={post?.id} postData={post} />
      ))}
    </PostsWrapper>
  );
};
