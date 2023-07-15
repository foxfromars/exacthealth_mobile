import { View } from "react-native";
import {
  MedicinesListItemContainer,
  PrimaryText,
  SecondaryText,
  QuantityValue,
} from "./styles";

interface Props {
  id: number;
  name: string;
  type: string;
  quantity: number;
  description?: string;
}

export default function MedicinesListItem({
  id,
  name,
  type,
  quantity,
  description,
}: Props) {

  return (
    <MedicinesListItemContainer>
      <View
        style={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <PrimaryText>{name}</PrimaryText>
        <SecondaryText>{type}</SecondaryText>
      </View>
      <View
        style={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <QuantityValue>{quantity}</QuantityValue>
      </View>
    </MedicinesListItemContainer>
  );
}
