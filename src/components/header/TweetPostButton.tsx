import { memo } from "react";
import styled from "styled-components";
import { flexColumnBox, flexRowBox } from "styles";
import useWindowSize from "hooks/useWindowSize";
import breakpoint from "styles/breakpoint";

import type { FC } from "react";
import WriteIcon from "components/common/icons/WriteIcon";

const TweetPostButton: FC = () => {
  const windowSize = useWindowSize();

  const shouldRenderText = windowSize.width > breakpoint.desktopLarge;

  return (
    <StyledA href="/#">
      {shouldRenderText ? (
        <TextWrapper>트윗하기</TextWrapper>
      ) : (
        <IconWrapper>
          <WriteIcon />
        </IconWrapper>
      )}
    </StyledA>
  );
};

export default memo(TweetPostButton);

const StyledA = styled.a`
  ${flexColumnBox};
  min-width: 52px;
  min-height: 52px;
  outline-tyle: none;
  text-decoration: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  user-select: none;
  cursor: pointer;
  border-radius: 9999px;
  box-shadow: rgb(0 0 0 / 8%) 0px 8px 28px;

  ${(props) => `
    color: ${props.theme.buttonTextColor};
    background-color: ${props.theme.buttonBackgroundColor};

    &:hover {
      background-color: ${props.theme.buttonHoverBackgroundColor};
    }
  `}
`;

const TextWrapper = styled.div`
  ${flexRowBox};
  flex-grow: 1;
  padding: 0 32px;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 17px;
  white-space: nowrap;
  color: inherit;
  overflow: hidden;
`;

const IconWrapper = styled.div`
  ${flexRowBox};
  flex-grow: 1;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
`;
