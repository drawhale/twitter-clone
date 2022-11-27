import { Fragment } from "react";
import styled from "styled-components";
import { flexRowBox } from "styles";
import HashTag from "components/main/HashTag";

import type { FC } from "react";

type Props = {
  data: string[];
};

const HashTagList: FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      {data.map((tag) => (
        <Fragment key={tag}>
          <HashTag href="/#">{tag}</HashTag>
          <Empty> </Empty>
        </Fragment>
      ))}
    </Wrapper>
  );
};

export default HashTagList;

const Wrapper = styled.div`
  ${flexRowBox};
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Empty = styled.span`
  white-space: pre-wrap;
`;
