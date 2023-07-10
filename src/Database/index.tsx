import * as SQLite from "expo-sqlite";

function openDatabase() {
  const db = SQLite.openDatabase("testeteste")
  return db;
}

const db = openDatabase()

export default db;
