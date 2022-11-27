import { fetchTweetList } from "api/api";

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
  tweets: TweetItem[];
}

const trendRepository = {
  get: async () => {
    const result: TweetListResponse = await fetchTweetList();
    return result.tweets;
  },
};

export default trendRepository;
