import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import styled from 'styled-components';

const DivTag = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
`;

const Main = styled.main`
flex: 1;
padding: 20px;
`;

const Layout: React.FC = () => {
    return (
      <DivTag>
        <Header />
        <Main>
        <Outlet />
        </Main>
        <Footer />
      </DivTag>
    );
  };

export default Layout;
