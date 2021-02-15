import styled from 'styled-components'

export const ContactSection = styled.div`
    padding: 50px 0;
    text-align: center
    font-family: 'Indie Flower', cursive;
    background-repeat: no-repeat;
     background-image: url('images/backgrounds/background10.jpg');
    background-size: cover;
     background-position: center;
    
`

export const ContactTitle = styled.h2`
    font-size: 60px;
    margin-bottom: 30px
    font-family: 'Shadows Into Light', cursive;
    font-weight:bold;
    text-decoration: underline;   
    color:rgb(153, 204, 255);  
`

export const Form = styled.form`
    width: 70%;
    margin: auto;
`

export const Input = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px
`

export const FormInput = styled.div`
    overflow: hidden
`
export const InputText = styled(Input)`
    float: left;
    width: 49%;
    font-family: 'Indie Flower', cursive;
  font-weight:bold;
  color:rgb(0, 89, 179);
`
export const InputEmail = styled(Input)`
    float: right;
    width: 49%;
    font-family: 'Indie Flower', cursive;
  font-weight:bold;
  color:rgb(0, 89, 179);
`

export const InputExp = styled(Input)`
    width: 100%;
`
export const TextArea = styled.textarea`
    width: 100%;
    outline: 0;
    background: #ccc
`

export const InputSubmit = styled(Input)`
    width: 60%;
    background: rgb(153, 204, 255);
    border: 1px solid #ccc;
    cursor: pointer
    font-family: 'Indie Flower', cursive;

`
export const RemainderCont = styled.div`
color:red;
font-size: 20px;
font-weight:bold;
`