// src/pages/Login.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { loginUser } from "../api/userApi"
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await loginUser(userId, password);
      console.log('로그인 성공:', data);
      localStorage.setItem('access_token', data.access_token);
      navigate('/daily-reading'); // Redirect to DailyReading page
    } catch (err) {
      setError('로그인 실패. 다시 시도해 주세요.');
      console.error(err);
      alert('로그인 실패. 다시 시도해 주세요.');
    }
  };

  return (
    <LoginContainer>
      <Title>Welcome 😀</Title>
      <Title>오늘의 말씀 관리자 페이지입니다.</Title>
      <Form>
        <Input placeholder="ID" onChange={(e) => setUserId(e.target.value)} />
        <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleLogin}>Login</Button>
      </Form>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  width: 350px;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Login;
