import styled from "styled-components";
import { flexColumnBox } from "styles";

import type { FC } from "react";

const Header: FC = () => {
  return (
    <Wrapper>
      <StyledNav>
        <div>Menu 1</div>
        <div>Menu 2</div>
        <div>Menu 3</div>
      </StyledNav>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 275px;
  ${flexColumnBox};
`;

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
`;
