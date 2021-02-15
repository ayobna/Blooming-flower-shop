import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { TextArea, CreateFeedTitle, CreateFeedImg, CreateFeedIConteiner, Remainder } from './style'

class CreateedBack extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Feedback: [],
            newFeedback: "",
            remainder: ""
        }
    }

    SetFeedback = (e) => {
        this.setState({
            newFeedback: e.target.value
        })
    }
    Send = () => {
        if (this.state.newFeedback === "") {
            this.setState({ remainder: "You need to fill all the fields" })
        } else {
            this.setState({ remainder: "" })
            const current = new Date();
            const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
            let tempFeedback = {
                Date: date, Img: this.props.location.state.product.img,
                Name: this.props.location.state.product.name, NewFeedback: this.state.newFeedback
            }

            if (JSON.parse(localStorage.getItem('Feedback')) === null) {
                localStorage.setItem('Feedback', JSON.stringify([tempFeedback]))
            }
            else {
                let localFeedback = JSON.parse(localStorage.getItem('Feedback'))
                localFeedback = [...localFeedback, tempFeedback]
                localStorage.setItem('Feedback', JSON.stringify(localFeedback))
            }
            this.Cancel()
        }
    }
    Cancel = () => {
        this.props.history.push({
            pathname: '/profile',
        });
    }
    render() {
        return (
            <CreateFeedIConteiner>
                <CreateFeedTitle>Create Feedback</CreateFeedTitle>
                <CreateFeedImg src={this.props.location.state.product.img} alt="" />
                <b>{this.props.location.state.product.name}</b><br />
                <TextArea cols="30" rows="10" placeholder="Your feedback" onChange={this.SetFeedback}></TextArea><br />
                <Remainder>{this.state.remainder}</Remainder><br />
                <Button variant="primary" type="submit" onClick={this.Send}>Send</Button>&nbsp;&nbsp;
                <Button variant="danger" type="submit" onClick={this.Cancel}>Cancel</Button><br />
            </CreateFeedIConteiner>
        )
    }
}

export default withRouter(CreateedBack)
