import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import * as FaIcons from "react-icons/fa";

import { SidebarData } from "./SidebarData";

const Navbar = styled.div`
  display: flex;
  z-index: 3;
  top: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  background-color: #0d4578e6;
  position: fixed;
`;

const MenuIconOpen = styled(Link)`
  display: flex;
  justify-content: start;
  font-size: 1.5rem;
  margin-left: 2rem;
  color: #ffffff;
`;

const MenuIconClose = styled(Link)`
  display: flex;
  justify-content: end;
  font-size: 1.5rem;
  margin-top: 0.75rem;
  margin-right: 1rem;
  color: #ffffff;
`;

const MenuAccount = styled(Link)`
  display: flex;
  align-items: center;
  color: #fffbfb;
  margin-right: 2rem;
`;

const TextAccount = styled.div(() => ({
  marginLeft: "0.5rem",
  fontFamily: "Roboto",
  fontWeight: 900,
  fontStyle: "normal",
  fontSize: "16px",
  lineHeight: "26px",
  color: "#fffbfb",
  "&:hover": {
    cursor: "pointer",
  },
}));

const SidebarMenu = styled.div<{ close: boolean }>`
  width: 280px;
  height: 100vh;
  z-index: 3;
  background-color: #02366cdb;
  position: fixed;
  top: 0;
  left: ${({ close }) => (close ? "0" : "-100%")};
  transition: 0.6s;
`;

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 90px;
  padding: 1rem 0 1.25rem;
`;

const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 20px;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    background-color: #002f5ac4;
    width: 100%;
    height: 45px;
    text-align: center;
    border-radius: 5px;
    margin: 0 2rem;
    padding: 0 0.5rem;
  }
`;

const Sidebar: React.FunctionComponent = () => {
  const [close, setClose] = useState(false);
  const showSidebar = () => setClose(!close);
  return (
    <>
      <Navbar>
        <MenuIconOpen to="#" onClick={showSidebar}>
          <FaIcons.FaBars />
        </MenuIconOpen>
        <MenuAccount to="#">
          <FaIcons.FaUser />
          <TextAccount>Account</TextAccount>
        </MenuAccount>
      </Navbar>

      <SidebarMenu close={close}>
        <MenuIconClose to="#" onClick={showSidebar}>
          <FaIcons.FaTimes />
        </MenuIconClose>

        {SidebarData.map((item, index) => {
          return (
            <MenuItems key={index}>
              <MenuItemLinks to={item.path}>
                {item.icon}
                <span style={{ marginLeft: "16px" }}>{item.title}</span>
              </MenuItemLinks>
            </MenuItems>
          );
        })}
      </SidebarMenu>
    </>
  );
};

export default Sidebar;
