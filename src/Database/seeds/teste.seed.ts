import db from "..";

export default async function medicinesSeed() {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO Medicines (Name) values ('teste')",
      [],
    )
  });
}
