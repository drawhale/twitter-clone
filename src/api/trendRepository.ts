import { fetchTrendList } from "api/api";

export interface TrendItem {
  title: string;
  description: string;
  tweetCount: number;
}

const trendRepository = {
  get: async () => {
    const result = await fetchTrendList();
    return result.data as TrendItem[];
  },
};

export default trendRepository;
