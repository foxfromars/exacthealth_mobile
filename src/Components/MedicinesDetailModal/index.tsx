import {
  useEffect, useState
} from "react";

import medicineService from "../../Services/medicine.service";

import {
  Container,
  DetailModal,
} from "./styles";

export default function MedicinesDetailModal({
  id,
  isOpen,
  setOpen,
}: any) {

  const [medicine, setMedicine] = useState<any>(null)
  console.log(medicine);

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

  return (
    <DetailModal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => setOpen(false)}
    >
      <Container>
      </Container>
    </DetailModal>
  );
}
