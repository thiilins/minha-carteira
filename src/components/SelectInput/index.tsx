import React from "react";

import { Container } from "./styles";
interface ISelectInputProps {
  options: { value: string | number; label: string }[];
  value?: string | number;
}
const SelectInput: React.FC<ISelectInputProps> = ({ options, value }) => {
  return (
    <Container>
      <select value={value}>
        {options.map((item, index) => (
          <option value={item.value} key={index}>
            {item.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default SelectInput;
