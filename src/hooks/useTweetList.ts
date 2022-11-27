import { useEffect, useState } from "react";
import tweetRepository from "api/tweetRepository";

import type { UserItem, TweetItem } from "api/tweetRepository";

type ListItemUser = {
  type: "user";
  data: UserItem[];
};

type ListItemTweet = {
  type: "tweet";
  data: TweetItem;
};

type ListItem = ListItemUser | ListItemTweet;

const useTweetList = () => {
  const [list, setList] = useState<ListItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getList = async () => {
    try {
      setIsLoading(true);

      const list = await tweetRepository.get();
      const tweetList: ListItemTweet[] = list.tweets.map((tweet) => ({
        type: "tweet",
        data: tweet,
      }));
      const userList: ListItemUser = {
        type: "user",
        data: list.user,
      };

      setList((prevList) => [...prevList, ...tweetList, userList]);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const fetchMore = () => {
    getList();
  };

  return { list, isLoading, error, fetchMore };
};

export default useTweetList;
