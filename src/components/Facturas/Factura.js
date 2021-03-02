import React from 'react'
import styled from 'styled-components'
import {Tpreco, Ttext, Treferencia} from '../Tipografia'
import {IoIosArrowForward} from 'react-icons/io';

const FacturaStyled = styled.article`
    display: grid;
    align-items: center; 
    grid-template-columns: 15% 25% 25% 18% 17%;
    border-radius:5px;
    padding: 30px;
    margin-bottom: 20px;
    background: ${({theme})=>theme.color.componentbg};
`

const Referencia = styled(Treferencia)`
    span{
        color: ${({theme})=>theme.color.roxo};
    }

`
const Prazo = styled(Ttext)`
    color: ${({theme})=>theme.color.text2};
`
const Valor = styled(Tpreco)`
    text-align: right;
    margin-right: 25px;
`

const Nome = styled(Ttext)`
    
`
const ButtonIcon = styled.div`
    display: flex;
    justify-content: center; 
    >.paid{
        width: 190px;
        color: ${({theme})=>theme.color.paid};
        display: flex;
        justify-content: center;
        align-items: center; 
        font-weight: bold;
        padding: 15px;
        border-radius: 5px;
        background: ${({theme})=>theme.color.paidbg};
        margin-right: 10px; 

        span{
            margin-right: 10px;
            background: ${({theme})=>theme.color.paid};
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
        };
    };

    button{
            background: none;
            font-size: 1.1rem;
            border: none;
            cursor: pointer;
            color: ${({theme})=>theme.color.roxo}; 
            &:focus{
                outline: dashed 1px ${({theme})=>theme.color.roxo};
            }
        };
   
`
function Factura({name,paid}) {
    return (
        <FacturaStyled>
            <Referencia><span>#</span>rt3080</Referencia>
            <Prazo>Prazo 20 Mar 2020</Prazo>
            <Nome>{name}</Nome>
            <Valor>1 800,90 MT</Valor>
            <ButtonIcon>
                <p className="paid"><span></span>Pago</p>
                <button><IoIosArrowForward/></button>
            </ButtonIcon>
        </FacturaStyled>
    )
}

export default Factura
