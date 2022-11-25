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
`;

const StyledHeader = styled.header`
  flex-grow: 1;

  ${flexColumnBox};
  align-items: flex-end;
`;

const StyledMain = styled.main`
  flex-grow: 1;
  flex-shrink: 1;

  ${flexColumnBox};
  align-items: flex-start;
`;
