import React from "react";

import { Container, Profile, Username, Welcome } from "./styles";
import ToggleTheme from "../ToggleTheme";
import LogoBox from "../LogoBox";
const MainHeader: React.FC = () => {
  return (
    <Container>
      <div className="toggle">
        <ToggleTheme />
      </div>
      <div className="logo">
      
        <LogoBox />
      </div>
      <Profile>
        <Welcome>Olá,</Welcome>
        <Username>Thiago Lins</Username>
      </Profile>
    </Container>
  );
};

export default MainHeader;
