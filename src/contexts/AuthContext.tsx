import React, { createContext, useState, useContext } from "react";

interface IAuthContext {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);
interface IAuthProviderProps {
  children: React.ReactNode;
}
const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem("@MC:logged");

    return !!isLogged;
  });

  const signIn = (email: string, password: string) => {
    if (email === "falecom@thiagolins.dev.br" && password === "123456") {
      localStorage.setItem("@MC:logged", "true");
      setLogged(true);
    } else {
      alert("Senha ou usuário inválidos!");
    }
  };

  const signOut = () => {
    localStorage.removeItem("@minha-carteira:logged");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
