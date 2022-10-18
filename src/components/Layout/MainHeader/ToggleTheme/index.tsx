import usePersistedState from "@hooks/usePersistedState";
import React from "react";

import { Container } from "./styles";

const ToggleTheme: React.FC = () => {
  const [userTheme, setUserTheme] = usePersistedState<"light" | "dark">(
    "dark",
    "defaultTheme",
    true
  );
  return (
    <Container>
      <div className="toggleWrapper">
        <input
          type="checkbox"
          className="dn"
          id="dn"
          checked={userTheme === "dark"}
          onChange={() => {
            setUserTheme((prev) => (prev === "dark" ? "light" : "dark"));
            window.location.reload();
          }}
        />
        <label htmlFor="dn" className="toggle">
          <span className="toggle__handler">
            <span className="crater crater--1"></span>
            <span className="crater crater--2"></span>
            <span className="crater crater--3"></span>
          </span>
          <span className="star star--1"></span>
          <span className="star star--2"></span>
          <span className="star star--3"></span>
          <span className="star star--4"></span>
          <span className="star star--5"></span>
          <span className="star star--6"></span>
        </label>
      </div>
    </Container>
  );
};

export default ToggleTheme;
