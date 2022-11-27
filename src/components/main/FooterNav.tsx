import styled from "styled-components";
import { flexColumnBox, flexRowBox } from "styles";
import EllipsisIcon from "components/common/icons/EllipsisIcon";

import type { FC } from "react";

const FooterNav: FC = () => {
  return (
    <Wrapper>
      <StyledNav>
        <a>이용약관</a>
        <a>개인정보 처리방침</a>
        <a>쿠키 정책</a>
        <a>접근성</a>
        <a>광고 정보</a>
        <a>
          더 보기
          <EllipsisIcon />
        </a>
        <div>© 2022 Twitter, Inc.</div>
      </StyledNav>
    </Wrapper>
  );
};

export default FooterNav;

const Wrapper = styled.div`
  ${flexColumnBox};
  margin-bottom: 16px;
`;

const StyledNav = styled.nav`
  ${flexRowBox};
  flex-wrap: wrap;
  padding: 0 16px;

  > * {
    margin: 2px 0;
    padding-right: 12px;
    font-weight: 400px;
    font-size: 13px;
    line-height: 16px;

    ${(props) => `
      color: ${props.theme.subTextColor};
    `}
  }

  > a {
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    svg {
      padding: 0 2px;
      height: 1em;
      vertical-align: text-bottom;
      fill: currentColor;
    }
  }
`;
