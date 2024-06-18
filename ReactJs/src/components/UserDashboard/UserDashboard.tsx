import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styled from 'styled-components';
import userImage from '../../assets/images/user.png'

const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  max-width: 500px;
  border-collapse: collapse;
  margin: 0 auto;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #dddddd;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 8px;
  background-color: #efb7b7;
`;

const TableHeader1 = styled.th`
  text-align: center;
  padding: 8px;
  background-color: #007bff;
`;
const TableData = styled.td`
  text-align: left;
  padding: 8px;
  background-color:#e0a9cf
`;

const UserDashboard: React.FC = () => {
    const profileDetail = useSelector((state: RootState) => state.profile.profile);

    return (
<Container>
  <Title>{profileDetail ? `Hi, ${profileDetail.fname}` : ''}</Title>
  <ImageContainer>
    <Image src={userImage} alt="User Profile" />
  </ImageContainer>
  { profileDetail && (
  <Table>
    <tbody>
    <TableRow>
        <TableHeader1  colSpan={2}>Profile Detail:</TableHeader1>
    </TableRow>
      <TableRow>
        <TableHeader>First Name</TableHeader>
        <TableData>{profileDetail.fname}</TableData>
      </TableRow>
      <TableRow>
        <TableHeader>Last Name</TableHeader>
        <TableData>{profileDetail.lname}</TableData>
      </TableRow>
      <TableRow>
        <TableHeader>Email</TableHeader>
        <TableData>{profileDetail.email}</TableData>
      </TableRow>
      <TableRow>
        <TableHeader>Department</TableHeader>
        <TableData>{profileDetail.department}</TableData>
      </TableRow>
    </tbody>
  </Table>
  )}
</Container>
);
}

export default UserDashboard;
