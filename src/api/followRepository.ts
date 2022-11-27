import { fetchRecommendedFollow } from "api/api";

export interface RecommendedFollowItem {
  name: string;
  id: string;
  image_url: string;
}

const recommendedFollowRepository = {
  get: async () => {
    const result = await fetchRecommendedFollow();
    return result.data as RecommendedFollowItem[];
  },
};

export default recommendedFollowRepository;
