import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { HistoryViwe,ContactHistoryViweTitle,CartRow,CartImg,TableTh,CartRowheight,NoContactHistoryTitle} from './style'
export class AdminHistory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [],
    }
  }

  render() {
    return (
      <HistoryViwe>
        <ContactHistoryViweTitle>Coustomers Shopping History:</ContactHistoryViweTitle>
        {this.props.Users.History === null &&<NoContactHistoryTitle>There Is No Shopping History</NoContactHistoryTitle>}
        {this.props.Users.map((user, index) =>
          <div key={index}>
             
            &nbsp;&nbsp;{user.History.length > 0 && user.first_Name + " " + user.last_Name}
            {user.History.map((s, index) =>
              <div key={index}>

                {s.Date}
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>

                      <TableTh>img</TableTh>
                      <TableTh>Name</TableTh>
                      <TableTh>price</TableTh>
                      <TableTh>amount</TableTh>
                      <TableTh>total</TableTh>
                    </tr>
                  </thead>
                  <tbody>
                    {s.HistoryList.map((h, index) =>

                      <tr key={index} >
                        <CartRow><CartImg src={h.img} alt="" /></CartRow>
                        <CartRow>{h.name}</CartRow>
                        <CartRow>{h.price}</CartRow>
                        <CartRow>{h.amount}</CartRow>
                        <CartRow>{h.total}</CartRow>

                      </tr>
                    )}
                    <tr className="cartRow">

                      <CartRowheight colSpan="4">The total payment was:</CartRowheight>
                      <TableTh className="cartRow">{s.TotalPay}</TableTh>

                    </tr>
                  </tbody>
                </Table>
              </div>
            )}
          </div>
        )}
      </HistoryViwe>
    )
  }
}

export default AdminHistory
