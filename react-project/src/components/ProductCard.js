import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function ProductCard(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('Spa.json')
            const data = await response.json()
            console.log(data)
            setData(data)
        }
        fetchData()
    }, [])

    return (
        <div id="offer3">
            {data.map((item) => (
                <li key={item.id}>

                    <Card id="offer" style={{ width: '18rem' }}>
                        <Link to={`/products/${item.id}`}>
                            <Card.Img
                                id="cardimage"
                                variant="top"
                                src={item.img}
                            />
                        </Link>



                        <Card.Body>

                            <Card.Title id="card-name" className="card-text">
                                {item.name}
                            </Card.Title>
                            <Link to={`/products/${item.id}`}>
                            <div id="cardtext">
                                <Card.Text className="cardtext">
                                    {item.info}
                                </Card.Text>
                            </div>
                            <div className="cardprice">
                                <h4 id="card-price">{item.price}</h4>
                            </div>
                            </Link>

                            <ButtonGroup>
                                <Button id="btn" variant="primary">
                                    Lägg till i kundvagn
                                </Button>
                            </ButtonGroup>
                        </Card.Body>
                        
                    </Card>

                </li>
            ))}
        </div>
    )
}

export default ProductCard



const ButtonGroup = styled.div`
position: absolute;
    bottom: 30px;
`
