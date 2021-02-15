import styled from 'styled-components'

export const NavbarSection = styled.div`
    padding: 5px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
`

export const Logo = styled.div`
    width: 15%;
    float: left;
  
`

export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold
    font-family: 'Dancing Script', cursive;
    color:red;
`

export const UlList = styled.ul`
    width: 75%;
    float: left;
    list-style: none;
    padding:0
 
    
`

export const ListItem = styled.li`
    display: inline-block;
    font-family: 'Shadows Into Light', cursive;
    font-size:23px;
`

export const Anchor = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover {
        color: #eb5424
    }
`
export const LogName = styled.div`
color:red;
font-family: 'Indie Flower', cursive;
    
`