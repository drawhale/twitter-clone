import { useEffect, useState } from "react";
import styled from "styled-components";
import { flexColumnBox, flexRowBox } from "styles";

import type { FC } from "react";
import type { ListItem } from "hooks/useTweetList";
import { chunk } from "utils/data";

type Props = Pick<ListItem, "media">;

type ImageSize = {
  width: number;
  height: number;
};

const getImageSize = (url: string): Promise<ImageSize> => {
  return new Promise((resolver) => {
    const image = new Image();
    image.src = url;
    image.onload = (e) => {
      resolver({ width: image.width, height: image.height });
    };
  });
};

const COLUMN_COUNT = 2;

const MediaPhoto: FC<Props> = ({ media }) => {
  const [wrapperRatio, setWrapperRatio] = useState(100);
  const photos = media.filter((m) => m.type === "photo");

  useEffect(() => {
    const resizeImageRatio = async () => {
      let width = 0,
        height = 0;

      for (let index = 0; index < media.length; index++) {
        const imageSize = await getImageSize(media[index].media_url);
        if (index < COLUMN_COUNT) width += imageSize.width;
        if (index % COLUMN_COUNT === 0) height += imageSize.height;
      }

      setWrapperRatio((height / width) * 100);
    };
    resizeImageRatio();
  }, [media]);

  const chunkPhotos = chunk(photos, COLUMN_COUNT);

  return (
    <RatioWrapper $ratio={wrapperRatio}>
      <LayoutWrapper>
        <Wrapper>
          {chunkPhotos.map((photos, rowIndex) => (
            <RowWrapper key={rowIndex}>
              {photos.map((photo, colIndex) => (
                <ImageWrapper key={colIndex}>
                  <StyledImg src={photo.media_url} alt="" />
                </ImageWrapper>
              ))}
            </RowWrapper>
          ))}
        </Wrapper>
      </LayoutWrapper>
    </RatioWrapper>
  );
};

export default MediaPhoto;

const RatioWrapper = styled.div<{ $ratio: number }>`
  ${flexColumnBox};
  width: 100%;
  padding-bottom: ${(props) => props.$ratio}%;
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
  ${flexColumnBox};
  width: 100%;
  height: 100%;
`;

const RowWrapper = styled.div`
  ${flexRowBox};
  flex-grow: 1;
  height: 100%;

  &:not(:first-child) {
    margin-top: 2px;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;

  &:not(:first-child) {
    margin-left: 2px;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
