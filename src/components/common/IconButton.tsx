import styled from "styled-components";
import { flexColumnBox, flexRowBox, getRGBA } from "styles";

import type { FC, ReactElement, SVGProps, MouseEventHandler } from "react";

type Props = {
  colorTheme?: "default" | "blue" | "green" | "red";
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  text?: string;
  onClick?: MouseEventHandler;
};

const IconButton: FC<Props> = ({
  colorTheme = "default",
  icon,
  text,
  onClick,
}) => {
  return (
    <Wrapper $colorTheme={colorTheme}>
      <IconBackgroundWrapper role="button" onClick={onClick}>
        <IconWrapper>{icon}</IconWrapper>
      </IconBackgroundWrapper>
      {text && <Text>{text}</Text>}
    </Wrapper>
  );
};

export default IconButton;

const IconBackgroundWrapper = styled.div`
  ${flexColumnBox};
  max-width: 100%;
  padding: 7px;
  align-items: center;
  border-radius: 9999px;
  color: inherit;
  text-decoration: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  user-select: none;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0);
`;

const IconWrapper = styled.div`
  ${flexRowBox};
  flex-grow: 1;
  justify-content: center;
  align-items: center;

  svg {
    max-width: 20px;
    max-height: 20px;
    width: 1.25em;
    height: 1.25em;
    fill: currentColor;
  }
`;

const Text = styled.span`
  margin-left: -8px;
  padding: 0 12px;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: inherit;
`;

const Wrapper = styled.div<{ $colorTheme: string }>`
  ${flexRowBox};
  align-items: center;

  ${(props) => `
    color: ${props.theme.iconButtonTextColor[props.$colorTheme]};

    &:hover {
      ${IconBackgroundWrapper} {
        color: ${props.theme.iconButtonHoverTextColor[props.$colorTheme]};
        background-color: ${getRGBA(
          props.theme.iconButtonHoverTextColor[props.$colorTheme],
          0.1
        )};
      }
      ${Text} {
        color: ${props.theme.iconButtonHoverTextColor[props.$colorTheme]};
      }
    }
  `}
`;
