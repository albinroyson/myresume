import React from 'react';
import styled from 'styled-components';



const Header = () => {
    return (
       <HeaderContainer>
        <LeftDiv>
            <Circle>

            </Circle>
            <Name>
                Albin Royson
                
            </Name>
            <Deg>
                SoftWare Engeeier
            </Deg>

        </LeftDiv>
        <RightDiv>
        <Menu>
        Resume
        </Menu>
        <Menu>
    Projects
        </Menu>
        <Menu>
    Contacts
        </Menu>

        </RightDiv>
       </HeaderContainer>
    );
};
const HeaderContainer = styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
  
`;
const LeftDiv = styled.div`
  display: flex;
  
  align-items: center;
`;
const Circle = styled.div`
width: 25px;
height: 25px;
background-color: yellow;
border-radius: 50%;
margin-right: 5px;
  
`;
const Name = styled.p`
margin-right: 10px;
font-size: 15px;
  
`;
const RightDiv = styled.div`

  
`;
const Deg = styled.p`
  
`;
const Menu =styled.span`
 font-size: 15px;
 margin-right: 20px;
 border-right:1px black
 
 `







export default Header;
