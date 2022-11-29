import styled from "styled-components";
import { flexColumnBox } from "styles";
import TweetListItem from "components/main/TweetListItem";
import useTweetList from "hooks/useTweetList";
import useIntersect from "hooks/useIntersect";
import LoadingBar from "components/common/LoadingBar";

import type { FC } from "react";

const TweetList: FC = () => {
  const { list, isLoading, fetchMore } = useTweetList();
  const intersectRef = useIntersect(() => {
    fetchMore();
  });

  return (
    <Wrapper>
      {list.map((item, index) => (
        <TweetListItem key={index} data={item} />
      ))}
      <IntersectTarget ref={intersectRef} />
      {isLoading && <LoadingBar />}
    </Wrapper>
  );
};

export default TweetList;

const Wrapper = styled.div`
  ${flexColumnBox};
`;

const IntersectTarget = styled.div`
  min-height: 40px;
`;
