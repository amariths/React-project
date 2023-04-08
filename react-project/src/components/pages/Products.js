import React from 'react'
import { useParams } from 'react-router-dom'

function Products() {
    const { id } = useParams()


  return (
    <div>
        <h1>produkt sidan</h1>
        <h4>här läser du följande <span>{id}</span></h4>
    </div>
  )
}

export default Products
