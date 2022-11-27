import axios from "axios";
import { TrendItem } from "./trendRepository";

const BASE_API_URL = "/mocks";

export const fetchTrendList = async () => {
  const response = await axios.get(`${BASE_API_URL}/trend.json`);
  return await response.data;
};

export const fetchRecommendedFollow = async () => {
  const response = await axios.get(`${BASE_API_URL}/follow.json`);
  return await response.data;
};
