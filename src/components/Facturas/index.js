import React from 'react';
import styled from 'styled-components';
import Factura from './Factura';

const Container = styled.div`
`

function Facturas() {
    return (
        <Container>
            <Factura name="Jose Alves Jose"/>
            <Factura name="Artur Soares Dias Jose"/>
            <Factura name="Victor Felizardo Viageiro"/>
            <Factura name="Ruben Dias"/>
        </Container>
    )
}

export default Facturas
