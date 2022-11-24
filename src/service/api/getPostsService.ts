/* eslint-disable camelcase */
import axios from 'axios';
import type {
  APIResponse,
  GetPostsServiceParams,
  GetPostsServiceResponse,
  PostData,
} from './getPostsService.types';

export const getPostsService = async (
  params: GetPostsServiceParams
): Promise<GetPostsServiceResponse> => {
  params.section ? params.section : (params.section = 'hot');
  params.sort ? params.sort : (params.sort = 'viral');
  params.window ? params.window : (params.window = 'day');
  params.page ? params.page : (params.page = 1);

  const options = {
    method: 'GET',
    url: `https://api.imgur.com/3/gallery/${params.section}/${params.sort}/${params.window}/${params.page}?showViral=false&mature=false&album_previews=true`,
    headers: { Authorization: 'Client-ID 7daf8fba88d76a6' },
  };
  const response = await axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error('getPostsService', error);
    });

  let postsData: PostData[] = [];

  if (response.data && response.success) {
    postsData = response.data.map((post: APIResponse) => {
      let postData = {} as PostData;
      if (post.is_album) {
        postData = {
          id: post.id,
          title: post.title,
          description: post.description,
          isAlbum: true,
          isAnimated: post?.images[0].animated ? true : false,
          score: post.score,
          views: post.views,
          link: post.images[0].link,
          mp4: post?.images[0]?.mp4,
          gifv: post?.images[0]?.gifv,
        };
      } else if (post.is_album === false) {
        postData = {
          id: post.id,
          title: post.title,
          description: post.description,
          isAlbum: false,
          isAnimated: post.animated ? true : false,
          score: post.score,
          views: post.views,
          link: post.link,
          mp4: post?.mp4,
          gifv: post?.gifv,
        };
      }
      return postData;
    });
  }
  return { postsData, status: response.status, success: response.success };
};
