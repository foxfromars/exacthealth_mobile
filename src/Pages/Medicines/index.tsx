import { View, ScrollView } from "react-native";
import React, {
  useEffect,
  useState,
} from "react";

import { ListContainer } from "../../Components/List/styles";
import SessionTitle from "../../Components/SessionTitle";
import medicineService from "../../Services/medicine.service";
import MedicinesListItem from "../../Components/MedicinesListItem";
import FloatButtonCreateMedicines from "../../Components/FloatButtonCreateMedicines";
import MedicinesCreateModal from "../../Components/MedicinesCreateModal";


export default function Medicines() {
  const [items, setItems] = useState<any>();
  const [createMedicineModal, setCreateMedicineModal] = useState<boolean>(false);

  useEffect(() => {
    medicineService.getAll()
      .then((result) => {
        setItems(result);
      });
  }, []);

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}
      >
        <SessionTitle
          primary="Medicines"
        />
        <ListContainer>
          {
            items ? items.map((e: any) => {
              return <MedicinesListItem
                id={e.id}
                name={e.Name}
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
