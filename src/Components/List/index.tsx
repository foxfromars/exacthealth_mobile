import { View } from "react-native";

import { ListContainer } from "./styles";

interface Props {
  children: any;
}

export default function List({
  children,
}: Props) {

  return (
    <ListContainer>
      {children}
    </ListContainer>
  );
}
