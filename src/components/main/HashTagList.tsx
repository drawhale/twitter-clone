import { Fragment } from "react";
import styled from "styled-components";
import { flexRowBox } from "styles";
import HashTag from "components/main/HashTag";

import type { FC } from "react";
import type { ListItem } from "hooks/useTweetList";

type Props = Pick<ListItem, "hashtags">;

const HashTagList: FC<Props> = ({ hashtags }) => {
  return (
    <Wrapper>
      {hashtags.map((tag, index) => (
        <Fragment key={tag}>
          {index > 0 && <Empty> </Empty>}
          <HashTag href="/#">#{tag}</HashTag>
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
