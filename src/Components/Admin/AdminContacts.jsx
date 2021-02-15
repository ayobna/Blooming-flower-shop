import React, { Component } from 'react'
import AdminContactsAnswers from './AdminContactsAnswers'
import { Line,ContactViwe,ContactHistoryViweTitle,NoContactHistoryTitle,HistoryUserInfo} from './style'
 class AdminContacts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contact:[],
    }
  }
updateMasseges=(UpdateAnswer,email)=>{
  let storedU = JSON.parse(localStorage.getItem('Users'))
  let emailIndex = storedU.findIndex(em => em.email === email)
  let messageIndex = storedU[emailIndex].Messages.findIndex(cont => cont.id === UpdateAnswer.id)
  storedU[emailIndex].Messages[messageIndex]=UpdateAnswer;
  console.log(storedU)
  localStorage.setItem('Users', JSON.stringify(storedU))
  emailIndex = this.props.contact.findIndex(em => em.email === email)
  messageIndex = this.props.contact[emailIndex].Messages.findIndex(cont => cont.id === UpdateAnswer.id)
  this.props.contact[emailIndex].Messages[messageIndex]=UpdateAnswer;
  this.props.addNewAnswer(this.props.contact)
}


  render() {
    return (
      <ContactViwe>
        <ContactHistoryViweTitle>Coustomers Contact/Messages:</ContactHistoryViweTitle>
        {(this.props.contact.length===0)&&<NoContactHistoryTitle>There Are No Contact/Messages</NoContactHistoryTitle>}
        {this.props.contact.map((cont,index)=><div key={index}><HistoryUserInfo><b>Name:</b> {cont.first_Name} {cont.last_Name}</HistoryUserInfo><Line></Line> {cont.Messages.map((mes,index)=>
          <AdminContactsAnswers key={index} mes={mes} updateMasseges={this.updateMasseges} email={cont.email}/>
        )}</div>)}
      </ContactViwe>
    )
  }
}
export default AdminContacts


// {this.props.contact.map((cont,index)=><div key={index}>name: {cont.first_Name} {cont.last_Name}, email: {cont.email}, messages: {cont.Messages}</div>)}