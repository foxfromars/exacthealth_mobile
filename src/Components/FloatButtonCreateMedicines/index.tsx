import {
  FloatButton
} from "./styles";

import AddIcon from "../Icons/AddIcon/";

interface Props {
  onPress?: any;
}

export default function FloatButtonCreateMedicines({
  onPress,
}: Props) {

  return (
    <FloatButton onPress={onPress}>
      <AddIcon />
    </FloatButton>
  );
}
