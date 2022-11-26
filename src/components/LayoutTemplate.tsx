import styled from "styled-components";
import { flexColumnBox } from "styles";

import type { FC, ReactNode } from "react";

type Props = {
  headerComponent: ReactNode;
  mainComponent: ReactNode;
};

const LayoutTemplate: FC<Props> = ({ headerComponent, mainComponent }) => {
  return (
    <Wrapper>
      <StyledHeader>{headerComponent}</StyledHeader>
      <StyledMain>{mainComponent}</StyledMain>
    </Wrapper>
  );
};

export default LayoutTemplate;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: stretch;

  ${(props) => `
    color: ${props.theme.textColor};
    background-color: ${props.theme.backgroundColor}
  `}
`;

const StyledHeader = styled.header`
  ${flexColumnBox};
  flex-grow: 1;
  align-items: flex-end;
`;

const StyledMain = styled.main`
  ${flexColumnBox};
  flex-grow: 1;
  flex-shrink: 1;
  align-items: flex-start;
`;
