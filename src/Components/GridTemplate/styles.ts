import styled from "styled-components";
import { Dimensions } from "react-native";

const maxWidth: number = Dimensions.get("window").width;

export const GridTemplateComponent = styled.FlatList`
  width: ${maxWidth}px;
  flex-grow: 0;
`;
