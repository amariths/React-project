import React from 'react'
import styled from 'styled-components'

function displayAd() {
  return (
    <div>

    <Wrap>
         {/*
        <ItemText>
            <h1>GET THE GAME!</h1>
            <p>When you buy select AMD Radeon™ RX 6000 Series Graphics Cards</p>
        </ItemText>
  */}


    </Wrap>


    </div>
  )
}

export default displayAd

const Wrap = styled.div`

background: url('/images/last-of-us-.webp');
height: 95vh;
display: flex;
background-position: center;
background-size: cover;
`

const ItemText = styled.div`
`
