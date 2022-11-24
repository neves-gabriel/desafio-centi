import { AiOutlineEye } from 'react-icons/ai';
import { BiDownvote, BiUpvote } from 'react-icons/bi';
import {
  PostBoxWrapper,
  PostDescription,
  PostImg,
  PostMetadata,
  PostVideo,
} from './PostBox.styles';
import { PostData } from '../../service/api';

interface PostsColumnProps {
  postData: PostData;
}

export const PostBox = (props: PostsColumnProps) => {
  const { postData } = props;

  return (
    <PostBoxWrapper key={postData?.id}>
      {postData?.isAlbum ? (
        postData?.isAnimated ? (
          <PostVideo
            src={postData?.mp4 || postData.link || postData?.gifv}
            autoPlay={true}
            muted={true}
            loop={true}
          />
        ) : (
          <PostImg src={postData.link} />
        )
      ) : postData?.isAnimated ? (
        <PostVideo
          src={postData?.mp4 || postData.link || postData?.gifv}
          autoPlay={true}
          muted={true}
          loop={true}
        />
      ) : (
        <PostImg src={postData?.link} />
      )}
      <PostDescription>
        <span>{postData?.title}</span>
        <PostMetadata>
          <span>
            <BiUpvote />
            {postData.score}
            <BiDownvote />
          </span>
          <span>
            <AiOutlineEye />
            {postData.views}
          </span>
        </PostMetadata>
      </PostDescription>
    </PostBoxWrapper>
  );
};
