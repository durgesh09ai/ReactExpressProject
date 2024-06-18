import styled from 'styled-components';

// Login Form Styled Css

export  const Form = styled.form`
max-width: 400px;
margin: 0 auto;
padding: 20px;
border: 1px solid #ccc;
border-radius: 5px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Label = styled.label`
display: block;
margin-bottom: 5px;
`;

export const Input = styled.input`
width: 95%;
padding: 8px;
margin-bottom: 10px;
border: 1px solid #ccc;
border-radius: 3px;
`;

export const Button = styled.button`
width: 100%;
padding: 10px;
background-color: #007bff;
color: #fff;
border: none;
border-radius: 3px;
cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
`;

