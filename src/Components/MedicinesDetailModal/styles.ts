import styled from "styled-components";
import theme from "../../Theme/";

export const DetailModal = styled.Modal`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.ScrollView`
  display: flex;
  flexDirection: column;
  min-height: ${theme.dimensions.screenHeight}px;
  background-color: white;
`;

export const ElementsText = styled.Text`
  font-size: 20px;
  color: black;
`;
