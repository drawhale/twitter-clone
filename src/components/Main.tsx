import styled from "styled-components";
import { flexColumnBox, flexRowBox } from "styles";
import TweetListHeader from "./main/TweetListHeader";
import TweetList from "components/main/TweetList";

import type { FC } from "react";

const Main: FC = () => {
  return (
    <Wrapper>
      <SplitWrapper>
        <LeftWrapper>
          <TweetListHeader />
          <TweetList />
        </LeftWrapper>
        <RightWrapper>side</RightWrapper>
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
  width: 350px;
  margin-right: 10px;
`;
