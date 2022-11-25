import { css } from "styled-components";

export const flexColumnBox = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-basis: auto;
  flex-shirink: 0;

  box-sizing: border-box;
  margin: 0;
  padding: 0;

  position: relative;
  z-index: 0;
`;

export const flexRowBox = css`
  display: flex;
  align-items: stretch;
  flex-basis: auto;
  flex-shirink: 0;

  box-sizing: border-box;
  margin: 0;
  padding: 0;

  position: relative;
  z-index: 0;
`;
