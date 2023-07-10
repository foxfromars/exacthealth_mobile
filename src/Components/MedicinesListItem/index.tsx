import {
  View,
  Text,
} from "react-native";

interface Props {
  id: Number;
  name: string;
}

export default function MedicinesListItem({
  id,
  name,
}: Props) {

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}
