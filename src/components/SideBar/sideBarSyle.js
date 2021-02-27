import styled from 'styled-components'

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: ${({theme})=>theme.color.componentbg};
    width: 90px;
    height: 100vh;
    position: fixed;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    top:0;
`
export const Logo = styled.div`
    margin-bottom: auto;
    background: ${({theme})=>theme.color.roxo};
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px; 
    width: 100%;
    height: 80px;
`
export const ThemeIcon = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    margin-bottom: 25px;
    >svg{
        color: ${({theme})=>theme.color.text2};
        cursor: pointer;
        font-size:1.15rem;
    }
`
export const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    border-top: 1px solid ${({theme})=>theme.color.text2};
    img{
        width: 40px;
        height: 40px;
        object-fit:cover;
        border-radius: 50%;
    }
`