import React, { useState ,useEffect} from 'react';
import styled from 'styled-components';
import { RootState,useAppDispatch  } from '../../store/store';
import { useSelector } from 'react-redux';
import { fetchUserProfile } from '../../store/Slices/MemberlistSlice';

const Title = styled.h1`
margin-bottom: 20px;
`;

const PTag = styled.p`
margin-top: 10px;
font-size:15px;
font-style: normal;
color:#00000;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Table = styled.table.attrs({ role: 'table' })`
  width: 100%;
  max-width: 90%;
  border-collapse: collapse;
  margin: 0 auto;
`;

const TableHeader = styled.th.attrs({ role: 'columnheader' })`
  text-align: left;
  padding: 8px;
  background-color: #efb7b7;
`;

const TableRow = styled.tr.attrs({ role: 'row' })`
  border-bottom: 1px solid #dddddd;
`;

const TableData = styled.td.attrs({ role: 'cell' })`
  text-align: left;
  padding: 8px;
  background-color: #efe7ec;
`;

const AboutUs: React.FC = () => {
const defaultData = ``;

const [data,setData] = useState(defaultData)


function updateAboutUs(){
    setData(`updated with the latest data`)
}
const dispatch = useAppDispatch();

const { memberlist, loading, error } = useSelector((state: RootState) => state.memberlist);

useEffect(() => {
  dispatch(fetchUserProfile());
}, [dispatch]);


console.log('durgesh',memberlist);
if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

    return (
    <>

<Container>

              { memberlist && (
               <Table>
                <thead>
                <TableRow>
                  <TableHeader>ID</TableHeader>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Email</TableHeader>
                  <TableHeader>Desigination</TableHeader>
                  <TableHeader>Address</TableHeader>
                  <TableHeader>Contact No</TableHeader>
                  <TableHeader>Grade</TableHeader>
                </TableRow>
               </thead>
               {memberlist.map((member)=>(
                <thead>
                <TableRow key={member.id}>
                <TableData>{member.id}</TableData>
                <TableData>{member.name}</TableData>
                <TableData>{member.email}</TableData>
                <TableData>{member.designition}</TableData>
                <TableData>{member.address}</TableData>
                <TableData>{member.contact}</TableData>
                <TableData>{member.grade}</TableData>
              </TableRow>
              </thead>
               ))}

              </Table>
                 )}
          </Container>


    <button onClick={()=>updateAboutUs()}>Update</button>
    <Title>About Us</Title>
    <PTag>Kenan Foundation Asia believes in a world where everyone has the right to build a better life for themselves, 
        their family, and their community. Every day, we are working in Thailand and the region to inspire students,
        develop skilled people, and grow strong leaders by empowering them with the knowledge, technology,
        and skills necessary for a better future. Whether it’s an entrepreneur, a small business owner,
        a teacher, a student, a community leader, or a non-profit manager, we conduct tailored, engaging
        activities to train, coach and equip them so they can achieve their dreams</PTag>
        <PTag>{ data }</PTag>
        </>
);
};

export default AboutUs;
