import React from "react";

import { Container, Profile, Username, Welcome } from "./styles";
import ToggleTheme from "./ToggleTheme";
const MainHeader: React.FC = () => {
  return (
    <Container>
      <ToggleTheme />
      <Profile>
        <Welcome>Olá,</Welcome>
        <Username>Thiago Lins</Username>
      </Profile>
    </Container>
  );
};

export default MainHeader;
