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
        <MenuItem>
          <RiDashboardLine />
          Dashboard
        </MenuItem>
        <MenuItem>
          <RiAddFill />
          Novo Registro
        </MenuItem>
        <MenuItem>
          <RiArrowUpLine />
          Entradas
        </MenuItem>
        <MenuItem>
          <RiArrowDownLine />
          Saídas
        </MenuItem>
        <MenuItem>
          <RiLogoutBoxRLine />
          Sair
        </MenuItem>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
