import styled from "styled-components";
import { flexColumnBox } from "styles";
import IconLinkButton from "./common/IconLinkButton";
import LogoLinkButton from "./common/LogoLinkButton";
import TwitterIcon from "components/common/icons/TwitterIcon";

import type { FC } from "react";

const Header: FC = () => {
  return (
    <Wrapper>
      <FixedWrapper>
        <ColumnWrapper>
          <NavWrapper>
            <StyledH1>
              <LogoLinkButton />
            </StyledH1>
            <StyledNav>
              <IconLinkButton icon={<TwitterIcon />} text="홈" />
            </StyledNav>
          </NavWrapper>
          <AccountWrapper>
            <div>Name</div>
          </AccountWrapper>
        </ColumnWrapper>
      </FixedWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  ${flexColumnBox};
  width: 275px;
  height: 100%;
  padding: 0 12px;
`;

const FixedWrapper = styled.div`
  height: 100%;
  position: fixed;
  top: 0;
`;

const ColumnWrapper = styled.div`
  ${flexColumnBox};
  justify-content: space-between;
  height: 100%;
  overflow-y: auto;
`;

const NavWrapper = styled.div`
  ${flexColumnBox};
  align-items: flex-start;
`;

const AccountWrapper = styled.div`
  ${flexColumnBox};
`;

const StyledH1 = styled.h1`
  ${flexColumnBox};
  min-width: 32px;
  padding-top: 2px;
  padding-bottom: 2px;
`;

const StyledNav = styled.nav``;
