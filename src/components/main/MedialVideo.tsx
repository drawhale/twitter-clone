import styled from "styled-components";
import { flexColumnBox } from "styles";

import type { FC } from "react";
import type { ListItem } from "hooks/useTweetList";

type Props = Pick<ListItem, "media">;

const MedialVideo: FC<Props> = ({ media }) => {
  const { media_url } = media.filter((m) => m.type === "video")[0];

  return (
    <RatioWrapper>
      <LayoutWrapper>
        <Wrapper>
          <StyledVideo
            preload="none"
            autoPlay
            playsInline
            controls
            muted
            src={media_url}
          />
        </Wrapper>
      </LayoutWrapper>
    </RatioWrapper>
  );
};

export default MedialVideo;

const RatioWrapper = styled.div`
  ${flexColumnBox};
  width: 100%;
  padding-bottom: 100%;
`;

const LayoutWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline-style: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  border-radius: 16px;
  overflow: hidden;

  ${(props) => `
    border: 1px solid ${props.theme.borderColor};
  `}
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
  overflow: hidden;
`;

const StyledVideo = styled.video`
  width:100%;
  height: 100%;
  position: absoulte:
  top: 0;
  left: 0;
`;
