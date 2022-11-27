import styled from "styled-components";

import type { FC, ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

const HashTag: FC<Props> = ({ href, children }) => {
  return <StyledA href={href}>#{children}</StyledA>;
};

export default HashTag;

const StyledA = styled.a`
  all: unset;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  white-space: pre-wrap;

  ${(props) => `
    color: ${props.theme.primaryColor};
  `}

  &:hover {
    text-decoration: underline;
  }
`;
