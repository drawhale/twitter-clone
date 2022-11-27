import styled from "styled-components";
import { flexColumnBox, flexRowBox } from "styles";
import TweetListHeader from "components/main/TweetListHeader";
import TweetPost from "components/main/TweetPost";
import TweetList from "components/main/TweetList";
import SearchBar from "components/main/SearchBar";
import TrendCard from "components/main/TrendCard";
import RecommendedFollowCard from "components/main/RecommendedFollowCard";
import FooterNav from "components/main/FooterNav";

import type { FC } from "react";

const Main: FC = () => {
  return (
    <Wrapper>
      <SplitWrapper>
        <LeftWrapper>
          <TweetListHeader />
          <TweetPost />
          <TweetList />
        </LeftWrapper>
        <RightWrapper>
          <SearchBar />
          <EmptyWrapper />
          <TrendCardWrapper>
            <TrendCard />
          </TrendCardWrapper>
          <FollowCardWrapper>
            <RecommendedFollowCard />
          </FollowCardWrapper>
          <FooterNav />
        </RightWrapper>
      </SplitWrapper>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 990px;
  flex-grow: 1;
  flex-shrink: 1;

  ${flexColumnBox};
`;

const SplitWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 1;

  ${flexRowBox}};
  justify-content: space-between;
`;

const LeftWrapper = styled.div`
  ${flexColumnBox};
  width: 100%;
  max-width: 600px;
  min-height: 100%;
  z-index: 1;

  ${(props) => `
    background-color: ${props.theme.backgroundColor};
    border: 1px solid ${props.theme.borderColor};
  `}
`;

const RightWrapper = styled.div`
  ${flexColumnBox};
  width: 350px;
  margin-right: 10px;
  padding: 12px 0 64px;
`;

const EmptyWrapper = styled.div`
  height: 53px;
`;

const TrendCardWrapper = styled.div`
  margin-bottom: 16px;
`;

const FollowCardWrapper = styled.div`
  margin-bottom: 16px;
`;
