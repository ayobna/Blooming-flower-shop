import React,{Component} from 'react'
import { Button } from 'react-bootstrap'
import { CartImg, CartRow, InputNumber } from './style'

class EditProdactInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 0,
    }
  }

  EditPrice=(e)=>{
  this.setState({price:e.target.value})
  }
btnEditProduct=()=>{
  let newEditProduct={id:this.props.product.id,img:this.props.product.img,name:this.props.product.name,price:this.state.price}
  this.props.EditProduct(newEditProduct)
}
  render() {
    return (

      <tr key={this.props.product.id}>
        <CartRow><CartImg src={this.props.product.img} alt="" /></CartRow>
        <CartRow>{this.props.product.name}</CartRow>
        <CartRow> <InputNumber size="sm" type="number" placeholder={this.props.product.price} id="price" onChange={this.EditPrice}/>  <Button type="submit" onClick={this.btnEditProduct} >Edit</Button></CartRow>
        <CartRow> <Button variant="danger" type="submit" onClick={(() => this.props.removeProdact(this.props.product.id))}>Remove</Button></CartRow>
      </tr>

    )
  }
}
export default EditProdactInfo
