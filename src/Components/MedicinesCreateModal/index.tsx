import {
  View,
  Text,
} from "react-native";

import {
  Container,
  CreateModal,
  TextContainerTwo,
} from "./styles";
import TextField from "../TextField/";
import { useEffect, useState } from "react";
import GridTemplate from "../GridTemplate";

interface Props {
  isOpen: boolean;
  setOpen: any;
}

export default function MedicinesCreateModal({
  isOpen,
  setOpen,
}: Props) {
  const [value, setValue] = useState<any>({});

  function handleChange(text: string, name: string) {
    setValue({
      ...value,
      [name]: text,
    });
  }

  useEffect(() => {
    console.log(value);
  }, [value])

  return (
    <CreateModal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => setOpen(false)}
    >
      <Container>
        <GridTemplate
          columns={2}
        >
          <TextField
            name="name"
            label="Name"
            onChange={handleChange}
          />
          <TextField
            name="type"
            label="Type"
            onChange={handleChange}
          />
          <TextField
            name="description"
            label="Description"
            onChange={handleChange}
            multiline={true}
            numberOfLines={5}
          />
        </GridTemplate>
      </Container>
    </CreateModal>
  );
}
