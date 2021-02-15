import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { NavbarSection, Logo, LogoText, UlList, ListItem,LogName } from './style'
import axios from 'axios'



const Navbar = (props) => {

    let localFeedback=JSON.parse(localStorage.getItem('Feedback'))


    console.log(localFeedback)
    let user = JSON.parse(sessionStorage.getItem('user'))
    let ListShoping = null
    if (JSON.parse(sessionStorage.getItem('user')) !== null) {
        ListShoping = user.shoping.length        
    }
let admin=JSON.parse(sessionStorage.getItem('admin'))

    const [Users, setUsers] = useState(0)


    useEffect(() => {
        axios.get('js/data.json').then(res => { setUsers(res.data.Users) })},  [props.foo])



    function SetToLocal() {
        let storedU = JSON.parse(localStorage.getItem('Users'))
        if (storedU===null||storedU===0) {
            localStorage.setItem('Users', JSON.stringify(Users))
        }
      

    }
    SetToLocal()



    function CheackLogin() {
        if (JSON.parse(sessionStorage.getItem('user')) != null) {

            return true
        }
        return false
    }
    function CheackAdmin() {
        if (JSON.parse(sessionStorage.getItem('admin')) != null) {

            return true
        }
        return false
    }

    function Clear(){
        sessionStorage.clear() 
    }

   
    return (
        <NavbarSection>
            <Logo>
                <LogoText className='anchor' >Blooming!</LogoText>
            </Logo>
            <UlList>
            <ListItem>{CheackLogin()&&<LogName>Hello {user.first_Name} </LogName>}</ListItem>
            <ListItem>{CheackAdmin()&&<LogName>Hello {admin[0].first_Name} </LogName>}</ListItem>
                <ListItem><Link className='anchor' to="/">Home</Link></ListItem>
                <ListItem>{CheackLogin() && <Link className='anchor' to="/Profile">Profile</Link>}</ListItem>
                <ListItem><Link className='anchor' to={{pathname:'/flowers',state:{Product:props.planting,Name:"Plants"}}}>Plants</Link></ListItem>              
                <ListItem><Link className='anchor' to={{pathname:'/flowers',state:{Product:props.bouquets,Name:"Bouquets"}}}>Bouquet</Link></ListItem>
                <ListItem><Link className='anchor' to={{pathname:'/flowers',state:{Product:props.tools,Name:"Tools"}}}>Gardening Tools</Link></ListItem>
                <ListItem> {CheackLogin() &&<Link className='anchor' to={{pathname:'/shopingcart' ,state:{shoping: user.shoping,history:user.History ,TotalPay:user.TotalPay}}} >Shoping Cart [{ListShoping}]</Link>}</ListItem>
                <ListItem>{!CheackAdmin()&&CheackLogin() &&<Link className='anchor' to="/contact">Contact</Link>}</ListItem>
                <ListItem><Link className='anchor'   to={{pathname:'/feedback', state:{ feedback:localFeedback,tools:props.tools,bouquets:props.bouquets,planting:props.planting}}}>Feedback</Link></ListItem>
                <ListItem>{CheackAdmin()&&<Link className='anchor' to="/admin">Admin</Link>}</ListItem>
                <ListItem>{!CheackLogin()&&!CheackAdmin()&& <Link className='anchor' to="/login">Login</Link>}</ListItem>
                <ListItem> { ( CheackAdmin()||CheackLogin())&& <Link className='anchor' onClick={Clear} to="/login">Logout</Link> }</ListItem>
            </UlList>



        </NavbarSection>
    )
}

export default withRouter(Navbar);
