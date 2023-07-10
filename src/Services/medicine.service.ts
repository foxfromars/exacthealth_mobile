import db from "../Database";

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

  async post() {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO ${tableName} (Name) VALUES ("Teste");`
      ),
        []
    }
      , (error) => console.log(error)
    );
  }
}

export default new MedicineService();
