import styled from "styled-components";
import HashTag from "components/main/HashTag";

import type { FC } from "react";
import type { ListItem } from "hooks/useTweetList";

/**
 * 해시태그가 포함된 문자열을 태그가 포함된 JSX 형태로 변환
 * @param fullText 해시태그가 포함된 문자열
 * @param hashtags 구분할 해시태그 배열
 * @returns 일반 텍스트 Element 와 해시태그 Element 로 구분되어 구성된 JSX.Element 배열
 */
const parseTextToJSXList = (fullText: string, hashtags: string[]) => {
  const HASH_TAG_CHARACTER = "#";

  const isHashTag = (text: string) => text.startsWith(HASH_TAG_CHARACTER);

  const getResultsWithHashTag = (texts: string[], hashtag: string): string[] =>
    texts.reduce((acc, text) => {
      const formattedHashTag = `${HASH_TAG_CHARACTER}${hashtag}`;

      if (isHashTag(text) && hashtags.includes(text.substring(1))) {
        acc.push(text);
      } else {
        const splitedTexts = text.split(formattedHashTag);
        acc.push(
          ...splitedTexts.reduce((acc, splitedText, index) => {
            if (index > 0) {
              acc.push(formattedHashTag);
            }
            acc.push(splitedText);
            return acc;
          }, [] as string[])
        );
      }

      return acc;
    }, [] as string[]);

  return hashtags.reduce(getResultsWithHashTag, [fullText]).map((text, index) =>
    isHashTag(text) ? (
      <HashTag key={index} href="/#">
        {text}
      </HashTag>
    ) : (
      <Text key={index}>{text}</Text>
    )
  );
};

type Props = Pick<ListItem, "full_text" | "hashtags">;

const FullText: FC<Props> = ({ full_text, hashtags }) => {
  const jsxList = parseTextToJSXList(full_text, hashtags);

  return <div>{jsxList.map((jsx) => jsx)}</div>;
};

export default FullText;

const Text = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  white-space: pre-wrap;

  ${(props) => `
    color: ${props.theme.textColor};
  `};
`;
