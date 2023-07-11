export interface MedicineModelInterface {
  name: string;
  type: string;
  description: string;
  createdAt: Date;
}

interface Constructor {
  name: string;
  type: string;
  description: string;
}

class MedicineModel {
  name: string;
  type: string;
  description: string;
  createdAt: Date;

  constructor({
    name,
    type,
    description,
  }: Constructor) {

    this.name = name;
    this.type = type;
    this.description = description;
    this.createdAt = new Date();
  }
}

export default MedicineModel;
