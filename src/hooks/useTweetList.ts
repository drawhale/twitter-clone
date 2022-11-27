import { useCallback, useEffect, useState } from "react";
import tweetRepository from "api/tweetRepository";

import type { UserItem, TweetItem } from "api/tweetRepository";

type ListItem = TweetItem & {
  user: UserItem;
};

const useTweetList = () => {
  const [list, setList] = useState<ListItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getList = useCallback(async () => {
    try {
      setIsLoading(true);

      const { user, tweets } = await tweetRepository.get();
      const tweetList: ListItem[] = tweets.map((tweet) => ({
        ...tweet,
        user: user.find((item) => item.id === Number(tweet.user_id_str))!,
      }));

      setList((prevList) => [...prevList, ...tweetList]);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  }, []);

  useEffect(() => {
    getList();
  }, []);

  const fetchMore = () => {
    getList();
  };

  return { list, isLoading, error, fetchMore };
};

export default useTweetList;
