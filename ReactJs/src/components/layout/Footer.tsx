import React from 'react';
import styled from 'styled-components';

const FooterTag = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
background-color: #137bea;
color: white;
font-size: 12px;
`;

const Footer: React.FC = () => {
    return(
     <> 
     <FooterTag>
       Copyright © 2024 ABC Pvt.Ltd.All Rights Reserved.
        </FooterTag>
     </>);
};

export default Footer;
