import React, { useState } from 'react';
import { ContactSection, ContactTitle, Form, FormInput, InputText, InputEmail, InputExp, TextArea, InputSubmit,RemainderCont } from './style'
import { withRouter } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const Contact = () => {
    let user = JSON.parse(sessionStorage.getItem('user'))
    const [subject, setSaveSubject] = useState("")
    const [message, setSaveMessage] = useState("")

    const [show, setShow] = useState(false);
    const [remainder, setRemainder] = useState("");
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    function sendMessage() {
        debugger
if(subject==="" || message==="")
{
    setRemainder("You need to fill all the fields")
}
else{
    setRemainder("")
        let idCounter=1
        if(user.Messages.length>0)
        {
        idCounter=user.Messages.length+1
        }
        let newMassega = { id:idCounter , createDate: date, subject: subject, message: message, answerDate: ``, answer: "still was not answered" }
        user.Messages = [...user.Messages, newMassega]
        console.log("user=>" + user)
        let storedU = JSON.parse(localStorage.getItem('Users'))
        let index = storedU.findIndex(em => em.email === user.email)
        storedU[index] = user
        localStorage.setItem('Users', JSON.stringify(storedU));
        sessionStorage.setItem('user', JSON.stringify(user))
        setShow(true)
        setTimeout(function(){ setShow(false); }, 3000);
       
    }
    }

    function handleSubmit(event) {
        event.preventDefault();

    }

    return (
        <React.Fragment>

     {show && <Alert variant="dark">
    Your message has reached us, we will reply to you soon.
             </Alert>}
            <ContactSection>
                <div className="container">

                    <ContactTitle>Contact As</ContactTitle>
                    <Form onSubmit={handleSubmit}>
                        <FormInput>
                            <InputText type="text" value={user.first_Name + " " + user.last_Name} />
                            <InputEmail type="email" value={user.email} />
                        </FormInput>
                        <InputExp required type="text" className="sub" placeholder="Your Subject" onChange={(e) => setSaveSubject(e.target.value)} />
                        <TextArea required cols="30" rows="10" placeholder="Your Message" onChange={(e) => setSaveMessage(e.target.value)}></TextArea>
                        <InputSubmit type="submit" value="Send Message" onClick={sendMessage} />
                        
                    </Form>
                    <RemainderCont>{remainder}</RemainderCont>
                </div>

            </ContactSection>
        </React.Fragment>
    )
}

export default withRouter(Contact);
