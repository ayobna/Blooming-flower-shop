import React, { Component } from 'react'
import {  Table } from 'react-bootstrap'
import ProductFeedBackInfo from './ProductFeedBackInfo';
import { withRouter} from 'react-router-dom';
import {TableTh,TableDate} from './style'
 class History extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {

    return (
      <div>
        {this.props.Payhistory.map((s, index) =>
          <div key={index}>

            <TableDate>{s.Date}</TableDate>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>

                  <TableTh >Img</TableTh>
                  <TableTh >Name</TableTh>
                  <TableTh >Price</TableTh>
                  <TableTh >Amount</TableTh>
                  <TableTh >Total</TableTh>
                  <TableTh >Feedback</TableTh>
                </tr>
              </thead>
              <tbody>
                {s.HistoryList.map((his, index) =>
                     <ProductFeedBackInfo  key={index}  index={index}  h={his}/>
                )}

                <tr className="cartRow">
            
                  <TableTh className="cartRowheight" colSpan="4">Your total payment was:</TableTh>
                  <TableTh>{s.TotalPay}</TableTh>

                </tr>
              </tbody>
            </Table>
          </div>
        )}
      </div>)
  }
}
export default withRouter(History)
