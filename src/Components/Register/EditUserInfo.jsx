import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Button, Form, Col } from 'react-bootstrap';
import {RegisterTitle,RegisterConteiner} from './style'
class EditUserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_Name: this.props.location.state.User.first_Name,
            last_Name: this.props.location.state.User.last_Name,
            Phone_Number: this.props.location.state.User.Phone_Number,
            password: this.props.location.state.User.password,
            confirm_password: this.props.location.state.User.password,
            address: this.props.location.state.User.address,
            History: this.props.location.state.User.History,
            TotalPay: this.props.location.state.User.TotalPay,
            Messages: this.props.location.state.User.Messages,
            custumer_type: this.props.location.state.User.custumer_type,
            shoping: this.props.location.state.User.shoping,
            email: this.props.location.state.User.email,
            message: '',
        }
    }
    EditDetails = (e) => {
        let id = e.target.id
        let value = e.target.value
        if (id === 'first_Name') {
            this.setState({
                first_Name: value
            })
        }
        else if (id === 'last_Name') {
            this.setState({
                last_Name: value
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
    SaveEdit = () => {
        if (this.state.password !== this.state.confirm_password) {
            this.setState({ message: 'The passward dont match confirm password' })
        } else {
            this.setState({ message: '' })
            let newInfo = {
                first_Name: this.state.first_Name, last_Name: this.state.last_Name,
                email: this.state.email, password: this.state.password, confirm_password: this.state.confirm_password,
                Phone_Number: this.state.Phone_Number, address: this.state.address, custumer_type: this.state.custumer_type,
                shoping: this.state.shoping, TotalPay: this.state.TotalPay,
                Messages: this.state.Messages, History: this.state.History
            }

            let storedU = JSON.parse(localStorage.getItem('Users'))
            let index = storedU.findIndex(em => em.email === this.state.email)
            storedU[index] = newInfo
            localStorage.setItem('Users', JSON.stringify(storedU));
            sessionStorage.setItem('user', JSON.stringify(newInfo))
            this.props.history.push({
                pathname: '/profile',
        
                });
        }
    }

    Cancel=()=>{
        this.props.history.push({
            pathname: '/profile',
    
            });
    }
    render() {
        return (
            <RegisterConteiner>
<RegisterTitle>Edit Your Info</RegisterTitle>
<Form data-toggle="validator" onSubmit={this.handleSubmit}>
                <Form.Row>

                    <Form.Group as={Col}  >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control id="first_Name" type="text" onChange={this.EditDetails} value={this.state.first_Name} required />
                    </Form.Group>

                    <Form.Group as={Col}  >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control id="last_Name" type="text" onChange={this.EditDetails} value={this.state.last_Name} required />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}  >
                        <Form.Label>Email</Form.Label>
                        <Form.Control id="email" type="email" value={this.state.email} required />
                    </Form.Group>
                    <Form.Group as={Col}  >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control id="Phone_Number" type="tel" onChange={this.EditDetails} value={this.state.Phone_Number} required />
                    </Form.Group>

                </Form.Row>
                <Form.Row>

                    <Form.Group as={Col}  >
                        <Form.Label>Password</Form.Label>
                        <Form.Control id="Password" type="password" onChange={this.EditDetails} value={this.state.password} required />
                    </Form.Group>

                    <Form.Group as={Col}  >
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control id="confirm_password" type="password" onChange={this.EditDetails} value={this.state.confirm_password} required />
                    </Form.Group>


                </Form.Row>
                <Form.Row>

                    <Form.Group as={Col}>
                        <Form.Label>Address</Form.Label>
                        <Form.Control id="address" type="text" onChange={this.EditDetails} value={this.state.address} required />
                    </Form.Group>


                    <Form.Group as={Col}>


                        <Form.Label>Custumer type:</Form.Label>

                        {this.state.custumer_type && <Form.Check checked required id="business" onChange={this.EditDetails} type="radio" aria-label="radio 1"
                            name="formHorizontalRadios"
                        />}
                        {!this.state.custumer_type && <Form.Check required id="business" onChange={this.EditDetails} type="radio" aria-label="radio 1"
                            name="formHorizontalRadios"
                        />}
                        <Form.Label size="sm">Business</Form.Label>
                        {!this.state.custumer_type && <Form.Check checked required id="privet" onChange={this.EditDetails} type="radio" aria-label="radio 1"
                            name="formHorizontalRadios"
                        />}
                        {this.state.custumer_type && <Form.Check required id="privet" onChange={this.EditDetails} type="radio" aria-label="radio 1"
                            name="formHorizontalRadios"
                        />}
                        <Form.Label>privet</Form.Label>
                    </Form.Group>
                </Form.Row>
                <RegisterTitle>
                <Button variant="primary" type="submit" onClick={this.SaveEdit}>Save</Button>&nbsp;&nbsp;
                <Button variant="danger" type="submit" onClick={this.Cancel}>Cancel</Button><br />
                {this.state.message}
                </RegisterTitle>
                </Form>
            </RegisterConteiner>
        )
    }
}
export default withRouter(EditUserInfo)