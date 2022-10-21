import React from "react";

import { Container } from "./styles";
interface ISelectInputProps {
  options: { value: string | number; label: string }[];
  value?: string | number;
  onChange?: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void | Promise<void>;
}
const SelectInput: React.FC<ISelectInputProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <Container>
      <select value={value} onChange={onChange}>
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
