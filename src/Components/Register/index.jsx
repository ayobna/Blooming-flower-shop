import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Button, Form, Col } from 'react-bootstrap';
import {RegisterTitle,RegisterConteiner} from './style'

class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      first_Name: '',
      last_Name: '',
      message: '',
      email: '',
      password: '',
      confirm_password: '',
      Phone_Number: '',
      address: '',
      custumer_type: ''
    }
  }

  check = (e) => {
    let id = e.target.id
    let value = e.target.value
    console.log(value)
    if (id === 'first_Name') {
      console.log('in email')
      this.setState({
        first_Name: value
      })
    }
    else if (id === 'last_Name') {
      this.setState({
        last_Name: value
      })
    }
    else if (id === 'email') {
      this.setState({
        email: value
      })
    }
    else if (id === 'Password') {
      this.setState({
        password: value
      })
    }
    else if (id === 'confirm_password') {
      this.setState({
        confirm_password: value
      })
    } else if (id === 'Phone_Number') {
      this.setState({
        Phone_Number: value
      })
    }
    else if (id === 'address') {
      this.setState({
        address: value
      })
    } else if (id === 'business') {
      this.setState({
        custumer_type: true
      })
    } else if (id === 'privet') {
      this.setState({
        custumer_type: false
      })
    }

  }
 handleSubmit=(event)=> {
    event.preventDefault();

}
  btnregister = () => {

    if (this.state.password === this.state.confirm_password) {
      let user = {
        first_Name: this.state.first_Name, last_Name: this.state.last_Name,
        email: this.state.email, password: this.state.password, confirm_password: this.state.confirm_password,
        Phone_Number: this.state.Phone_Number, address: this.state.address, custumer_type: this.state.custumer_type,
         shoping: [],TotalPay:0,Messages:[],History:[]
      }

      if (localStorage.getItem('Users')) {
        let storedU = JSON.parse(localStorage.getItem('Users'))
        if (storedU.find((u) => u.email === user.email)) {
          this.setState({ message: 'user already exist' })
        }
        else {
          storedU = [...storedU, user]
          console.log(storedU)
          localStorage.setItem('Users', JSON.stringify(storedU))
          this.props.history.push({
            pathname: '/login'
          })
        }
      } else {

        localStorage.setItem('Users', JSON.stringify([user]))
        this.props.history.push({
          pathname: '/login'
        })
      }
    }
    else {
      this.setState({ message: 'The passward dont match confirm password' })
    }
  }

  //cntrolid - near as={col}
  render() {
    return (
      <RegisterConteiner>
<RegisterTitle>SignUp!</RegisterTitle>
<Form data-toggle="validator" onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col}  >
            <Form.Label>First Name</Form.Label>
            <Form.Control  required  id="first_Name" value={this.state.first_Name} onChange={this.check} type="text" placeholder="First Name"/>
          </Form.Group>

          <Form.Group as={Col}  >
            <Form.Label>Last Name</Form.Label>
            <Form.Control id="last_Name" onChange={this.check} type="text" placeholder="Last Name" required />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}  >
            <Form.Label>Email</Form.Label>
            <Form.Control id="email" onChange={this.check} type="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group as={Col}  >
            <Form.Label>Phone Number</Form.Label>
            <Form.Control id="Phone_Number" onChange={this.check} type="tel" placeholder="Phone Number" required />
          </Form.Group>

        </Form.Row>
        <Form.Row>

          <Form.Group as={Col}  >
            <Form.Label>Password</Form.Label>
            <Form.Control id="Password" onChange={this.check} type="password" placeholder="Password" required />
          </Form.Group>

          <Form.Group as={Col}  >
            <Form.Label>Confirm password</Form.Label>
            <Form.Control id="confirm_password" onChange={this.check} type="password" placeholder="Confirm password" required />
          </Form.Group>


        </Form.Row>
        <Form.Row>

          <Form.Group as={Col}>
            <Form.Label>Address</Form.Label>
            <Form.Control id="address" onChange={this.check} type="text" placeholder="Address" required />
          </Form.Group>


          <Form.Group as={Col}>

            <Form.Label  >Custumer type:</Form.Label>

            <Form.Check required id="business" onChange={this.check} type="radio" aria-label="radio 1"
              name="formHorizontalRadios"
            />
            <Form.Label size="sm">Business</Form.Label>

            <Form.Check required id="privet" onChange={this.check} type="radio" aria-label="radio 1"
              name="formHorizontalRadios"
            />
            <Form.Label>Privet</Form.Label>
          </Form.Group>

        </Form.Row>
<RegisterTitle>
        <Button variant="primary" type="submit" onClick={this.btnregister}>Submit</Button><br/>
        {this.state.message}
        </RegisterTitle> 
        </Form>
      </RegisterConteiner>
    )
  }
}
export default withRouter(Register);

