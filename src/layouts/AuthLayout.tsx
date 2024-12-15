// src/layouts/AuthLayout.tsx
import React from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default AuthLayout;
