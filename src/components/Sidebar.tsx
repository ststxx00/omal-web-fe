// src/components/Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <h2>오늘의 말씀</h2>
      <Menu>
        <MenuItem>
          <Link to="/daily-reading">묵상</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/word">단어</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/notification">알림</Link>
        </MenuItem>
      </Menu>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
  box-sizing: border-box;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: #333;

    &:hover {
      color: #007bff;
    }
  }
`;

export default Sidebar;
