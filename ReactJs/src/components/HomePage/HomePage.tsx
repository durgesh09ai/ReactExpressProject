import React from 'react';
import styled from 'styled-components';
import homeImage from '../../assets/images/home.jpg'

const Title = styled.h1`
margin-bottom: 20px;
text-align:center;
`;

const PTag = styled.p`
margin-top: 10px;
font-size:15px;
font-style: normal;
color:#00000;
text-align:center;
`;

const Div = styled.div`
width:100%;
`;
const Image = styled.img`
width:100%;
max-width:400px;
height:auto;
display:block;
margin:0 auto;
`;

const HomePage: React.FC = () => {
    return (
        <div>
            <Title>Welcome to the Home Page</Title>
            <PTag>This is the home page of the application.</PTag>
            <Div> <Image src={homeImage}/></Div>

        </div>
    );
};

export default HomePage;