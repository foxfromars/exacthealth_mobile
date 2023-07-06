import styled from "styled-components";
import { Dimensions } from "react-native";

const height = Dimensions.get("window").height;

//@ts-ignore
export const NavbarContainer = styled.View`
  background-color: black;
  height: ${height / 16}px;
  width: 100%;
  position: absolute;
  bottom: 0;
  align-items: center;
`;
