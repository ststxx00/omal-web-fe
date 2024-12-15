// src/components/Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <h2>Menu</h2>
      <Menu>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">Contact</Link>
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
