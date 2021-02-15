import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {DropdownButton,ButtonGroup,Dropdown} from "react-bootstrap/";
import EditProdacts from './EditProdacts';
import { StartViwe} from './style'
import AdminContacts from './AdminContacts'
import AdminHistory from './AdminHistory'
class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products:[],
   idPage:"",
   ImgPath:"",
   contact:[],
   Users:[]
    }
  }

  SelectView=(e)=>{ 
if(e.target.id==="1"){
this.setState({idPage:e.target.id})
let storedU = JSON.parse(localStorage.getItem('Users'))
let temp="";
let tempArr=[];
for(let i=0; i<storedU.length; i++){
if(storedU[i].Messages!==undefined)
  if(storedU[i].Messages.length===0){
  continue
  }else{
    temp={first_Name:storedU[i].first_Name, last_Name:storedU[i].last_Name, email:storedU[i].email, Messages:storedU[i].Messages}
    tempArr=[...tempArr,temp]
  }
}
this.setState({contact:tempArr})
}
else if(e.target.id==="2"){
    let storedU = JSON.parse(localStorage.getItem('Users'))
  this.setState({idPage:e.target.id,Users:storedU})
}
else if(e.target.id==="3"){
  this.setState({idPage:e.target.id, products:this.props.planting, ImgPath:"images/planting/"})
}
else if(e.target.id==="4"){
  this.setState({idPage:e.target.id, products:this.props.bouquets, ImgPath:"images/bouquets/"})
}
else if(e.target.id==="5"){
  this.setState({idPage:e.target.id, products:this.props.tools, ImgPath:"images/tools/"})
}
console.log(this.state.idPage)
  }
removeAProduct=(index)=>{ 
 this.state.products.splice(index,1)
 let newids= this.state.products
 for(let index=0; index < this.state.products.length; index++){
  newids[index].id = index+1
 }
 this.setState({products:newids})
this.props.SetProducts(this.state.products,this.state.idPage)
}
AddAProcuct=(newProduct)=>{
  let newproducts=[...this.state.products,newProduct]
this.setState({products:newproducts},console.log(this.state.products))
this.props.SetProducts(newproducts,this.state.idPage)

console.log(newproducts)
}

EditPrice=(product,index)=>{
let tempArr=this.state.products
tempArr[index]=product
this.setState({products:tempArr})
this.props.SetProducts(tempArr,this.state.idPage)
}
addNewAnswer=(newContactArray)=>{
this.setState({contact:newContactArray})
}

  render() {
    return (
      
      <div>
         <DropdownButton as={ButtonGroup} variant="dark" title="Dropdown" id="bg-vertical-dropdown-1">
    <Dropdown.Item eventKey="1" id="1" onClick={this.SelectView}>Contact</Dropdown.Item>
    <Dropdown.Item eventKey="2" id="2" onClick={this.SelectView}>History</Dropdown.Item>
    <Dropdown.Item eventKey="3" id="3" onClick={this.SelectView}>Plants</Dropdown.Item>
    <Dropdown.Item eventKey="4" id="4" onClick={this.SelectView}>Bouquet</Dropdown.Item>
    <Dropdown.Item eventKey="5" id="5" onClick={this.SelectView}>Gardening Tools</Dropdown.Item>
  </DropdownButton>
  {this.state.idPage===""&&<StartViwe>Have a good time working!</StartViwe>}
{this.state.idPage==="1"&&<AdminContacts contact={this.state.contact} addNewAnswer={this.addNewAnswer}/>}
{this.state.idPage==="2"&&<AdminHistory Users={this.state.Users} />}
  {(this.state.idPage==="3"||this.state.idPage==="4"||this.state.idPage==="5")&&<EditProdacts products={this.state.products} removeAProduct={this.removeAProduct} ImgPath={this.state.ImgPath} AddAProcuct={this.AddAProcuct} EditPrice={this.EditPrice}/>}
      </div>
    )
  }
}
export default withRouter(Admin)