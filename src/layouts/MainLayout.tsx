// src/layouts/MainLayout.tsx
import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const LayoutContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

export default MainLayout;
