import styled from 'styled-components'

export const ProductSection = styled.div`
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff
  
`

export const ProductTitle = styled.h2`
    font-size: 60px; 
    font-family: 'Shadows Into Light', cursive;
`   

export const Span = styled.span`
    font-weight: normal
`
export const ProductPart = styled.div`
 background-image: url('${props=>props.image}');
 background-repeat: no-repeat; 
 background-size: cover; 
    display:flex;
    margin-top: 20px;
    width: 30%;
    float: left;
    height: auto;
    padding: 100px 0;
    box-sizing: border-box;
    text-align: center;
    margin-left: 5%;
    margin-left: ${props => props.first === 1 ? '0' : '5%'}
    font-family: 'Indie Flower', cursive;
`

export const Icon = styled.i`
    color: #888;
    margin-bottom: 20px
`

export const PartTitle = styled.h4`
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px
`

export const Line = styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 20px
`

export const PartDesc = styled.p`
    font-size: 14px;
    color: #000000;
    padding: 20px
`
