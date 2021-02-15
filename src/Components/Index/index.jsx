import React, { Component } from 'react';
import Home from '../Home'
import About from '../About'
import SocailMedia from '../SocailMedia'
import Product from '../Product'
import HomeCarousel from '../HomeCarousel/HomeCarousel'
import { withRouter } from 'react-router-dom';

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
}
 

  render() {
    return (
      <div>
     <HomeCarousel/>
        <Home />
        <Product planting={this.props.planting} tools={this.props.tools} bouquets={this.props.bouquets}/> 
        <About />
        <SocailMedia />   
      </div>
    )
  }
}

export default withRouter(Index);
