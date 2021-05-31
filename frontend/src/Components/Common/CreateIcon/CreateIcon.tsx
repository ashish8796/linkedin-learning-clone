import React, { ReactHTMLElement } from "react";

interface ICreateIconProps {
  path: string;
}

export default function CreateIcon({ path }: ICreateIconProps) {
  return (
    <div>
      <img src={path} alt="" />
    </div>
  );
}
