import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface memberT {
    id: number;
    name: string;
    email: string;
    designition: string;
    address: string;
    contact: string;
    grade: string;

  }


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const Table = styled.table`
  width: 100%;
  max-width: 90%;
  border-collapse: collapse;
  margin: 0 auto;
`;
const TableHeader = styled.th`
  text-align: left;
  padding: 8px;
  background-color: #efb7b7;
`;
const TableRow = styled.tr`
  border-bottom: 1px solid #dddddd;
`;

const TableData = styled.td`
  text-align: left;
  padding: 8px;
  background-color:#efe7ec
`;



const Members: React.FC = () => {

  const [members, setmember] = useState<memberT[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/items');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setmember(data);
      } catch (error:unknown) {
        if (error instanceof Error) {
            setError(error.message);
          } else {
            setError('An unknown error occurred');
          }
         }finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

    return (
            <Container>

              { members && (
               <Table>
                <TableRow>
                  <TableHeader>ID</TableHeader>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Email</TableHeader>
                  <TableHeader>Desigination</TableHeader>
                  <TableHeader>Address</TableHeader>
                  <TableHeader>Contact No</TableHeader>
                  <TableHeader>Grade</TableHeader>
                </TableRow>

               {members.map((member)=>(
                <TableRow>
                <TableData>{member.id}</TableData>
                <TableData>{member.name}</TableData>
                <TableData>{member.email}</TableData>
                <TableData>{member.designition}</TableData>
                <TableData>{member.address}</TableData>
                <TableData>{member.contact}</TableData>
                <TableData>{member.grade}</TableData>
              </TableRow>
               ))}

              </Table>
                 )}
          </Container>
    );
};

export default Members;