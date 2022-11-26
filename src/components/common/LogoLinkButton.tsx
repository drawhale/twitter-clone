import styled from "styled-components";
import { flexColumnBox, flexRowBox } from "styles";
import TwitterIcon from "components/common/icons/TwitterIcon";

import type { FC } from "react";

const LogoLinkButton: FC = () => {
  return (
    <StyledA>
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
`;

const Wrapper = styled.div`
  ${flexRowBox};
  flex-grow: 1;
  align-items: center;
  border-radius: 9999px;

  svg {
    width: 50px;
    height: 2rem;
    fill: black;
  }
`;
