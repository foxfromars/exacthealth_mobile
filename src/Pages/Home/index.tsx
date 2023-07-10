import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

import {
  useEffect,
  useState
} from "react";

import medicineMigration from '../../Database/migrations/medicine.migration';
import medicineService from '../../Services/medicine.service';
import db from '../../Database';


export default function Home() {
  const [user, setUser] = useState<string>("");
  const [medicines, setMedicines] = useState<any>();

  useEffect(() => {
    medicineMigration.up();
    medicineService.getAll(setMedicines);
  }, []);


  return (
    <View style={{
      height: "100%",
      width: "100%",
    }}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          backgroundColor: "blue",
        }}
      >
        {
          medicines ? medicines.map((e: any) => {
            return <Text>e?.Name</Text>
          }) : null
        }
      </View>
    </View>
  );
}
