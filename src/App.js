import { ThemeProvider } from "styled-components";
import { GlobalStyles, MainContainer } from "./components/GlobalStyles";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home";
import { darkTheme,lightTheme } from "./themes";

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <GlobalStyles/>
        <SideBar/>
        <MainContainer>
          <Home/>
        </MainContainer>
      </>
    </ThemeProvider>
  );
  
}

export default App;
