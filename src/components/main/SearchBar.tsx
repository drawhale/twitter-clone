import styled from "styled-components";
import { flexColumnBox, flexRowBox } from "styles";
import breakpoint from "styles/breakpoint";
import SearchIcon from "components/common/icons/SearchIcon";

import type { FC } from "react";

const SearchBar: FC = () => {
  return (
    <FixedWrapper>
      <Wrapper>
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
        <TextInput placeholder="트위터 검색" />
      </Wrapper>
    </FixedWrapper>
  );
};

export default SearchBar;

const FixedWrapper = styled.div`
  ${flexRowBox};
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 350px;
  min-height: 32px;
  height: 53px;
  margin-bottom: 12px;

  ${(props) => `
    background-color: ${props.theme.backgroundColor};
  `}

  @media screen and (max-width: ${breakpoint.desktopMedium}px) {
    width: 290px;
  }
`;

const Wrapper = styled.div`
  ${flexRowBox};
  flex-grow: 1;
  flex-shrink: 1;
  height: 44px;
  border-radius: 9999px;
  border: 1px solid rgba(0, 0, 0, 0);

  ${(props) => `
    background-color: ${props.theme.searchBarBackgroundColor};
  `}
`;

const IconWrapper = styled.div`
  ${flexColumnBox};
  justify-content: center;
  padding-left: 12px;
  cursor: default;

  svg {
    min-width: 32px;
    max-width: 100%;
    height: 1.25em;

    ${(props) => `
      color: ${props.theme.searchBarIconColor};
      fill: currentColor;
    `}
  }
`;

const TextInput = styled.input`
  all: unset;
  flex-grow: 1;
  padding: 12px;
  font-weight: 400;
  font-size: 15px;
`;
