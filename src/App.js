import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import useTheme from "hooks/useTheme";
import MainPage from "pages/MainPage";

function App() {
  const selectedTheme = useTheme();

  return (
    <ThemeProvider theme={theme[selectedTheme]}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
