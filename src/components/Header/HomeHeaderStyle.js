import styled from 'styled-components';


export const Header = styled.div`
    margin-bottom: 55px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Title = styled.div`
    margin-right: auto; 
    h1{
        margin-bottom:5px;
    }
`

export const Filter = styled.div`
    width: 170px;
    padding: 10px 5px;
    background: ${({theme})=>theme.color.componentbg};
    position: relative;
    display: flex;
    align-items:center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-right: 35px;
    p{
        margin-right: 10px;
        flex: 1;
    }
    svg{
        font-size: 1.2rem;
        color: ${({theme})=>theme.color.roxo};
        cursor: pointer;
    }
`
export const FilterOptions = styled.div`
    transition: all 500ms;
    overflow: hidden;
    position: absolute;
    height: 0;
    width: 100%;
    top: 145%;
    left: 0;

    ul{
        background: ${({theme})=>theme.color.componentbg};
        width: 100%;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        list-style: none;

    }

    li{
        cursor: pointer;
        padding: 10px 25px;
        transition: all 300ms eas-out;
        &:hover{
            background: #1823be27;
        }
    }

    li:last-child{
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`
export const Button = styled.button`
    transition: all 500ms;
    cursor: pointer;
    &:focus{
        outline: 1px dashed ${({theme})=>theme.color.roxo};
    };

    &:hover{
        transform: scale(1.05);
    };
    svg{
        font-size: 2rem;
        color: white;
    };
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    align-items: center;
    background: ${(props)=>props.color};
    color: white;
    padding: 0px 10px;
    height: 50px;
    border: none;
    border-radius: 35px;
`