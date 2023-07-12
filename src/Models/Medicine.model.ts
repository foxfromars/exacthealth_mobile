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

  constructor({
    name,
    type,
    description,
  }: Constructor) {

    this.name = name;
    this.type = type;
    this.description = description;
  }
}

export default MedicineModel;
