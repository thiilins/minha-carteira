import React from "react";

import { Container } from "./styles";
import MainHeader from "./MainHeader";
import Content from "./Content";
import Aside from "./Aside";
interface ILayout {
  children?: React.ReactNode;
}
const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <Container>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
