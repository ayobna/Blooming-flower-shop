import styled from 'styled-components';

export const HeadTitel = styled.h1`
text-align: center;
background-image: url('images/home_page/background3.jpg');
background-size: cover;
background-position: center;
padding-top: 30px;
padding-bottom:30px;
border-bottom: 2px solid #7FFFD4;
font-family: 'Indie Flower', cursive;
font-weight:bold;
`

export const ItemInfo = styled.div`
    width: 30%;
    float: left;
    position: relative;
    margin-top: 20px;
    box-shadow: 10px 5px 5px gray;
    font-family: 'Indie Flower', cursive;

    `
export const Images = styled.img`  
    width: 200px;; 
    height :200px;
`

export const Border = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-between;
    text-align: center;
`
export const CartInfoTitle = styled.h3`
margin-right: 100px;
text-align: center;
font-family: 'Indie Flower', cursive;
font-weight:bold;
text-decoration: underline ;     
    `
export const CartInfo = styled.div`
font-family: 'Indie Flower', cursive;
    `

export const ItemName = styled.b`
   // text-decoration: underline ; 
`

export const ItemList = styled.div`
    margin-left: 25px;
    flex: 9;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    
    `
export const InputNumber = styled.input`
  width: 18%;
`
export const Line = styled.div`
border-left: 2px solid gray;
height: auto;
margin-right: 35px;
`


