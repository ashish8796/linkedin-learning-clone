import React, { CSSProperties } from "react";
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
  // console.log(type);

  if (type === "checkbox") {
    return (
      <Label type={type} style={label ? inputStyles : {}}>
        <Input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
        />
        {label && <span>{label}</span>}
      </Label>
    );
  } else {
    return (
      <Label type={type} style={label ? inputStyles : {}}>
        {label && <span>{label}</span>}

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

interface ILabelProps {
  type: string;
}

const inputStyles: CSSProperties = {
  margin: "10px 0",
};

const Label = styled.label`
  /* border: 1px solid red; */
  display: ${(props: ILabelProps) =>
    props.type === "checkbox" ? "flex" : "block"};

  align-items: center;
  flex-direction: ${(props: ILabelProps) =>
    props.type === "checkbox" ? "row" : "column"};
`;

const Input = styled.input`
  &[type="checkbox"] {
    width: fit-content;
    margin: 0 10px 0 0;
    width: 20px;
    height: 20px;
  }

  &[type="file"] {
    margin: 10px 0;
  }

  padding: 5px 10px;
  width: 100%;
  border: 1px solid grey;
  border-radius: 2px;
  margin: 10px 0;
  &::placeholder {
  }
`;
