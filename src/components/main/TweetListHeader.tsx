import styled from "styled-components";
import { flexColumnBox, flexRowBox, textEllipsis } from "styles";
import IconButton from "components/common/IconButton";
import StarIcon from "components/common/icons/StarIcon";

import type { FC } from "react";

const TweetListHeader: FC = () => {
  return (
    <StickyWrapper>
      <BackdropWrapper>
        <RowWrapper>
          <Title>홈</Title>
          <IconButtonWrapper>
            <IconButton icon={<StarIcon />} />
          </IconButtonWrapper>
        </RowWrapper>
      </BackdropWrapper>
    </StickyWrapper>
  );
};

export default TweetListHeader;

const StickyWrapper = styled.div`
  ${flexColumnBox};
  z-index: 3;
  position: sticky;
  top: -0.5px;
`;

const BackdropWrapper = styled.div`
  ${flexColumnBox};
  z-index: 2;
  height: 53px;
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(12px);
`;

const RowWrapper = styled.div`
  ${flexRowBox};
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  padding: 0 16px;
`;

const Title = styled.h2`
  ${flexRowBox};
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: flex-start;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  ${textEllipsis};

  ${(props) => `
  color: ${props.theme.textColor}
`};
`;

const IconButtonWrapper = styled.div`
  ${flexColumnBox};
  justify-content: center;
  align-items: flex-end;
  align-self: stretch;
  min-width: 56px;
  min-height: 32px;

  > div {
    min-width: 36px;
    min-height: 36px;
    margin-right: calc(-9px);
  }
`;
