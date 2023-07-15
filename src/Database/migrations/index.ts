import medicineMigration from "./medicine.migration";

class Migration {
  async runAll() {
    medicineMigration.up();
  }

  async undoAll() {
    medicineMigration.down();
  }
}

export default new Migration();
