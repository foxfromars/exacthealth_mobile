import React, {
  useEffect,
  useState,
} from "react";
import {
  RefreshControl,
  ScrollView
} from "react-native";

import SessionTitle from "../../Components/SessionTitle";
import medicineService from "../../Services/medicine.service";
import MedicinesListItem from "../../Components/MedicinesListItem";
import FloatButtonCreateMedicines from "../../Components/FloatButtonCreateMedicines";
import MedicinesCreateModal from "../../Components/MedicinesCreateModal";
import MedicinesList from "../../Components/MedicinesList";


export default function Medicines() {
  const [items, setItems] = useState<any>();
  const [createMedicineModal, setCreateMedicineModal] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  useEffect(() => {
    medicineService.getAll()
      .then((result) => {
        setItems(result);
      });
  }, []);

  async function onRefresh() {
    setRefreshing(true);
    medicineService.getAll()
      .then((result) => {
        console.log(result);
        setItems(result);
      })
      .catch((err) => {
        console.log(err);
      });
    setRefreshing(false);
  }

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <SessionTitle
          primary="Medicines"
        />
        <MedicinesList>
          {
            items ? items.map((e: any) => {
              return <MedicinesListItem
                id={e.id}
                name={e.name}
                type={e.type}
                quantity={e.quantity}
                description={e.description}
                key={e.id}
              />
            }) : null
          }
        </MedicinesList>
      </ScrollView>
      <FloatButtonCreateMedicines
        onPress={() => setCreateMedicineModal(true)}
      />
      <MedicinesCreateModal
        isOpen={createMedicineModal}
        setOpen={setCreateMedicineModal}
      />
    </>
  );
}
