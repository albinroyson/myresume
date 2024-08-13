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
        <MenuItem>
        <Menu>
        Resume
        </Menu>
        </MenuItem>
        <MenuItem>
        <Menu>
    Projects
        </Menu>
        </MenuItem>
        <MenuItem>
        <Menu>
    Contacts
        </Menu>
        
        </MenuItem>
 

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
display: flex;
justify-content: end;
  
`;
const Deg = styled.p`
  
`;
const Menu =styled.span`
 font-size: 15px;

padding-right: 20px;
 
 `
 const MenuItem=styled.div`

 border-right: 1px solid #000;
 margin-right: 20px;
 `







export default Header;
