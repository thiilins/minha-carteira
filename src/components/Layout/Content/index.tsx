import React from "react";

import { Container } from "./styles";
interface IContent {
  children?: React.ReactNode;
}
const Content: React.FC<IContent> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Content;
