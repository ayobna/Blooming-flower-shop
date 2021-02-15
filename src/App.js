import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

/**import Button from 'react-bootstrap/Button'; */
import Navbar from './Components/Navbar/index'
import Contact from './Components/Contact/index'
import Index from './Components/Index/index'
import Profile from './Components/Profile/index'
import Register from './Components/Register/index'
import Login from './Components/Login/Login'
import Flowers from './Components/Flowers/index'
import ShopingCart from './Components/ShopingCart/index';
import './App.css';
import Admin from './Components/Admin';
import axios from 'axios'
import EditUserInfo from './Components/Register/EditUserInfo'
import ThankPay from './Components/ShopingCart/ThankPay';
import CreateedBack from './Components/FeedBack/CreateedBack';
import Feedback from './Components/FeedBack/index';

import Footer from './Components/Footer';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      planting: [],
      bouquets: [],
      tools: [],
      shoping: [],
      TotalPay: 0
    }
  }
  componentDidMount() {
    axios.get('js/data.json').then(res => { this.setState({ planting: res.data.Planting, tools : res.data.Tools, bouquets: res.data.Bouquets }) })
  }

  SetProducts = (productArr, type) => {
    if (type === "3") {
      this.setState({ planting: productArr })
    }
    else if (type === "4") {
      this.setState({ bouquets: productArr })
    }
    else if (type === "5") {
      this.setState({ tools: productArr })
    }
  }


  SetShopingForAllPaegs = (Shoping, sum) => {
    this.setState({
      shoping: Shoping,
      TotalPay: sum
    })

  }


  //bouquet
  render() {
    return (
      <React.Fragment>
        <Navbar TotalPay={this.state.TotalPay} CustumerType={this.state.CustumerType} planting={this.state.planting} tools={this.state.tools} bouquets={this.state.bouquets}/>
        <Switch>
          <Route exact path='/' render={()=><Index planting={this.state.planting} tools={this.state.tools} bouquets={this.state.bouquets}/>} />
          <Route path='/contact' component={Contact} />
          <Route path='/profile' component={Profile} />
          <Route path='/register' component={Register} />
          <Route path='/login' render={() => <Login isAdmin={this.isAdmin} />} />
          <Route path='/flowers' render={() => <Flowers setShopingForAllPaegs={this.SetShopingForAllPaegs} />} />
          <Route path='/shopingcart' render={() => <ShopingCart setShopingForAllPaegs={this.SetShopingForAllPaegs} />} />
          <Route path='/admin' render={() => <Admin planting={this.state.planting} tools={this.state.tools} bouquets={this.state.bouquets} SetProducts={this.SetProducts} />} />
          <Route path='/editUserInfo' render={() => <EditUserInfo/>} />
          <Route path='/thankPay' render={() => <ThankPay/> } />
          <Route path='/createedBack' render={() => <CreateedBack/> } />
          <Route path='/feedback' render={() => <Feedback/> } />
         
        </Switch>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default withRouter(App);
