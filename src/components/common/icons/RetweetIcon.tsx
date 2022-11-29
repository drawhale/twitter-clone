import type { FC, SVGProps } from "react";

const RetweetIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <g>
        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
      </g>
    </svg>
  );
};

export default RetweetIcon;
