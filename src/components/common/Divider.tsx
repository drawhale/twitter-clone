import styled from "styled-components";

import type { FC } from "react";
import { flexColumnBox } from "styles";

const Divider: FC = () => {
  return <Line />;
};

export default Divider;

const Line = styled.div`
  ${flexColumnBox};
  margin: 4px 0;
  height: 1px;

  ${(props) => `
    background-color: ${props.theme.borderColor};
  `};
`;
