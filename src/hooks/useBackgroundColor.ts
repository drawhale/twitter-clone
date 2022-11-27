import { useEffect } from "react";

/** 전달된 color 로 body 태그의 배경색을 설정 */
const useBackgroundColor = (backgroundColor: string) => {
  useEffect(() => {
    document.body.style.cssText = `background-color: ${backgroundColor}`;
  }, [backgroundColor]);
};

export default useBackgroundColor;
