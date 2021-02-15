import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button,Table } from 'react-bootstrap'
import CartItemInfo from './CartItemInfo';
import {TableTh,CartRowheight,CartTital} from './style'
class ShopingCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
         totalPay:0,
        EmbtyShopingcart:false,
        CoustomerType:true
        }
    }
    btnRemove=(id,total)=>{
      let index = this.props.location.state.shoping.findIndex(prod=>prod.id===id&&prod.total===parseInt(total))
      let user = JSON.parse(sessionStorage.getItem('user'))
      if ( user.custumer_type===true) {
        total=  parseInt (total*0.9)
       }      
   
      this.props.location.state.TotalPay-=total;
      if( this.props.location.state.TotalPay===1)
      {
        this.props.location.state.TotalPay=0;
      }
      this.props.location.state.shoping.splice(index,1);  
      this.setTolocal(this.props.location.state.history)  
     
    }
    btnPay=()=>{
      this.setState({
        EmbtyShopingcart:true
      },this.btnPayAfterSetstate) 
    }
    btnPayAfterSetstate=()=>{
      let user = JSON.parse(sessionStorage.getItem('user'))
      let storedU = JSON.parse(localStorage.getItem('Users'))
     let indexuser = storedU.findIndex(em => em.email === user.email)
    let newHistoryList= []
    for (let index = 0; index <this.props.location.state.shoping.length; index++) {
      newHistoryList=[...newHistoryList,this.props.location.state.shoping[index]]
    }
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  let newHistory={Date:date,HistoryList:newHistoryList,TotalPay:this.props.location.state.TotalPay}
    let AllHistory=storedU[indexuser].History
    AllHistory=[...AllHistory,newHistory]
    
     this.setTolocal(AllHistory) 
   
     this.props.history.push({
      pathname: '/thankPay',
      });
      
    }




    setTolocal=(newHistory)=>{
      let user = JSON.parse(sessionStorage.getItem('user'))
      let storedU = JSON.parse(localStorage.getItem('Users'))
      let shoping =[]
    let totalPay=0
      if(!this.state.EmbtyShopingcart){
        shoping= this.props.location.state.shoping
         totalPay=this.props.location.state.TotalPay
      }
    
     let index= storedU.findIndex(em => em.email === user.email)
      let newLoggedUser = {
          first_Name: user.first_Name, last_Name: user.last_Name,
          email: user.email, password: user.password, confirm_password: user.confirm_password,
          Phone_Number: user.Phone_Number, address: user.address, custumer_type: user.custumer_type,
           shoping: shoping, TotalPay:totalPay,Messages:user.Messages,
           History: newHistory
      }
      this.props.setShopingForAllPaegs(newLoggedUser.shoping,this.props.location.state.TotalPay)
      storedU[index] = newLoggedUser
      localStorage.setItem('Users', JSON.stringify(storedU));
      sessionStorage.setItem('user', JSON.stringify(newLoggedUser))
    }
    render() { 
  
        return (
            <div>
              <CartTital>Your Cart:</CartTital>
                <Table striped bordered hover variant="dark">
               <thead>
    <tr>
      <TableTh>img</TableTh>
      <TableTh>Name</TableTh>
      <TableTh>price</TableTh>
      <TableTh>amount</TableTh>
      <TableTh>total</TableTh>
      <TableTh>Remove</TableTh>
      
    </tr>
  </thead>
  <tbody>
{this.props.location.state.shoping.map((s,index)=>                
     <CartItemInfo key={index} s={s} btnRemove={this.btnRemove}/>
         
            )}
                  <tr >
                  <CartRowheight colSpan="4">Your total payment is:</CartRowheight>
                  <TableTh >{this.props.location.state.TotalPay}</TableTh>
                  <TableTh> <Button variant="success" size="" type="submit" onClick={this.btnPay}> &nbsp;&nbsp;&nbsp;&nbsp;Pay&nbsp;&nbsp;&nbsp;&nbsp; </Button></TableTh>
                  </tr> 
                  </tbody>
            </Table>       
            </div>
        )
    }
}

export default withRouter(ShopingCart)

