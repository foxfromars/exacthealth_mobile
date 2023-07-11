import {
  Text,
} from "react-native";
import {
  TextField,
  TextInputWraper,
} from "./styles";

interface Props {
  label?: string;
  name?: string;
  onChange?: any;
  value?: string | null;
  multiline?: boolean;
  numberOfLines?: number;
}

export default function TextFieldComponent({
  label,
  value,
  onChange,
  name,
  multiline,
  numberOfLines,
}: Props) {

  return (
    <TextInputWraper>
      {
        label ? <Text>{label}</Text> : null
      }
      <TextField
        value={value}
        onChangeText={(text: string) => onChange(text, name)}
        multiline={multiline ? multiline : false}
        numberOfLines={numberOfLines}
      />
    </TextInputWraper>
  );
}
