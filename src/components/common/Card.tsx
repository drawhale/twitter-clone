import styled from "styled-components";
import { flexColumnBox, flexRowBox } from "styles";

import type { FC, ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const Card: FC<Props> = ({ title, children }) => {
  return (
    <StyledSection>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </StyledSection>
  );
};

export default Card;

const StyledSection = styled.section`
  ${flexColumnBox};
  flex-grow: 1;
  border-radius: 16px;

  ${(props) => `
    background-color: ${props.theme.cardBackgroundColor};
    border: 1px solid ${props.theme.cardBackgroundColor};
  `}
`;

const Title = styled.h2`
  ${flexRowBox};
  padding: 12px 16px;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
`;

const Content = styled.h2`
  ${flexColumnBox};
  flex-grow: 1;
`;
