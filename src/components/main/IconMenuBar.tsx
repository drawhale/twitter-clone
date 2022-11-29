import styled from "styled-components";
import { flexRowBox } from "styles";
import IconButton from "components/common/IconButton";
import { getNumberStringWithComma } from "utils/format";

import MessageIcon from "components/common/icons/MessageIcon";
import RetweetIcon from "components/common/icons/RetweetIcon";
import HeartIcon from "components/common/icons/HeartIcon";
import ShareIcon from "components/common/icons/ShareIcon";

import type { FC } from "react";
import type { ListItem } from "hooks/useTweetList";

type Props = Pick<ListItem, "reply_count" | "retweet_count" | "favorite_count">;

const IconMenuBar: FC<Props> = ({
  reply_count,
  retweet_count,
  favorite_count,
}) => {
  return (
    <Wrapper>
      <IconButton
        colorTheme="blue"
        icon={<MessageIcon />}
        text={getNumberStringWithComma(reply_count)}
      />
      <IconButton
        colorTheme="green"
        icon={<RetweetIcon />}
        text={getNumberStringWithComma(retweet_count)}
      />
      <IconButton
        colorTheme="red"
        icon={<HeartIcon />}
        text={getNumberStringWithComma(favorite_count)}
      />
      <IconButton colorTheme="blue" icon={<ShareIcon />} />
    </Wrapper>
  );
};

export default IconMenuBar;

const Wrapper = styled.div`
  ${flexRowBox};
  justify-content: space-between;
  align-items: center;
  max-width: 425px;
  margin-top: 12px;
`;
