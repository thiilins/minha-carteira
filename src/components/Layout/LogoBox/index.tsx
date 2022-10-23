import React from "react";

import { Container, LogoImage } from "./styles";
import Logo from "@assets/logo.svg";

const LogoBox: React.FC = () => {
  return (
    <Container>
      <LogoImage src={Logo} alt="Logo Minha Carteira" />
      <h2>Minha Carteira</h2>
    </Container>
  );
};

export default LogoBox;
