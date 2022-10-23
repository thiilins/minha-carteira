import React, { useState } from "react";
import logoImg from "@assets/logo.svg";
import { useAuth } from "@/contexts/AuthContext";
import {
  Container,
  Logo,
  Form,
  FormTitle,
  FormContent,
  DemoData,
} from "./styles";
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
        <DemoData>
          <tr className="colSpan">
            <th>Dados de Acesso</th>
          </tr>
          <tr>
            <th>Usuário</th>
            <th>Senha</th>
            <th></th>
          </tr>
          <tr>
            <td>teste@teste.com.br</td>
            <td className="value2">123</td>
            <td>
              <Button
                type="button"
                onClick={() => {
                  setEmail("teste@teste.com.br");
                  setPassword("123");
                  signIn("teste@teste.com.br", "123");
                }}
              >
                Login
              </Button>
            </td>
          </tr>
        </DemoData>
      </FormContent>
    </Container>
  );
};

export default SignIn;
