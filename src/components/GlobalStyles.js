import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        color: white;
        background: ${({theme})=>theme.color.appbg};
        font-family: 'Josefin Sans', sans-serif;
        font-size: 16px;
    }
`

export const MainContainer=styled.div`
    padding-left:90px;
    max-width: 100%;
    height: 100vh;

`

export const Container=styled.div`
    padding-top: 70px;
    max-width: 950px;
    height: 2000px;
    margin: auto;
`
//TIPOGRAFIA
export const texto = styled.p`
    font-size: 1rem;
`