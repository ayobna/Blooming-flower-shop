import React from 'react'
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import {TableTr,CartImg} from './style'
function CartItemInfo(props) {

  

    function btnRemove() {
        console.log(props.s.id,props.s.total)
        props.btnRemove(props.s.id,props.s.total)
    }
    return (
        <TableTr key={props.key}>
        <td><CartImg src={props.s.img} alt=""/></td>
        <td>{props.s.name}</td>
        <td>{props.s.price}</td>
        <td>{props.s.amount}</td>
        <td>{props.s.total}</td>
        <td> <Button variant="danger" type="submit" onClick={btnRemove}>Remove</Button></td>
        </TableTr>
    )
}
export default withRouter(CartItemInfo)