import React from "react";
import Logo from "@assets/logo.svg";
import {
  RiDashboardLine,
  RiArrowUpLine,
  RiArrowDownLine,
  RiLogoutBoxRLine,
  RiAddFill,
} from "react-icons/ri";
import {
  Container,
  Header,
  LogoImage,
  MenuContainer,
  MenuItem,
} from "./styles";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImage src={Logo} alt="Logo Minha Carteira" />
        <h2>Minha Carteira</h2>
      </Header>
      <MenuContainer>
        <MenuItem to="/dashboard">
          <RiDashboardLine />
          Dashboard
        </MenuItem>
        <MenuItem to="/add-new">
          <RiAddFill />
          Novo Registro
        </MenuItem>
        <MenuItem to="/list/input">
          <RiArrowUpLine />
          Entradas
        </MenuItem>
        <MenuItem to="/list/output">
          <RiArrowDownLine />
          Saídas
        </MenuItem>
        <MenuItem to="/exit">
          <RiLogoutBoxRLine />
          Sair
        </MenuItem>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
