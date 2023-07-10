import { View } from "react-native";
import { HeaderText, HeaderContainer } from "./styles";

interface Props {
  primary: string;
  secondary?: string;
}

export default function SessionTitle({
  primary,
  secondary
}: Props) {

  return (
    <View>
      <HeaderContainer>
        <HeaderText>{primary}</HeaderText>
      </HeaderContainer>
    </View>
  );
}
