import styled from "styled-components";
import { flexColumnBox, flexRowBox } from "styles";

import type { FC, ReactElement, ReactNode, SVGProps } from "react";

type Props = {
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  text: string;
};

const IconLinkButton: FC<Props> = ({ icon, text }) => {
  return (
    <StyledA>
      <Wrapper>
        <IconWrapper>{icon}</IconWrapper>
        <TextWrapper>{text}</TextWrapper>
      </Wrapper>
    </StyledA>
  );
};

export default IconLinkButton;

const StyledA = styled.a`
  ${flexColumnBox};
  min-width: 52px;
  min-height: 52px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  ${flexRowBox};
  max-width: 100%;
  padding: 12px;
  align-items: center;
  border-radius: 9999px;
`;

const IconWrapper = styled.div`
  svg {
    width: 1.75rem;
    height: 1.75rem;
    fill: black;
  }
`;

const TextWrapper = styled.span`
  margin: 0 16px 0 20px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: black; //rgb(231, 233, 234);
`;
