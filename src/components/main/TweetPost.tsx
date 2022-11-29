import styled from "styled-components";
import { flexColumnBox, flexRowBox } from "styles";
import IconButton from "components/common/IconButton";
import Button from "components/common/Button";

import ImageIcon from "components/common/icons/ImageIcon";
import GifIcon from "components/common/icons/GifIcon";
import VoteIcon from "components/common/icons/VoteIcon";
import EmoticonIcon from "components/common/icons/EmoticonIcon";
import CalendarIcon from "components/common/icons/CalendarIcon";
import MapIcon from "components/common/icons/MapIcon";

import type { FC } from "react";

const TweetPost: FC = () => {
  return (
    <Wrapper>
      <RowWrapper>
        <AvatarWrapper>
          <AvatarImage />
        </AvatarWrapper>
        <TextInputWrapper>
          <TextInput placeholder="무슨 일이 일어나고 있나요?" />
          <ControlWrapper>
            <MenuWrapper>
              <IconButton colorTheme="blue" icon={<ImageIcon />} />
              <IconButton colorTheme="blue" icon={<GifIcon />} />
              <IconButton colorTheme="blue" icon={<VoteIcon />} />
              <IconButton colorTheme="blue" icon={<EmoticonIcon />} />
              <IconButton colorTheme="blue" icon={<CalendarIcon />} />
              <IconButton colorTheme="blue" icon={<MapIcon />} />
            </MenuWrapper>
            <ButtonWrapper>
              <Button isDisabled={true}>트윗하기</Button>
            </ButtonWrapper>
          </ControlWrapper>
        </TextInputWrapper>
      </RowWrapper>
    </Wrapper>
  );
};

export default TweetPost;

const Wrapper = styled.div`
  ${flexColumnBox};
  z-index: 1;
  padding: 4px 16px 8px;

  ${(props) => `
    background-color: ${props.theme.backgroundColor};
  `};
`;

const RowWrapper = styled.div`
  ${flexRowBox};
`;

const AvatarWrapper = styled.div`
  margin-right: 12px;
  padding-top: 3px;
`;

const AvatarImage = styled.div`
  ${flexColumnBox};
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  overflow: hidden;
  background-image: url("https://abs.twimg.com/sticky/default_profile_images/default_profile_x96.png");
  background-size: cover;
  backrround-repeat: no-repeat;
  background-position: center center;
`;

const TextInputWrapper = styled.div`
  ${flexColumnBox};
  flex-grow: 1;
  padding-top: 2px;
`;

const TextInput = styled.input`
  all: unset;
  flex-grow: 1;
  height: 52px;
  background-color: transparent;
  font-weight: 400px;
  font-size: 20px;
  line-height: 24px;

  ${(props) => `
    border: 2px solid ${props.theme.backgroundColor};
  `};
`;

const ControlWrapper = styled.div`
  ${flexRowBox};
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  flex-wrap: wrap;
  margin: 0 2px;
`;

const MenuWrapper = styled.div`
  ${flexRowBox};
  margin-top: 13px;
  margin-left: -8px;

  > div {
    min-width: 36px;
    min-height: 36px;

    svg {
      color: ${(props) => props.theme.primaryColor};
      fill: currentColor;
    }
  }
`;

const ButtonWrapper = styled.div`
  ${flexRowBox};
  margin-top: 12px;
  margin-left: 12px;
`;
