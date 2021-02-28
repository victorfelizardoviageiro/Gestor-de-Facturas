import React, { useState, useRef, useEffect } from 'react'
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
const FilterOptions = styled.div`
    transition: all 500ms;
    overflow: hidden;
    position: absolute;
    width: 100%;
    top: 145%;
    left: 0;

    &.opened{
        height: 108px;
    }

    &.closed{
        height: 0px;
    }

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
        transition: all 300ms ease-out;
        &:hover{
            background: #1823be27;
        }
    }

    li:last-child{
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
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
    const [isOpen, setIsOpen] = useState({status:false,selected:""});

    function setState(status,selected){
        setIsOpen({status:status, selected:selected})
    }
    return (
       <Header>
           <Title>
                <h1>Facturas</h1>
                <p>Tem 7 Facturas pendentes</p>
           </Title>
           <Filter>
               <p>{isOpen.selected?isOpen.selected:"Estado"}</p>
               <RiArrowDownSLine onClick={()=>setState(!isOpen.status,isOpen.selected)}/>

               <FilterOptions className={isOpen.status?"opened":"closed"}>
                    <ul onMouseLeave={()=>setState(false,isOpen.selected)}>
                        <li onClick={()=>setState(false,"")}>Todas</li>
                        <li onClick={()=>setState(false,"Pagas")}>Pagas</li>
                        <li onClick={()=>setState(false,"Pendentes")}>Pendentes</li>
                   </ul>
               </FilterOptions>
           </Filter>
           <Button color="#7C5DF9">
                <IoAddCircle/>
                Nova Factura
           </Button>

       </Header>
    )
}

export default HomeHeader
