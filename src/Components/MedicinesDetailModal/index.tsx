import {
  useEffect, useState
} from "react";

import medicineService from "../../Services/medicine.service";
import Button from "../Button";
import CloseButton from "../CloseButton";

import {
  Container,
  DetailModal,
  ElementsText,
} from "./styles";

export default function MedicinesDetailModal({
  id,
  isOpen,
  setOpen,
}: any) {

  const [medicine, setMedicine] = useState<any>(null)

  useEffect(() => {
    if (id) {
      async function getMedicine() {
        await medicineService.getOne(id)
          .then((e: any) => {
            setMedicine(e[0]);
          })
          .catch((error) => {
            console.log(error);
          })
      }

      getMedicine();
    }
  }, [id]);

  async function handleDelete() {
    await medicineService.deleteOne(id)
      .then((e) => {
        console.log(e);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <DetailModal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => setOpen(false)}
    >
      <Container>
        <ElementsText>{medicine ? medicine.id : null}</ElementsText>
        <ElementsText>{medicine ? medicine.name : null}</ElementsText>
        <ElementsText>{medicine ? medicine.type : null}</ElementsText>
        <ElementsText>{medicine ? medicine.description : null}</ElementsText>
        <Button
          text="excluir"
          onClick={handleDelete}
        />
      </Container>
      <CloseButton
        onPress={() => setOpen(false)}
      />
    </DetailModal>
  );
}
