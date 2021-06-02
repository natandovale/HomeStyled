import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
background-color:#457667;
position: relative;
display:flex;
justify-content:space-between;
width:100%;
height: 60px;
`
const Item = styled.div`
font-size: 14px;
font-family: 'Read';
font-weigth: bold;
color: #fff;
`

export default function Header() {
  return(
    <Nav>
     <Item>Home</Item>
     <Item>Sobre</Item>
     <Item>Contatos</Item>
    </Nav>
    
  );
}