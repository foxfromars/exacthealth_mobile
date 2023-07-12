import db from "../Database";
import MedicineModel, { MedicineModelInterface } from "../Models/Medicine.model";

const tableName = "Medicines";

class MedicineService {
  async getAll() {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql("SELECT * FROM Medicines", [],
            (_, results) => {
              console.log(results);
              resolve(results.rows._array);
            },
            function(error) {
              reject(false);
              throw new Error(
                'Error: ' + error
              );
            });
        },
        function(error) {
          reject(undefined);
          throw new Error('error: ' + error.message);
        },
        function() {
          console.log('ok');
        }
      )
    });
  }

  async getOne(id: number) {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${tableName} WHERE Id=${id};`,
        [],
        (_, result) => console.log(result)
      )
    });
  }

  async post(data: any) {
    const medicineData = new MedicineModel(data);
    const values = Object.values(medicineData);

    console.log(values);
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            `INSERT INTO ${tableName} (name, type, description) VALUES (?,?,?);`,
            values,
            (_, results) => {
              console.log(results);
              resolve(results.rows._array);
            },
            function(error) {
              reject(error);
              return false;
            });
        },
        function(error) {
          console.log(error);
          reject(error);
        },
        function() {
          console.log('ok');
        }
      )
    });
  }
}

export default new MedicineService();
