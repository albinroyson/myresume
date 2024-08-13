import React from "react";
import styled from "styled-components";
import img from "../assets/WhatsApp Image 2024-08-13 at 21.17.32_0105ced2.jpg";

const Home = () => {
    return (
        <MainContainer>
            <LeftDiv>
                <ImgContainer>
                    <Img src={img} />
                </ImgContainer>
            </LeftDiv>
            <RightDiv>
                <Header>Hello</Header>
                <Tittle>A Bit About Me</Tittle>
                <Desc>
                    {" "}
                    I'm a paragraph. Click here to add your own text and edit
                    me. I’m a great place for you to tell a story and let your
                    users know a little more about you.
                </Desc>
                <Btns>
                    <Btnitem>Resume</Btnitem>
                    <Btnitem>Projects</Btnitem>
                    <Btnitem>Contact</Btnitem>
                </Btns>
            </RightDiv>
        </MainContainer>
    );
};

export default Home;

const MainContainer = styled.div`
    margin-top: 108px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const LeftDiv = styled.div`
    margin-right: 46px;
`;
const RightDiv = styled.div``;
const ImgContainer = styled.div``;
const Img = styled.img`
    display: block;
    width: 490px;
    height: 514px;
    object-fit: cover;
    border-radius: 50%;
`;
const Header = styled.h1`
    font-size: 77px;
    margin: 0;
    padding: 0;
`;
const Tittle = styled.h3`
    font-size: 22px;
    margin: 2px 0;
`;
const Desc = styled.p`
    width: 283px;
`;
const Btns = styled.div``;
const Btnitem = styled.button``;
