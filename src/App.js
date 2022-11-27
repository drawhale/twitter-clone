import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import useThemeType from "hooks/useThemeType";
import MainPage from "pages/MainPage";
import useBackgroundColor from "hooks/useBackgroundColor";

function App() {
  const selectedThemeType = useThemeType();
  const selectedTheme = theme[selectedThemeType];

  useBackgroundColor(selectedTheme.backgroundColor);

  return (
    <ThemeProvider theme={selectedTheme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
