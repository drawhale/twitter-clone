import styled from "styled-components";
import { flexColumnBox, flexRowBox, textEllipsis } from "styles";

import type { FC, ReactElement, ReactNode, SVGProps } from "react";

type Props = {
  href: string;
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  text: string;
};

const IconLinkButton: FC<Props> = ({ href, icon, text }) => {
  return (
    <StyledA href={href}>
      <Wrapper>
        <IconWrapper>{icon}</IconWrapper>
        <TextWrapper>{text}</TextWrapper>
      </Wrapper>
    </StyledA>
  );
};

export default IconLinkButton;

const Wrapper = styled.div`
  ${flexRowBox};
  max-width: 100%;
  padding: 12px;
  align-items: center;
  border-radius: 9999px;
`;

const StyledA = styled.a`
  ${flexColumnBox};
  align-items: flex-start;
  width: 100%;
  padding: 4px 0;
  color: inherit;
  text-decoration: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  user-select: none;
  cursor: pointer;

  &:hover {
    ${Wrapper} {
      background-color: ${(props) => props.theme.linkButtonHoverColor};
    }
  }
`;

const IconWrapper = styled.div`
  ${flexRowBox};
  justify-content: center;
  align-items: center;

  svg {
    width: 1.75rem;
    height: 1.75rem;
    color: ${(props) => props.theme.iconColor};
    fill: currentColor;
  }
`;

const TextWrapper = styled.span`
  margin: 0 16px 0 20px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  ${textEllipsis};

  ${(props) => `
    color: ${props.theme.textColor}
  `};
`;
