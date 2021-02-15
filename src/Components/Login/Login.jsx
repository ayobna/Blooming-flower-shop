import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios'
import { Link, withRouter, useHistory } from 'react-router-dom'
import {LoginConteiner,LoginBackground,LoginTitle,Remainder} from './style'
function Login(props) {



    // יצירת משתנה סטאט לאמיל והסיסמה
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [admin, setadmin] = useState("");
    const [remainder, setRemainder] = useState("");
    useEffect(() => {
        axios.get('js/data.json').then(res => { setadmin(res.data.Admin) })
    }, [])
    // הפונקציה בודקת אם אמשתמש הכניס משהו לשדות
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    // מניעת רענון לדף אחרי ליחצה על הכפתור
    function handleSubmit(event) {
        event.preventDefault();

    }
    function BtnLogin() {
    
        let user = { email: email, password: password }
        console.log(user)
        console.log(admin)
        if(user.email===admin[0].email&&user.password===admin[0].password)
        {
            sessionStorage.setItem('admin', JSON.stringify(admin))        
            handHistory()
        }
        else if (localStorage.getItem('Users')) {
            let storedU = JSON.parse(localStorage.getItem('Users'))
              
            if(storedU.find((u) => u.email === user.email && u.password === user.password)) {
             
                let index = storedU.findIndex(em => em.email === user.email)
                let newuser = storedU[index];
                sessionStorage.setItem('user', JSON.stringify(newuser))
                handHistory();
            }
            else {
                setRemainder('Check your details')
            }
        }
    }
    const history = useHistory();
    const handHistory = () => {
        history.push({
            pathname: "/"
        });
    }
    return (
        <LoginBackground>
        <LoginConteiner className="Login">
            <LoginTitle>Welcome!</LoginTitle>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Remainder>{remainder}</Remainder>
                </Form.Group> <br /><br />
                <Button block size="lg" type="submit" disabled={!validateForm()} onClick={BtnLogin}>
                    Login
        </Button>
                <Link to="/register">not a member? register</Link>
            </Form>
        </LoginConteiner>
        </LoginBackground>
    );
}
export default withRouter(Login)