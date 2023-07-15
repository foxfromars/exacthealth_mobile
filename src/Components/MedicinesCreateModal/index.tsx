import {
  Container,
  CreateModal,
} from "./styles";
import TextField from "../TextField/";
import { useEffect, useState } from "react";
import GridTemplate from "../GridTemplate";
import Button from "../Button";
import medicineService from "../../Services/medicine.service";
import { View } from "react-native";

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

  async function handleCreate() {
    await medicineService.post(value)
      .then((e) => {
        console.log(e);
        setValue({});
        return e;
      })
      .catch((err) => {
        console.log(err);
      });
    setOpen(false);
  }

  return (
    <CreateModal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => setOpen(false)}
    >
      <Container>
        <GridTemplate
          columns={1}
        >
          <TextField
            name="name"
            label="Name"
            onChange={handleChange}
            type="text"
          />
          <TextField
            name="type"
            label="Type"
            onChange={handleChange}
            type="text"
          />
          <TextField
            name="quantity"
            label="Quantity"
            onChange={handleChange}
            type="number"
          />
          <TextField
            name="description"
            label="Description"
            onChange={handleChange}
            multiline={true}
            numberOfLines={5}
            type="text"
          />
        </GridTemplate>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <Button
            text="Cancel"
            onClick={() => setOpen(false)}
          />
          <Button
            text="Create"
            onClick={handleCreate}
          />
        </View>
      </Container>
    </CreateModal>
  );
}
