import styled from "styled-components";
import { flexColumnBox, flexRowBox, textEllipsis } from "styles";
import EllipsisIcon from "components/common/icons/EllipsisIcon";

import type { FC } from "react";

type Props = {
  onClick?: () => void;
};

const AccountInfoButton: FC<Props> = ({ onClick }) => {
  const userName = "User Name";
  const userId = "@userid";

  return (
    <StyledButton aria-label="계정 메뉴" role="button" onClick={onClick}>
      <AvatarImage />
      <InfoWrapper>
        <ColumnWrapper>
          <UserName>{userName}</UserName>
          <UserId>{userId}</UserId>
        </ColumnWrapper>
      </InfoWrapper>
      <MoreIconWrapper>
        <EllipsisIcon />
      </MoreIconWrapper>
    </StyledButton>
  );
};

export default AccountInfoButton;

const StyledButton = styled.div`
  ${flexRowBox};
  align-items: center;
  padding: 12px;
  border-radius: 9999px;
  color: inherit;
  text-decoration: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.linkButtonHoverColor};
  }
`;

const AvatarImage = styled.div`
  ${flexColumnBox};
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  overflow: hidden;
  background-image: url("https://abs.twimg.com/sticky/default_profile_images/default_profile_x96.png");
  background-size: cover;
  backrround-repeat: no-repeat;
  background-position: center center;
`;

const InfoWrapper = styled.div`
  ${flexColumnBox};
  flex-shrink: 1;
`;

const ColumnWrapper = styled.div`
  ${flexColumnBox};
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0 12px;
  max-width: 100%;
  outline-style: none;
`;

const MoreIconWrapper = styled.div`
  ${flexColumnBox};
  align-items: flex-end;
  flex-grow: 1;

  svg {
    height: 1.25em;
    color: ${(props) => props.theme.textColor};
    fill: currentColor;
  }
`;

const UserName = styled.span`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  word-wrap: break-word;
  white-space: nowrap;

  ${(props) => `
    color: ${props.theme.textColor}
  `};
`;

const UserId = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  word-wrap: break-word;
  min-width: 0px;
  ${textEllipsis};

  ${(props) => `
    color: ${props.theme.subTextColor}
  `};
`;
