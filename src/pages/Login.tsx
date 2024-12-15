// src/pages/Login.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { loginUser } from "../api/userApi";

const Login: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const handleLogin = async () => {
    try {
      const data = await loginUser(id, password);
      console.log('로그인 성공:', data);
      // 로그인 성공 후 처리 (예: 토큰 저장, 리디렉션 등)
    } catch (err) {
      setError('로그인 실패. 다시 시도해 주세요.');
      console.error(err);
    }
  };

  return (
    <LoginContainer>
      <Title>Welcome 😀</Title>
      <Title>오늘의 말씀 관리자 페이지입니다.</Title>
      <Form>
        <Input placeholder="ID" onChange={(e) => setId(e.target.value)} />
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
