import { fetchTweetList } from "api/api";

// User Type
export interface UserItem {
  id: number;
  name: string;
  screen_name: string;
  description: string;
  followers_count: number;
  friends_count: number;
  favourites_count: number;
  created_at: string;
  profile_image_url_https: string;
}

// Tweet Type
interface TweetMediaItem {
  media_url: string;
  type: "photo" | "video";
}

export interface TweetItem {
  id_str: string;
  full_text: string;
  created_at: string;
  user_id_str: string;
  retweet_count: number;
  favorite_count: number;
  reply_count: number;
  quote_count: number;
  profile_image_url_https: string;
  hashtags: string[];
  media: TweetMediaItem[];
}

export interface TweetListResponse {
  user: UserItem[];
  tweets: TweetItem[];
}

const tweetRepository = {
  get: async () => {
    const result: TweetListResponse = await fetchTweetList();
    return result;
  },
};

export default tweetRepository;
