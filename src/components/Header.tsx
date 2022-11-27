import styled from "styled-components";
import { flexColumnBox } from "styles";
import LogoLinkButton from "components/common/LogoLinkButton";
import IconLinkButton from "components/common/IconLinkButton";
import LinkButton from "components/common/LinkButton";
import AccountInfoButton from "./header/AccountInfoButton";

import HomeIcon from "components/common/icons/HomeIcon";
import SharpIcon from "components/common/icons/SharpIcon";
import NotificationIcon from "components/common/icons/NotificationIcon";
import MessageIcon from "components/common/icons/MessageIcon";
import BookmarkIcon from "components/common/icons/BookmarkIcon";
import ListIcon from "components/common/icons/ListIcon";
import ProfileIcon from "components/common/icons/ProfileIcon";
import MoreIcon from "components/common/icons/MoreIcon";

import type { FC } from "react";

const Header: FC = () => {
  return (
    <Wrapper>
      <FixedWrapper>
        <ColumnWrapper>
          <NavWrapper>
            <StyledH1>
              <LogoLinkButton href="#" />
            </StyledH1>
            <StyledNav>
              <IconLinkButton href="#" icon={<HomeIcon />} text="홈" />
              <IconLinkButton href="#" icon={<SharpIcon />} text="탐색하기" />
              <IconLinkButton
                href="#"
                icon={<NotificationIcon />}
                text="일림"
              />
              <IconLinkButton href="#" icon={<MessageIcon />} text="쪽지" />
              <IconLinkButton href="#" icon={<BookmarkIcon />} text="북마크" />
              <IconLinkButton href="#" icon={<ListIcon />} text="리스트" />
              <IconLinkButton href="#" icon={<ProfileIcon />} text="프로필" />
              <IconLinkButton href="#" icon={<MoreIcon />} text="더 보기" />
            </StyledNav>
            <ButtonWrapper>
              <LinkButton href="#">트윗하기</LinkButton>
            </ButtonWrapper>
          </NavWrapper>
          <AccountWrapper>
            <AccountInfoButton />
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
`;

const FixedWrapper = styled.div`
  height: 100%;
  position: fixed;
  top: 0;
`;

const ColumnWrapper = styled.div`
  ${flexColumnBox};
  justify-content: space-between;
  width: 275px;
  height: 100%;
  padding: 0 12px;
  overflow-y: auto;
`;

const NavWrapper = styled.div`
  ${flexColumnBox};
  align-items: flex-start;
`;

const AccountWrapper = styled.div`
  ${flexColumnBox};
  margin: 12px 0;
`;

const StyledH1 = styled.h1`
  ${flexColumnBox};
  min-width: 32px;
  padding-top: 2px;
  padding-bottom: 2px;
`;

const StyledNav = styled.nav`
  ${flexColumnBox};
  align-items: flex-start;
  width: 100%;
  margin: 2px 0 4px;
`;

const ButtonWrapper = styled.div`
  ${flexColumnBox};
  width: 90%;
  margin: 16px 0;
`;
