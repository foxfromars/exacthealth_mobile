import * as SQLite from "expo-sqlite";

function openDatabase() {
  const db = SQLite.openDatabase("exacthealth")
  return db;
}

const db = openDatabase()

export default db;
