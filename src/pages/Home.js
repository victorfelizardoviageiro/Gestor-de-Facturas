//React and Hooks
import React from 'react'
import { Container } from '../components/GlobalStyles'

//Components
import Facturas from '../components/Facturas';
import HomeHeader from '../components/Header';
import Formulario from '../components/Formulario/Formulario';

//Contexts
import FormShowContextProvider from '../context/FormShowContext';

function Home() {
    return (
        <Container>
            <FormShowContextProvider>
                <HomeHeader/>
                <Formulario/>
            </FormShowContextProvider>
            <Facturas/>
        </Container>
    )
}

export default Home
