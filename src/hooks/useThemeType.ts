import { useEffect, useState } from "react";

export type ThemeType = "light" | "dark";

/** 시스템 설정에 따라 라이트/다크 모드 반환
 * @returns "light" | "dark"
 */
const useThemeType = () => {
  const darkModePreference =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
  const initTheme = darkModePreference.matches ? "dark" : "light";
  const [theme, setTheme] = useState<ThemeType>(initTheme);

  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    darkModePreference.addEventListener("change", handleChange);

    return () => {
      darkModePreference.removeEventListener("change", handleChange);
    };
  }, [darkModePreference]);

  return theme;
};

export default useThemeType;
