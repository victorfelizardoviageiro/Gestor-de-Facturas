import React from 'react'
import styled from 'styled-components'

const OverllayStyled = styled.div`
    z-index:98;
    width: 100vw;
    height: 100vh;
    background: ${({theme})=>theme.color.overllay};
    position: fixed;
    top: 0;
    left: 0;
`
function Overllay() {
    return (
        <OverllayStyled></OverllayStyled>
    )
}

export default Overllay;
