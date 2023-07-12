import {
  Container,
  CreateModal,
} from "./styles";
import TextField from "../TextField/";
import { useEffect, useState } from "react";
import GridTemplate from "../GridTemplate";
import Button from "../Button";
import medicineService from "../../Services/medicine.service";

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
    try {
      await medicineService.post(value)
        .then((e) => {
          console.log(e);
          return e;
        })
        .catch((err) => {
          console.log(err);
          throw err;
        });
      setOpen(false);
    } catch (err) {
      console.log(err);
      throw err;
    }
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
        <GridTemplate
          columns={2}
        >
          <Button
            text="Cancel"
            onClick={() => setOpen(false)}
          />
          <Button
            text="Create"
            onClick={handleCreate}
          />
        </GridTemplate>
      </Container>
    </CreateModal>
  );
}
