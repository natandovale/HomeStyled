import React from 'react';
import styled from 'styled-components';

const Content = styled.main `

width: 700px;
height: 500px;
margin: 0 auto;
box-sizing: border-box;
`
const ContentItem = styled.p `
color: #000;
text-align: center;
font-family: "Read";
`


export default function content(){
  return(
   <React.Fragment>
    <Content>
      <ContentItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ContentItem>
    </Content>
   </React.Fragment>
  );
}
Content;