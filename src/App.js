//React and Hooks
import React, {useState,useContext} from 'react'

//Styles
import { ThemeProvider } from "styled-components";
import { GlobalStyles, MainContainer } from "./components/GlobalStyles";

//Components
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/Home";
import Overllay from './components/Overlay';

//Contexts
import {GlobalContext} from './context/GlobalContext';

function App() {

  const {theme} = useContext(GlobalContext);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles/>
        {/*<Overllay></Overllay*/}
        <SideBar/>
        <MainContainer>
          <Home/>
        </MainContainer>
      </>
    </ThemeProvider>
  );
  
}

export default App;
