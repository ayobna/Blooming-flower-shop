import React,{useState} from 'react';
import { withRouter,useHistory} from 'react-router-dom';
import { NoInformation,ProfileSection, Profiles, ProfileList, ProfileItem, ItemSpan,ProfileTitle,ProfileViweBouttons,ProfileImag,ContactCon,ContactHead} from './style'
import { Button } from 'react-bootstrap'
import History from './History'

function Profile(props){
    const [viwe, setViwe] = useState("1")
    let user=JSON.parse(sessionStorage.getItem('user'))

function historyOrQuestion(e){
    if(e.target.id==="1")
    {
        setViwe(e.target.id)
    }
    else if(e.target.id==="2")
    {
        setViwe(e.target.id)
    }
  
}

    let history = useHistory();
    function handleClick() {
      history.push({
        pathname: '/editUserInfo',
        state: {User : user }
        });
    }
    
    return (
        <React.Fragment>
             <ProfileTitle>My Profile</ProfileTitle>
      <ProfileSection>
            <Profiles>  
                <ProfileImag src="images/backgrounds/background6.jpg"/>          
                <ProfileList>
                    <ProfileItem >
                        <ItemSpan>Name</ItemSpan>
                        {user.first_Name} {user.last_Name}
                    </ProfileItem>
                    <ProfileItem >
                        <ItemSpan>Address</ItemSpan>
                       {user.address}
                    </ProfileItem>
                    <ProfileItem >
                        <ItemSpan>Phone</ItemSpan>
                       {user.Phone_Number}
                    </ProfileItem>
                    <ProfileItem >
                        <ItemSpan>Email</ItemSpan>
                       {user.email}
                    </ProfileItem>
                    <ProfileItem >  <Button  size="" type="submit" onClick={handleClick}>Edit</Button>   </ProfileItem >
                </ProfileList>
           <ProfileViweBouttons>
            <Button size="sm" id="1" type="submit" variant="secondary" onClick={historyOrQuestion}>your shoping history</Button>
            <Button size="sm" id="2" type="submit" variant="secondary" onClick={historyOrQuestion}>your questions</Button>  
            </ProfileViweBouttons>   
            </Profiles>       
        </ProfileSection>     
        <div>
        {viwe==="1"&&user.History.length===0&&<NoInformation>You did not buy anything</NoInformation>}
{viwe==="1"&&<History Payhistory={user.History} />}
{viwe==="2"&&user.Messages.length===0&&<NoInformation>You did not send any questions</NoInformation>}
{viwe==="2"&&user.Messages!==undefined&&user.Messages.map((Messege,index)=>
<ContactCon key={index}>
    <ContactHead>{Messege.createDate}, {Messege.subject}-</ContactHead>
    <br/>{Messege.message}<br/><b>{Messege.answerDate} Answer:</b> {Messege.answer}
    </ContactCon>)}
        </div>
        </React.Fragment>
    )
    
}

export default withRouter(Profile);
