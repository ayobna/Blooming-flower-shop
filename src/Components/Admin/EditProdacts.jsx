import React, { Component } from 'react'
import EditProdactInfo from './EditProdactInfo'
import { CartRow,InputNumber,TableTh } from './style'
import { Table, Form, Button } from 'react-bootstrap'
class EditProdacts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      name: "",
      price: 0,
      img: "",
      newProducts:[]

    }
  }

  removeProdact = (id) => {
    let index = this.props.products.findIndex(prod => prod.id === id)
    this.props.removeAProduct(index)

  }
  changeInfo=(e)=>{
if(e.target.id==="name")
{
this.setState({name:e.target.value})
}
else if(e.target.id==="price")
{
  this.setState({price: parseInt(e.target.value)})
}
else if(e.target.id==="exampleFormControlFile1")
{
  let res = e.target.value.substring(12);
  this.setState({img:this.props.ImgPath+res})
}
  }

btnAddProduct=()=>{
let newProduct={id:this.props.products.length+1,img:this.state.img,name:this.state.name,price:this.state.price}
this.setState({newProducts:[...this.props.products,newProduct]})
this.props.AddAProcuct(newProduct)
}

EditProduct=(newEditProduct)=>{
  let index = this.props.products.findIndex(prod => prod.id === newEditProduct.id)
  this.props.EditPrice(newEditProduct,index)
}
  render() {
    return (

      <React.Fragment>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <TableTh>img</TableTh>
              <TableTh>Name</TableTh>
              <TableTh>price</TableTh>
              <TableTh>Remove</TableTh>
            </tr>
          </thead>
          <tbody>
          {this.props.products.map((product,index) => <EditProdactInfo key={index} product={product} removeProdact={this.removeProdact} EditProduct={this.EditProduct}/>)}
          <tr>
            <TableTh colspan="4">Add A New Prodact</TableTh>
          </tr>
          <tr>
              <CartRow><Form.Group>
                <Form.File id="exampleFormControlFile1" onChange={this.changeInfo}/>
              </Form.Group></CartRow>
              <CartRow><Form.Control id="name" placeholder="name"  onChange={this.changeInfo}/></CartRow>
              <CartRow> <InputNumber size="sm" type="number" placeholder="0"  id="price" onChange={this.changeInfo}/></CartRow>           
              <CartRow><Button block variant="light" size="sm" type="submit" onClick={this.btnAddProduct}>Add</Button></CartRow>
          </tr>
          </tbody>
        </Table>

      </React.Fragment>

    )
  }
}
export default EditProdacts