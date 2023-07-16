import db from "../Database";
import MedicineModel from "../Models/Medicine.model";

const tableName = "Medicines";

class MedicineService {
  async getAll() {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "SELECT * FROM Medicines",
            [],
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
        },
        function() {
          console.log('ok');
        }
      )
    });
  }

  async getOne(id: number) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `SELECT * FROM ${tableName} WHERE Id=?;`,
          [id],
          (_, result) => {
            console.log(result);
            resolve(result.rows._array);
          },
          function(error) {
            reject(false);
            throw new Error('error: ' + error);
          }
        )
      },
      function(error) {
        console.log(error);
        reject(undefined)
      },
      function() {
        console.log("Ok");
      }
      );
    });
  }

  async post(data: any) {
    const medicineData = new MedicineModel(data);
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            `INSERT INTO ${tableName} (name, type, quantity, description) VALUES (?,?,?,?);`,
            [
              medicineData.name,
              medicineData.type,
              medicineData.quantity,
              medicineData.description,
            ],
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
