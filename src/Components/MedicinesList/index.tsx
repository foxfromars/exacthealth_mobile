import React, { ReactElement, useState } from 'react';
import { MedicineListContainer } from "./styles";

interface Props {
  children: Array<ReactElement>;
}

export default function GridTemplate({
  children,
}: Props) {
  console.log(children);

  return (
    <MedicineListContainer>
      {children}
    </MedicineListContainer>
  );
};
