import React from "react";
import styled from "styled-components";

interface ICreateInputProps {
  label: string;
  type: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  value: any;
  placeholder: string;
  required: boolean;
}

export default function CrateInput({
  label,
  name,
  type,
  handleChange,
  value,
  placeholder,
  required,
}: ICreateInputProps) {
  if (type === "checkbox") {
    return (
      <Label>
        <Input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
        />
        <span>{label}</span>
      </Label>
    );
  } else {
    return (
      <Label>
        <span>{label}</span>

        <Input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
        />
      </Label>
    );
  }
}

const Label = styled.label``;
const Input = styled.input``;
