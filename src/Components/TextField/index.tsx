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
  type: "text" | "number";
}

export default function TextFieldComponent({
  label,
  value,
  onChange,
  name,
  multiline,
  numberOfLines,
  type,
}: Props) {

  function handleChange(value: string) {
    if(type === "text") {
      onChange(value, name);
    }  
    else if(type === "number") {
      const number = value.replace(/[^0-9]/g, '') 
      onChange(number, name);
    }
  }

  return (
    <TextInputWraper>
      {
        label ? <Text>{label}</Text> : null
      }
      <TextField
        value={value}
        onChangeText={handleChange}
        multiline={multiline ? multiline : false}
        numberOfLines={numberOfLines}
      />
    </TextInputWraper>
  );
}
