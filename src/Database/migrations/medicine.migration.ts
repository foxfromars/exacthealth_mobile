import db from "..";

const rows = "id INTEGER PRIMARY KEY, name TEXT NOT NULL, type TEXT NOT NULL, description TEXT NOT NULL";


class MedicineMigration {
  async up() {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS Medicines (${rows});`,
          [],
        );
      }, error => console.log(error));
    } catch (err) {
      console.log(err);
    }
  }

  async down() {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE Medicines;",
        [],
      );
    }, error => console.log(error));
  }

}

export default new MedicineMigration();
