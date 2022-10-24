import React, { useState, useCallback } from "react";
import Logo from "@assets/logo.svg";
import {
  RiDashboardLine,
  RiArrowUpLine,
  RiArrowDownLine,
  RiLogoutBoxRLine,
  RiAddFill,
  RiCloseFill,
  RiMenu2Fill,
} from "react-icons/ri";
import {
  Container,
  Header,
  LogoImage,
  MenuContainer,
  MenuItem,
  MenuBtn,
  ToggleMenu,
} from "./styles";
import { useAuth } from "@/contexts/AuthContext";
import ToggleTheme from "../ToggleTheme";

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleOpenCloseMenu = useCallback(() => {
    setMenuIsOpen((prev) => !prev);
  }, []);
  return (
    <Container menuIsOpen={menuIsOpen}>
      <Header className="logo__box">
        <ToggleMenu onClick={() => handleOpenCloseMenu()}>
          {menuIsOpen ? <RiCloseFill /> : <RiMenu2Fill />}
        </ToggleMenu>
        <LogoImage src={Logo} alt="Logo Minha Carteira" />
        <h2>Minha Carteira</h2>
      </Header>

      <div className="content">
        <MenuContainer>
          <MenuItem to="/dashboard">
            <RiDashboardLine />
            Dashboard
          </MenuItem>
          {/* <MenuItem to="/add-new">
            <RiAddFill />
            Novo Registro
          </MenuItem> */}
          <MenuItem to="/list/input">
            <RiArrowUpLine />
            Entradas
          </MenuItem>
          <MenuItem to="/list/output">
            <RiArrowDownLine />
            Saídas
          </MenuItem>
          <MenuBtn onClick={() => signOut()}>
            <RiLogoutBoxRLine />
            Sair
          </MenuBtn>
        </MenuContainer>
        <div className="toggle">
          <ToggleTheme />
        </div>
      </div>
    </Container>
  );
};

export default Aside;
