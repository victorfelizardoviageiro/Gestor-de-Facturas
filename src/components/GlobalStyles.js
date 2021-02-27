import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: roboto;
    }
`

export const MainContainer=styled.div`
    padding-left: 90px;
    width: 100%;
    height: 100vh;
    background: red;

`