import styled from "styled-components";
import { flexColumnBox } from "styles";
import TweetListItem from "components/main/TweetListItem";
import useTweetList from "hooks/useTweetList";

import type { FC } from "react";

const TweetList: FC = () => {
  const { list, fetchMore } = useTweetList();

  return (
    <Wrapper>
      {list.map((item, index) => (
        <TweetListItem key={index} data={item} />
      ))}
      <button onClick={fetchMore}>더보기 버튼</button>
    </Wrapper>
  );
};

export default TweetList;

const Wrapper = styled.div`
  ${flexColumnBox};
`;
