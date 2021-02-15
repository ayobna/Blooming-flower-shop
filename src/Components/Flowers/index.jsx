import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import IndexInfo from './IndexInfo';
import {  Button } from 'react-bootstrap'
import { Border, CartInfo, ItemList,CartInfoTitle,HeadTitel,Line } from './style'

class Flowers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Product: [],
            amount: 0,
            shoping: [],
            finaltotal: 0,
        }
    }



    itemAmount = (e) => {
        this.setState({
            amount: e
        })
    }
    btnAddList = (e) => {
        if (JSON.parse(sessionStorage.getItem('user')) === null) {
            alert('You need to login to continue')
            this.props.history.push({
                pathname: '/login'
            })
        }

        let item =this.props.location.state.Product[e - 1]
        let newSoping = this.state.shoping.filter(n => n.id !== item.id);
        let newitem = { id: item.id, name: item.name, img: item.img, price: item.price, amount: this.state.amount, total: parseInt(item.price * this.state.amount) }
        if (this.state.amount <= 0) {
            this.setState({
                shoping: newSoping
            }, this.setfinaltotal,this.setfinaltotal)
        }
        else {
            this.setState({
                shoping: [...newSoping, newitem]
            }, this.setfinaltotal, this.setfinaltotal)
        }
        this.setState({
            amount: 0
        })

    }
    setfinaltotal = () => {
        console.log(this.state.shoping)

        let newtotal = 0;
        for (let index = 0; index < this.state.shoping.length; index++) {
            newtotal += this.state.shoping[index].total
        }
        this.setState({
            finaltotal: newtotal
        })
    }



    BtnAddCart = () => {
        let user = JSON.parse(sessionStorage.getItem('user'))
        let newUserListe = this.state.shoping
        let sum=0;
        if (user.shoping.length > 0) {
            
            for (let index = 0; index < user.shoping.length; index++) {
                newUserListe = [...newUserListe, user.shoping[index]]
            }
            this.setState({ shoping: newUserListe })
        }
        for(let i=0; i<newUserListe.length; i++)
        {
            sum+=newUserListe[i].total;
        }
        console.log(sum)
        let storedU = JSON.parse(localStorage.getItem('Users'))
        let index = storedU.findIndex(em => em.email === user.email)
        if ( user.custumer_type===true) {
            sum=  parseInt(sum*0.9)
        }
        
        let newLoggedUser = {
            first_Name: user.first_Name, last_Name: user.last_Name,
            email: user.email, password: user.password, confirm_password: user.confirm_password,
            Phone_Number: user.Phone_Number, address: user.address, custumer_type: user.custumer_type,
             shoping: newUserListe,TotalPay:sum,Messages:user.Messages,History:user.History
        }
        storedU[index] = newLoggedUser
        this.props.setShopingForAllPaegs(newLoggedUser.shoping,sum)
        localStorage.setItem('Users', JSON.stringify(storedU));
        sessionStorage.setItem('user', JSON.stringify(newLoggedUser))
        newUserListe=[]
        this.setState({
            shoping: []
        })
    }
    render() {
        return (
            <div> <HeadTitel>Choose Your {this.props.location.state.Name}:</HeadTitel>
                <Border >

                    <ItemList>
                        <span>
                            {this.props.location.state.Product.map((p,index) =>

                                <IndexInfo index={index} p={p} key={index} ProductItemAmount={this.itemAmount} ProductbtnAddCart={this.btnAddList} />

                            )}</span>
                    </ItemList>
                    <Line></Line>
                    <CartInfo>
                        <CartInfoTitle>You Picked:</CartInfoTitle>
                        {this.state.shoping.map((s) => <div><p key={s.id}>{s.name} price:{s.price}  amount:{s.amount} total:{s.total} </p><br /></div>)}
                        {this.state.finaltotal !== 0 && <p><b>total:</b> {this.state.finaltotal}</p>}
                        {this.state.finaltotal > 0 && <Button size="sm" type="submit" variant="secondary" onClick={this.BtnAddCart} > Add To Cart</Button>}
                    </CartInfo>

                </Border>
            </div>
        )
    }
}
export default withRouter(Flowers)

