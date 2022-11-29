import styled from "styled-components";
import { flexColumnBox, flexRowBox } from "styles";
import IconButton from "components/common/IconButton";
import EllipsisIcon from "components/common/icons/EllipsisIcon";
import { elapsedTime } from "utils/date";
import FullText from "components/main/FullText";
import HashTagList from "components/main/HashTagList";
import Media from "components/main/Media";

import type { FC } from "react";
import type { ListItem } from "hooks/useTweetList";

type Props = {
  data: ListItem;
};

const TweetListItem: FC<Props> = ({ data }) => {
  const { user, created_at, full_text, hashtags = [], media } = data;
  const { name, id, profile_image_url_https } = user;

  return (
    <Wrapper>
      <StyledArticle>
        <ImageWrapper>
          <img src={profile_image_url_https} alt={name} />
        </ImageWrapper>
        <ColumnWrapper>
          <RowWrapper>
            <Name>{name}</Name>
            <Id>@{id}</Id>
            <Separater>·</Separater>
            <Time>{elapsedTime(created_at)}</Time>
            <IconWrapper>
              <IconButton icon={<EllipsisIcon />} />
            </IconWrapper>
          </RowWrapper>
          <FullText full_text={full_text} hashtags={hashtags} />
          <HashTagList hashtags={hashtags} />
          <MediaWrapper>
            <Media media={media} />
          </MediaWrapper>
        </ColumnWrapper>
      </StyledArticle>
    </Wrapper>
  );
};

export default TweetListItem;

const Wrapper = styled.div`
  ${flexColumnBox};

  ${(props) => `
    border-bottom: 1px solid ${props.theme.borderColor};
  `};
`;

const StyledArticle = styled.div`
  ${flexRowBox};
  padding: 12px 16px;
  outline-style: none;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  min-width: 48px;
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

const RowWrapper = styled.div`
  ${flexRowBox};
  align-items: center;
  margin-bottom: 2px;
`;

const Name = styled.div`
  ${flexRowBox};
  align-items: center;
  margin-top: 2px;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  cursor: pointer;

  ${(props) => `
    color: ${props.theme.textColor};
  `}
`;

const Separater = styled.div`
  padding: 0 4px;
`;

const Id = styled.div`
  margin-left: 4px;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  cursor: pointer;

  ${(props) => `
    color: ${props.theme.subTextColor};
  `}
`;

const Time = styled.div`
  padding: 0;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  cursor: pointer;

  ${(props) => `
    color: ${props.theme.subTextColor};
  `}
`;

const IconWrapper = styled.div`
  ${flexColumnBox};
  position: absolute;
  top: -7px;
  right: -7px;

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

const MediaWrapper = styled.div`
  ${flexColumnBox};
  margin-top: 12px;
`;
