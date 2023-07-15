interface Constructor {
  name: string;
  type: string;
  quantity: string | number;
  description: string;
}

class MedicineModel {
  name: string;
  type: string;
  quantity: number;
  description: string;

  constructor({
    name,
    type,
    quantity,
    description,
  }: Constructor) {

    if(name === undefined) throw new Error("Missing name value");
    if(type === undefined) throw new Error("Missing type value");
    if(quantity === undefined) throw new Error("Missing quantity value");
    if(description === undefined) throw new Error("Missing description value");

    this.name = name;
    this.type = type;
    this.description = description;
    this.quantity = typeof quantity === "number" ? quantity : parseInt(quantity);
  }
}

export default MedicineModel;
