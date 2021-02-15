import styled from "styled-components";


export const  ProfileTitle=styled.h1` 
    color:rgb(102, 0, 51);
    text-align:center;
    font-family: 'Shadows Into Light', cursive;
    font-size:5em
    font-weight:bold;
    `

export const   ProfileSection=styled.div` 
    padding: 50px 0;
    overflow: hidden;
    box-shadow: 10px 5px 5px gray;
    `

    export const ProfileImag=styled.img` 
    display:flex;
    order:3;
    height:250px;
    //width:30%;
    
    `
export const  Profiles =styled.div`
    width: 100%;
    display:flex;
    justify-content: space-around;   
`

export const ProfileList=styled.ul` 
    list-style: none
    display:flex;
    flex-direction:column ;
    order:1;
    font-size:1.2em
    font-family: 'Indie Flower', cursive;
`

export const ProfileItem=styled.li`
    margin-bottom: 8px
    display:flex;
  
`
export const ProfileViweBouttons =styled.div`
   display:flex;
   justify-content: space-evenly;
   height:30px;
   flex-grow: 1;
  margin-top:35px;
  margin-left:10%;
  order:2;
  font-family: 'Indie Flower', cursive;
  font-weight:bold;
`
export const ItemSpan=styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
    `
export const SpanWeb =styled.span`
    font-weight: normal;
    color: #eb5424
`
export const ContactCon =styled.div`
    font-weight: normal;
   margin-bottom:5px;
   font-family: 'Asap', sans-serif;
   background-image: linear-gradient(to right, rgba(255,0,0,0), rgb(132, 0, 255));
`
export const ContactHead =styled.b`
color:rgb(102, 0, 51);
`
export const TableTh =styled.th`
font-size: 20px;
  text-align: center;
font-family: 'Asap', sans-serif;
`
export const TableTr =styled.tr`
font-size: 20px;
  text-align: center;
font-family: 'Indie Flower', cursive;
`
export const TableDate =styled.h4`
font-family: 'Indie Flower', cursive;
font-weight:bold;
`
export const CartImg = styled.img`
height: 45px;
width: 45px;
`
export const NoInformation = styled.div`
font-family: 'Indie Flower', cursive;
font-weight:bold;
text-align: center;
color:rgb(153, 0, 153);
font-size:2em
padding-top:2%;
padding-bottom:2%;
`