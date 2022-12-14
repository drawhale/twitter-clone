import axios from "axios";

const BASE_API_URL = "/mocks";

export const fetchTweetList = async () => {
  const response = await axios.get(`${BASE_API_URL}/sample_data.json`);
  return await response.data;
};

export const fetchTrendList = async () => {
  const response = await axios.get(`${BASE_API_URL}/trend.json`);
  return await response.data;
};

export const fetchRecommendedFollow = async () => {
  const response = await axios.get(`${BASE_API_URL}/follow.json`);
  return await response.data;
};
