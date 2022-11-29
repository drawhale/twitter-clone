import styled from "styled-components";
import { flexColumnBox } from "styles";
import breakpoint from "styles/breakpoint";
import LogoLinkButton from "components/common/LogoLinkButton";
import IconLinkButton from "components/common/IconLinkButton";
import TweetPostButton from "./header/TweetPostButton";
import AccountInfoButton from "./header/AccountInfoButton";
import useWindowSize from "hooks/useWindowSize";

import HomeIcon from "components/common/icons/HomeIcon";
import SharpIcon from "components/common/icons/SharpIcon";
import NotificationIcon from "components/common/icons/NotificationIcon";
import LetterIcon from "components/common/icons/LetterIcon";
import BookmarkIcon from "components/common/icons/BookmarkIcon";
import ListIcon from "components/common/icons/ListIcon";
import ProfileIcon from "components/common/icons/ProfileIcon";
import MoreIcon from "components/common/icons/MoreIcon";

import type { FC } from "react";

const LINK_LIST = [
  { text: "홈", icon: <HomeIcon /> },
  { text: "탐색하기", icon: <SharpIcon /> },
  { text: "일림", icon: <NotificationIcon /> },
  { text: "쪽지", icon: <LetterIcon /> },
  { text: "북마크", icon: <BookmarkIcon /> },
  { text: "리스트", icon: <ListIcon /> },
  { text: "프로필", icon: <ProfileIcon /> },
  { text: "더 보기", icon: <MoreIcon /> },
];

const Header: FC = () => {
  const windowSize = useWindowSize();

  const shouldRenderLinkText = windowSize.width > breakpoint.desktopLarge;

  return (
    <Wrapper>
      <FixedWrapper>
        <ColumnWrapper>
          <NavWrapper>
            <StyledH1>
              <LogoLinkButton href="/#" />
            </StyledH1>
            <StyledNav>
              {LINK_LIST.map((link, index) => (
                <IconLinkButton
                  key={index}
                  href="/#"
                  icon={link.icon}
                  text={shouldRenderLinkText ? link.text : undefined}
                />
              ))}
            </StyledNav>
            <ButtonWrapper>
              <TweetPostButton />
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

  @media screen and (max-width: ${breakpoint.desktopLarge}px) {
    width: 88px;
  }
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

  @media screen and (max-width: ${breakpoint.desktopLarge}px) {
    width: 88px;
  }
`;

const NavWrapper = styled.div`
  ${flexColumnBox};
  align-items: flex-start;

  @media screen and (max-width: ${breakpoint.desktopLarge}px) {
    align-items: center;
  }
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
  margin: 2px 0 4px;

  @media screen and (max-width: ${breakpoint.desktopLarge}px) {
    align-items: center;
  }
`;

const ButtonWrapper = styled.div`
  ${flexColumnBox};
  width: 90%;
  margin: 16px 0;

  @media screen and (max-width: ${breakpoint.desktopLarge}px) {
    align-items: center;
  }
`;
