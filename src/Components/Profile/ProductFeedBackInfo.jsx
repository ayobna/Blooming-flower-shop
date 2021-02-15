import React,{Component} from 'react'
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import {TableTr,CartImg} from './style'


class ProductFeedBackInfo extends Component {
    constructor(props) {
        super(props)
        this.GoToFeedBack = this.GoToFeedBack.bind(this)
        this.state = {
    
        }
      }

    GoToFeedBack = () => {
         
     this.props.history.push({
        pathname: '/createedBack',
        state:{product:this.props.h}
        });
    }
    render() {
        return (

            <TableTr >
                <td className="cartRow"><CartImg src={this.props.h.img} alt="" /></td>
                <td className="cartRow">{this.props.h.name}</td>
                <td className="cartRow">{this.props.h.price}</td>
                <td className="cartRow">{this.props.h.amount}</td>
                <td className="cartRow">{this.props.h.total}</td>
                <td className="cartRow " ><Button variant="success" size="" type="submit" onClick={this.GoToFeedBack}>&nbsp;&nbsp;Feedback&nbsp;&nbsp;</Button></td>
            </TableTr>
        )
    }
}

export default withRouter(ProductFeedBackInfo)
