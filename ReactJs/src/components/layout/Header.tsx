import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { logout } from '../../store/Slices/authSlice';
import { clearProfile } from '../../store/Slices/profileSlice';

import styled from 'styled-components';

const HeaderTag = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  `;


  const Navlinks = styled.nav`
  display: flex;
  gap: 15px;
  overflow-x: auto; /* Enable horizontal scrolling */
  white-space: nowrap; /* Prevent line breaks within items */
  
  @media (max-width: 768px) {
    width: 100%;
  }

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #007bff;
  }
`;

const NavLinksA = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
&:hover {
  text-decoration: underline;
}
`;

 const Button = styled.button`
width: 100%;
padding: 0px;
background-color: #007bff;
color: #fff;
border: none;
border-radius: 3px;
cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Title = styled.h1`
margin-bottom: 20px;
`;

const AnchorLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

  const Header: React.FC = () => {

    const role = useSelector((state: RootState) => state.auth.role);
    const dispatch = useDispatch();
  
    const handleLogout = () => {
      dispatch(logout());
      dispatch(clearProfile());
    };

    return (
    <HeaderTag>
      <Title>My Application</Title>
      <Navlinks>
      <NavLinksA to="/">Home</NavLinksA>
      {role === 'user' && <NavLinksA to="/user-dashboard">User Dashboard</NavLinksA>}
      {role === 'admin' && <NavLinksA to="/admin-dashboard">Admin Dashboard</NavLinksA>}
      {role === 'admin' && <NavLinksA to="/adminpage">Admin Page</NavLinksA>}
      <NavLinksA to="/members">Members</NavLinksA>
      <NavLinksA to="/aboutus">About Us</NavLinksA>
      {!role && <NavLinksA to="/login">Login</NavLinksA>}
      {role && (<AnchorLink onClick={handleLogout}>Logout</AnchorLink>
)}
      </Navlinks>
    </HeaderTag>
  );
};

export default Header;
