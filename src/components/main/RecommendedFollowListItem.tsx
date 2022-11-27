import styled from "styled-components";
import { flexColumnBox, flexRowBox } from "styles";
import CheckIcon from "components/common/icons/CheckIcon";
import FollowButton from "components/main/FollowButton";

import type { FC } from "react";
import type { RecommendedFollowItem } from "api/followRepository";

type Props = {
  data: RecommendedFollowItem;
};

const RecommendedFollowListItem: FC<Props> = ({ data }) => {
  const { name, id, image_url } = data;
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={image_url} alt={name} />
      </ImageWrapper>
      <ColumnWrapper>
        <Name>
          {name} <CheckIcon />
        </Name>
        <Id>{id}</Id>
      </ColumnWrapper>
      <FollowButton>팔로우</FollowButton>
    </Wrapper>
  );
};

export default RecommendedFollowListItem;

const Wrapper = styled.div`
  ${flexRowBox};
  align-items: center;
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

const ImageWrapper = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 12px;
  border-radius: 9999px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ColumnWrapper = styled.div`
  ${flexColumnBox};
  flex-grow: 1;
`;

const Name = styled.div`
  ${flexRowBox};
  align-items: center;
  margin-top: 2px;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;

  ${(props) => `
    color: ${props.theme.textColor};
  `}

  svg {
    margin-left: 2px;
    min-width: 20px;
    min-height: 20px;
    height: 1.25em;

    ${(props) => `
      color: ${props.theme.iconColor};
      fill: currentColor;
    `}
  }
`;

const Id = styled.div`
  font-size: 13px;
  line-height: 16px;

  ${(props) => `
    color: ${props.theme.subTextColor};
  `}
`;
