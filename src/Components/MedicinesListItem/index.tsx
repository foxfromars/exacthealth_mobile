import {
  View,
  Text,
} from "react-native";
import { MedicinesListItemContainer, PrimaryText, SecondaryText } from "./styles";

interface Props {
  id: number;
  name: string;
  description?: string;
}

export default function MedicinesListItem({
  id,
  name,
  description,
}: Props) {

  return (
    <MedicinesListItemContainer>
      <PrimaryText>{name}</PrimaryText>
      <SecondaryText>{description}</SecondaryText>
    </MedicinesListItemContainer>
  );
}
