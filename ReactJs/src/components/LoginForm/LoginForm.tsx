import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/store';
import { setProfile } from '../../store/Slices/profileSlice';
import { login } from '../../store/Slices/authSlice';
import { CREDENTIALS } from '../../credentials';
import { PROFILES } from '../../profile';

import { Form, Title, Label, Input, Button, ErrorMessage } from './LoginFormCss';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const role = useSelector((state: RootState) => state.auth.role);
  console.log('Current role:', role);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Invalid Username/Password.');
      return;
    }

    const user = CREDENTIALS.find(
      (cred) => cred.email === email && cred.password === password
    );

    if (user) {
      const userProfile = PROFILES.find((profile) => profile.email === user.email);
      if (userProfile) {
        const Uprofile =  {
            fname: userProfile.fname,
            lname: userProfile.lname,
            email: userProfile.email,
            department: userProfile.department
        }
      dispatch(setProfile(Uprofile));
      }

      dispatch(login({ role: user.role as 'user' | 'admin', email: user.email }));
    } else {
      setError('User does not exist');
    }
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Title>Login</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Label htmlFor="email">Email:</Label>
      <Input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Label htmlFor="password">Password:</Label>
      <Input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;
