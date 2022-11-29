import styled from "styled-components";
import { flexColumnBox, flexRowBox } from "styles";
import TwitterIcon from "components/common/icons/TwitterIcon";

import type { FC } from "react";

type Props = {
  href: string;
};

const LogoLinkButton: FC<Props> = ({ href }) => {
  return (
    <StyledA href={href}>
      <Wrapper>
        <TwitterIcon />
      </Wrapper>
    </StyledA>
  );
};

export default LogoLinkButton;

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

  &:hover {
    background-color: ${(props) => props.theme.logoHoverColor};
  }
`;

const Wrapper = styled.div`
  ${flexRowBox};
  flex-grow: 1;
  align-items: center;

  svg {
    width: 50px;
    height: 2rem;
    color: ${(props) => props.theme.logoColor};
    fill: currentColor;
  }
`;
