/* eslint-disable @typescript-eslint/no-empty-interface */
export interface GetPostsServiceParams {
  section: string;
  sort: string;
  window: string;
  page: number;
}

export interface GetPostsServiceResponse {
  postsData: PostData[];
  status: number;
  success: boolean;
}

export interface PostData {
  id: string;
  title: string;
  description: string;
  isAlbum: boolean;
  isAnimated: boolean;
  score: number;
  views: number;
  link: string;
  mp4?: string;
  gifv?: string;
}

export interface APIResponse {
  id: string;
  title: string;
  description: string;
  is_album: boolean;
  animated: boolean;
  score: number;
  views: number;
  link: string;
  mp4?: string;
  gifv?: string;
  images: {
    animated: boolean;
    link: string;
    mp4?: string;
    gifv?: string;
  }[];
}
