import { ReactEventHandler } from "react";
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
  onClick?: any;
}

export default function MedicinesListItem({
  id,
  name,
  type,
  quantity,
  description,
  onClick,
}: Props) {

  return (
    <MedicinesListItemContainer
      onPress={() => {
        onClick({ id });
      }}
    >
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
