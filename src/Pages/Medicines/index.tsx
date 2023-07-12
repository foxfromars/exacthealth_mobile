import React, {
  useEffect,
  useState,
} from "react";
import {
  RefreshControl,
  ScrollView
} from "react-native";

import { ListContainer } from "../../Components/List/styles";
import SessionTitle from "../../Components/SessionTitle";
import medicineService from "../../Services/medicine.service";
import MedicinesListItem from "../../Components/MedicinesListItem";
import FloatButtonCreateMedicines from "../../Components/FloatButtonCreateMedicines";
import MedicinesCreateModal from "../../Components/MedicinesCreateModal";


export default function Medicines() {
  const [items, setItems] = useState<any>();
  const [createMedicineModal, setCreateMedicineModal] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

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
        <ListContainer>
          {
            items ? items.map((e: any) => {
              return <MedicinesListItem
                id={e.id}
                name={e.name}
                key={e.id}
              />
            }) : null
          }
        </ListContainer>
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
