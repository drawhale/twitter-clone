import styled from "styled-components";
import { flexColumnBox, flexRowBox } from "styles";

import type { FC, MouseEventHandler, ReactElement, SVGProps } from "react";

type Props = {
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  onClick?: MouseEventHandler;
};

const IconButton: FC<Props> = ({ icon, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <IconWrapper>{icon}</IconWrapper>
    </Wrapper>
  );
};

export default IconButton;

const Wrapper = styled.div`
  ${flexColumnBox};
  max-width: 100%;
  align-items: center;
  border-radius: 9999px;
  color: inherit;
  text-decoration: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.iconButtonHoverColor};
  }
`;

const IconWrapper = styled.div`
  ${flexRowBox};
  flex-grow: 1;
  justify-content: center;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme.iconColor};
    fill: currentColor;
  }
`;
