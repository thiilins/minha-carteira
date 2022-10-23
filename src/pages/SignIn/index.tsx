import React, { useState } from "react";
import logoImg from "@assets/logo.svg";
import { useAuth } from "@/contexts/AuthContext";
import { Container, Logo, Form, FormTitle, FormContent } from "./styles";
import Button from "@/components/Button";
import Input from "@/components/Input";
const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signIn } = useAuth();
  return (
    <Container>
      <FormContent>
        <Logo>
          <img src={logoImg} alt="Minha Carteira" />
          <h2>Minha Carteira</h2>
        </Logo>
        <Form onSubmit={() => signIn(email, password)}>
          <FormTitle>Entrar</FormTitle>

          <fieldset>
            <Input
              type="email"
              placeholder="e-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>

          <Button type="submit">Acessar</Button>
        </Form>
      </FormContent>
    </Container>
  );
};

export default SignIn;
