import React from 'react';
import styled from 'styled-components';


const Title1 = styled.h1`
margin-bottom: 20px;
`;

const Title2 = styled.h2`
margin-bottom: 20px;
`;

const Text = styled.p`
margin-top: 10px;
font-size:15px;
font-style: normal;
color:#00000;
`;

const ArticleTag = styled.article`
background: #eee;
padding: 0.5rem;
border-radius: 2px;
`;

const AdminPage: React.FC = () => {
    return(
     <>
    <Title1>Admin Page:</Title1>
    <main>

    <ArticleTag>
    <Title2>Kenan Foundation Asia </Title2>
        <Text>Kenan Foundation Asia believes in a world where everyone has the right to build a better life for themselves, 
        their family, and their community. Every day, we are working in Thailand and the region to inspire students,
        develop skilled people, and grow strong leaders by empowering them with the knowledge, technology,
        and skills necessary for a better future. Whether it’s an entrepreneur, a small business owner,
        a teacher, a student, a community leader, or a non-profit manager, we conduct tailored, engaging
        activities to train, coach and equip them so they can achieve their dreams.</Text>
    </ArticleTag>
    <ArticleTag>
    <Title2>Article 2</Title2>
    <Text>This is some content for the second article. It will adjust based on the screen size.</Text>
    </ArticleTag>
    <ArticleTag>
    <Title2>Article 3</Title2>
    <Text>This is some content for the third article. It will adjust based on the screen size.</Text>
    </ArticleTag>

    </main>

    </>);
};

export default AdminPage;
