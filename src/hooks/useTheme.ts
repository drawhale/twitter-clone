import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const useTheme = () => {
  const darkModePreference =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
  const initTheme = darkModePreference.matches ? "dark" : "light";
  const [theme, setTheme] = useState<Theme>(initTheme);

  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    darkModePreference.addEventListener("change", handleChange);

    return () => {
      darkModePreference.removeEventListener("change", handleChange);
    };
  }, []);

  return theme;
};

export default useTheme;
