import React from 'react'
import { Link } from 'react-router-dom'
import DisplayAd from '../displayAd'


function Home() {
  return (
    <div>
        <DisplayAd/>
       <h1>välkommen till shop</h1>
       <Link to="/products/1"> produkt 1 </Link>
       <Link to="/products/2"> produkt 2</Link>
    </div>
  )
}

export default Home
