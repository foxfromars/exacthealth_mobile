import styled from "styled-components";
import theme from "../../Theme/";
import {
  Dimensions
} from "react-native";

const width  = Dimensions.get("window").width;
const height  = Dimensions.get("window").height;

const buttonWidth = width/3;

export const ButtonContainer = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: grey;
  min-width: ${buttonWidth}px;
  border-radius: ${buttonWidth/2}px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: ${theme.palette?.primary?.main};
`;

export const ButtonText = styled.Text`
  color: ${theme.palette?.text?.secondary};
`;
