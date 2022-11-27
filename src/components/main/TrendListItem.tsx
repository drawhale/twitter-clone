import styled from "styled-components";
import { flexColumnBox } from "styles";
import IconButton from "components/common/IconButton";
import EllipsisIcon from "components/common/icons/EllipsisIcon";

import type { FC } from "react";
import type { TrendItem } from "api/trendRepository";

type Props = {
  data: TrendItem;
};

const TrendListItem: FC<Props> = ({ data }) => {
  const { title, description, tweet_count } = data;
  return (
    <Wrapper>
      <Description>{description}</Description>
      <Title>{title}</Title>
      <Count>{tweet_count.toLocaleString()} 트윗</Count>
      <IconWrapper>
        <IconButton icon={<EllipsisIcon />} />
      </IconWrapper>
    </Wrapper>
  );
};

export default TrendListItem;

const Wrapper = styled.div`
  ${flexColumnBox};
  padding: 12px 16px;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  cursor: pointer;

  &:hover {
    ${(props) => `
      background-color: ${props.theme.cardHoverBackgroundColor};
    `}
  }
`;

const Description = styled.div`
  font-size: 13px;
  line-height: 16px;

  ${(props) => `
    color: ${props.theme.subTextColor};
  `}
`;

const Title = styled.div`
  margin-top: 2px;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;

  ${(props) => `
    color: ${props.theme.textColor};
  `}
`;

const Count = styled.div`
  margin-top: 4px;
  font-size: 13px;
  line-height: 16px;

  ${(props) => `
    color: ${props.theme.subTextColor};
  `}
`;

const IconWrapper = styled.div`
  ${flexColumnBox};
  position: absolute;
  top: 6px;
  right: 8px;

  > div {
    padding: 6px;

    svg {
      min-height: 20px;

      ${(props) => `
        color: ${props.theme.subTextColor};
        fill: currentColor;
      `}
    }
  }
`;
