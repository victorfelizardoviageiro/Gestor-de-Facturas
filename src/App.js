import { ThemeProvider } from "styled-components";
import { GlobalStyles, MainContainer } from "./components/GlobalStyles";
import SideBar from "./components/SideBar/SideBar";
import { darkTheme,lightTheme } from "./themes";

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <GlobalStyles/>
        <SideBar/>
        <MainContainer>
          <h1>Area do Conteudo</h1>
        </MainContainer>
      </>
    </ThemeProvider>
  );
  
}

export default App;
