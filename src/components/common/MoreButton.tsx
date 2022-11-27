import styled from "styled-components";

import type { FC } from "react";
import { flexColumnBox } from "styles";

const MoreButton: FC = () => {
  return <StyledA href="">더 보기</StyledA>;
};

export default MoreButton;

const StyledA = styled.a`
  all: unset;
  ${flexColumnBox};
  padding: 16px;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  cursor: pointer;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: ${(props) => props.theme.buttonBackgroundColor};

  &:hover {
    ${(props) => `
      background-color: ${props.theme.cardHoverBackgroundColor};
    `}
  }
`;
