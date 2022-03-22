import Note from "./components/note-create";
import { GlobalStyle } from "./box/global-style";
import { ThemeProvider } from 'styled-components'
import { baseTheme } from "./box/theme";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      <Note />
    </ThemeProvider>
  );
}

export default App;
