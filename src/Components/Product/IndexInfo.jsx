import React from 'react'
import { ProductPart, PartTitle, Line, PartDesc } from './style'
import {Card, Button } from 'react-bootstrap'
function IndexInfo(props) {

function BTNpageToGo(){
    props.pageToGo(props.ProductItem.id)
}

  return (
    
             <ProductPart first={props.ProductItem.id} key={props.ProductItem.id}>
                    <Card style={{ width: '40rem'}}>
                        <Card.Img variant="top" src={props.ProductItem.image} style={{ height: '12rem' }} />
                        <Card.Body>
                            <Card.Title>
                                <PartTitle> {props.ProductItem.title} </PartTitle>
                            </Card.Title>
                            <Line />
                            <Card.Text className={PartDesc}>
                                {props.ProductItem.body}
                            </Card.Text>
                            <Button variant="secondary" onClick={BTNpageToGo}>Go Shop!</Button>
                        </Card.Body>
                    </Card>
                </ProductPart>
  
  )
}

export default IndexInfo
