// import styled from "styled-components";

import type { FC } from "react";
import type { TweetItem } from "api/tweetRepository";

type Props = {
  data: TweetItem;
};

const TweetListItem: FC<Props> = ({ data }) => {
  // const { id_str } = data;

  return <h1>TweetListItem</h1>;
};

export default TweetListItem;
