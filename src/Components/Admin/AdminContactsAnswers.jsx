import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import { TextArea ,HistoryUserMesagges} from './style'

function AdminContactsAnswers(props) {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [Answer, setAnswer] = useState("")

    function SubmitAnswer(){
let UpdateAnswer={id:props.mes.id,createDate:props.mes.createDate,subject:props.mes.subject,message:props.mes.message,answerDate:date,answer:Answer}
props.updateMasseges(UpdateAnswer,props.email)
    }

  return (
    <div>
      <HistoryUserMesagges><b>{props.mes.id} Date:</b> {props.mes.createDate}<br/> <b>Subject:</b> {props.mes.subject}<br/>
      <b>Massege:</b><br/> <TextArea cols="30" rows="10" value={props.mes.message}></TextArea><br/>
      <b>Answer {props.mes.answerDate}:</b> {props.mes.answer}<br/>
      <TextArea cols="30" rows="10" onChange={(e)=>setAnswer(e.target.value)}>your answer</TextArea><br/>
      <Button  type="submit" onClick={SubmitAnswer}>Submit</Button></HistoryUserMesagges>
    </div>
  )
}

export default AdminContactsAnswers
