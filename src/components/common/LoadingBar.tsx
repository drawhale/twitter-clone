import styled from "styled-components";
import { flexRowBox, getRGBA } from "styles";

import type { FC } from "react";

const LoadingBar: FC = () => {
  return (
    <LoadingBarWarpper>
      <Loading />
    </LoadingBarWarpper>
  );
};

export default LoadingBar;

const LoadingBarWarpper = styled.div`
  ${flexRowBox};
  margin: 10px 0;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid ${(props) => getRGBA(props.theme.primaryColor, 0.2)};
  border-radius: 50%;
  border-top-color: ${(props) => props.theme.primaryColor};
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
