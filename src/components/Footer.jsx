import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer `
position: absolute;
bottom: 0;
left: 0;
heigth: 40px;
width: 100%;
display: flex;
justify-content: center;
background-color: #8793;
`
const FooterItem = styled.div `
text-decoration: none;
font-size: 16;
color: #000;
font-weigth: bold;
bottom: 0;
`

export default function footer(){
  return (
    <React.Fragment>
    <Footer>
      <FooterItem>
        Aula Sobre Styled Components
      </FooterItem>
    </Footer>
    </React.Fragment>
  );
}