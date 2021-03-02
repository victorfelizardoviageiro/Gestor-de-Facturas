//React and Hooks
import React, { useContext } from 'react'

//Libraries
import styled from 'styled-components'

//Contexts
import { FormShowContext } from '../../context/FormShowContext';

const FormularioContainer = styled.div`
    transition: all 500ms;
    height: 100vh;
    padding-left: 100px;
    width: 550px;
    transform: ${({show})=>show?`translateX(0%)`:`translateX(-101%)`};
    background: ${({theme})=>theme.color.appbg};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;

    .show{
        transform: translateX(-101%);
    }
`

const Overllay = styled.div`
    z-index:98;
    width: 100vw;
    height: 100vh;
    background: ${({theme})=>theme.color.overllay};
    position: fixed;
    top: 0;
    left: 0;
`

function Formulario({show}) {
    const {showForm, setShowForm} = useContext(FormShowContext);
    return (
        <>
            {showForm&&<Overllay onClick={()=>setShowForm(0)}/>}
            <FormularioContainer show={showForm}>
                <h1>Eu Sou O formulario!!!</h1>
            </FormularioContainer>
        </>
    )
}

export default Formulario;
