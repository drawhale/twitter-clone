import styled from "styled-components";
import { flexColumnBox, flexRowBox } from "styles";

import type { FC, MouseEventHandler, ReactNode } from "react";

type Props = {
  onClick?: MouseEventHandler;
  children: ReactNode;
};

const FollowButton: FC<Props> = ({ onClick, children }) => {
  return (
    <StyledDiv role="button" onClick={onClick}>
      <Wrapper>{children}</Wrapper>
    </StyledDiv>
  );
};

export default FollowButton;

const StyledDiv = styled.div`
  ${flexColumnBox};
  min-width: 32px;
  min-height: 32px;
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
    color: ${props.theme.subButtonTextColor};
    background-color: ${props.theme.subButtonBackgroundColor};

    &:hover {
      background-color: ${props.theme.subButtonHoverBackgroundColor};
    }
  `}
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
