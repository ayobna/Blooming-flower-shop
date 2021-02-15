import React from 'react'
import { withRouter } from 'react-router-dom';
import { ItemInfo, Images, InputNumber,ItemName } from './style'
import { Button } from 'react-bootstrap'
function indexInfo(props) {

    function ItemAmount(e) {

        props.ProductItemAmount(e.target.value)


    }

    function BtnAddCart() {

        props.ProductbtnAddCart(props.p.id)


    }
    return (
        <ItemInfo key={props.p.id} >
            <ItemName>{props.p.name}</ItemName> <br />
            < Images src={props.p.img} thumbnail /><br />
            Price: {props.p.price} <br />
            <InputNumber size="sm" type="number" placeholder="0" onChange={ItemAmount} />
            <br /> <br />
            <Button size="sm" type="submit" variant="secondary" onClick={BtnAddCart} > Add To List</Button>

        </ItemInfo>
    )
}
export default withRouter(indexInfo)