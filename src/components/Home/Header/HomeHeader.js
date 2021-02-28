import React from 'react'
import styled from 'styled-components';
import {RiArrowDownSLine} from 'react-icons/ri';
import {IoAddCircle} from 'react-icons/io5';

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Title = styled.div`
    margin-right: auto; 
    h1{
        margin-bottom:5px;
    }
`

const Filter = styled.div`
    width: 140px;
    position: relative;
    display: flex;
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

    ul{
        background: ${({theme})=>theme.color.componentbg};
        width: 100%;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        position: absolute;
        top: 170%;
        list-style: none;

    }

    li{
        cursor: pointer;
        padding: 10px 25px;
        transition: all 400ms;
        &:hover{
            background: #1823be27;
        }
    }

    li:last-child{
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`
const FilterOptions = styled.ul`
    outline: solid;
`
const Button = styled.button`
    svg{
        font-size: 2rem;
        color: white;
    }
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
function HomeHeader() {
    return (
       <Header>
           <Title>
                <h1>Facturas</h1>
                <p>Tem 7 Facturas pendentes</p>
           </Title>
           <Filter>
               <p>Filtrar por: </p>
               <RiArrowDownSLine/>
               <ul>
                   <li>Estado</li>
                   <li>Montande</li>
                   <li>Data</li>
               </ul>
           </Filter>
           <Button color="#7C5DF9">
                <IoAddCircle/>
                Nova Factura
           </Button>

       </Header>
    )
}

export default HomeHeader
