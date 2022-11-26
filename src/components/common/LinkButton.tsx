import styled from "styled-components";
import { flexColumnBox, flexRowBox } from "styles";

import type { FC, ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

const LinkButton: FC<Props> = ({ href, children }) => {
  return (
    <StyledA href={href}>
      <Wrapper>{children}</Wrapper>
    </StyledA>
  );
};

export default LinkButton;

const StyledA = styled.a`
  ${flexColumnBox};
  min-width: 52px;
  min-height: 52px;
  outline-tyle: none;
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

const Wrapper = styled.div`
  ${flexRowBox};
  flex-grow: 1;
  padding: 0 32px;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 17px;
  color: inherit;
`;
