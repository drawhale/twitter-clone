import styled from "styled-components";
import { flexColumnBox } from "styles";

import type { FC } from "react";

const TweetList: FC = () => {
  return (
    <Wrapper>
      <div>List</div>
    </Wrapper>
  );
};

export default TweetList;

const Wrapper = styled.div`
  ${flexColumnBox};
`;