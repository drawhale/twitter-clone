import styled from "styled-components";
import { flexColumnBox, flexRowBox } from "styles";

import type { FC, MouseEventHandler, ReactNode } from "react";

type Props = {
  height?: number;
  isDisabled?: boolean;
  onClick?: MouseEventHandler;
  children: ReactNode;
};

const Button: FC<Props> = ({
  height = 36,
  isDisabled = false,
  onClick,
  children,
}) => {
  return (
    <StyledDiv
      role="button"
      $height={height}
      $isDisabled={isDisabled}
      onClick={onClick}
    >
      <Wrapper>{children}</Wrapper>
    </StyledDiv>
  );
};

export default Button;

type StyleDivProps = {
  $height: number;
  $isDisabled: boolean;
};

const StyledDiv = styled.div<StyleDivProps>`
  ${flexColumnBox};
  min-width: ${(props) => props.$height}px;
  min-height: ${(props) => props.$height}px;
  padding: 0 16px;
  outline-tyle: none;
  text-decoration: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  user-select: none;
  cursor: pointer;
  border-radius: 9999px;
  box-shadow: rgb(0 0 0 / 8%) 0px 8px 28px;
  border: 1px solid rgba(0, 0, 0, 0);

  ${(props) => `
    color: ${props.theme.buttonTextColor};
    background-color: ${props.theme.buttonBackgroundColor};

    &:hover {
      background-color: ${props.theme.buttonHoverBackgroundColor};
    }
  `}

  ${(props) => props.$isDisabled && `opacity: 0.5;`}
`;

const Wrapper = styled.div`
  ${flexRowBox};
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: inherit;
`;
